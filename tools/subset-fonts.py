#!/usr/bin/env python3
"""Rebuild fonts/*.woff2 so they contain only the characters the game uses.

Run after changing any in-game text (new characters fall back to the system font
until the fonts are rebuilt):

    pip install fonttools brotli
    python3 tools/subset-fonts.py

Source fonts (SIL Open Font License) are downloaded from github.com/google/fonts.
"""
import os, sys, urllib.request
from fontTools import subset

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FONTS = {
    'stylish.woff2': 'https://raw.githubusercontent.com/google/fonts/main/ofl/stylish/Stylish-Regular.ttf',
    'gowun-dodum.woff2': 'https://raw.githubusercontent.com/google/fonts/main/ofl/gowundodum/GowunDodum-Regular.ttf',
}
SOURCES = ['index.html', 'game.js', 'revisions.html', 'i18n-en.js']
CACHE = os.path.join(ROOT, '.font-src')

def used_text():
    chars = set(chr(c) for c in range(0x20, 0x7f))
    for name in SOURCES:
        with open(os.path.join(ROOT, name), encoding='utf-8') as f:
            chars |= set(f.read())
    # Hangul syllables, Latin-1 punctuation and general punctuation/arrows the UI uses.
    keep = lambda c: c.isprintable() and (ord(c) < 0x2c00 or '가' <= c <= '힣' or c in '「」')
    return ''.join(sorted(c for c in chars if keep(c)))

def source(url):
    os.makedirs(CACHE, exist_ok=True)
    path = os.path.join(CACHE, os.path.basename(url))
    if not os.path.exists(path):
        urllib.request.urlretrieve(url, path)
    return path

def main():
    text = used_text()
    for out, url in FONTS.items():
        options = subset.Options()
        options.flavor = 'woff2'
        options.layout_features = ['*']
        options.name_IDs = ['*']
        options.notdef_outline = True
        font = subset.load_font(source(url), options)
        sub = subset.Subsetter(options)
        sub.populate(text=text)
        sub.subset(font)
        target = os.path.join(ROOT, 'fonts', out)
        subset.save_font(font, target, options)
        print(f'{out}: {os.path.getsize(target)/1024:.0f} KB')
    hangul = sum('가' <= c <= '힣' for c in text)
    print(f'{len(text)} characters ({hangul} Hangul syllables)')

if __name__ == '__main__':
    sys.exit(main())
