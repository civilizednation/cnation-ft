/* Three.js r170 and BufferGeometryUtils
The MIT License

Copyright © 2010-2024 three.js authors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
var CNATION3D=(()=>{var qc=Object.defineProperty;var Lp=Object.getOwnPropertyDescriptor;var Up=Object.getOwnPropertyNames;var Dp=Object.prototype.hasOwnProperty;var Np=(s,t)=>{for(var e in t)qc(s,e,{get:t[e],enumerable:!0})},Fp=(s,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Up(t))!Dp.call(s,i)&&i!==e&&qc(s,i,{get:()=>t[i],enumerable:!(n=Lp(t,i))||n.enumerable});return s};var Op=s=>Fp(qc({},"__esModule",{value:!0}),s);var Fy={};Np(Fy,{ACESFilmicToneMapping:()=>Vf,AddEquation:()=>ni,AddOperation:()=>Of,AdditiveAnimationBlendMode:()=>xu,AdditiveBlending:()=>Nl,AgXToneMapping:()=>Gf,AlphaFormat:()=>du,AlwaysCompare:()=>ap,AlwaysDepth:()=>Wo,AlwaysStencilFunc:()=>zl,AmbientLight:()=>bc,AnimationAction:()=>Uc,AnimationClip:()=>Xi,AnimationLoader:()=>gh,AnimationMixer:()=>Uh,AnimationObjectGroup:()=>Lh,AnimationUtils:()=>vy,ArcCurve:()=>Va,ArrayCamera:()=>Ta,ArrowHelper:()=>nu,AttachedBindMode:()=>Bl,Audio:()=>Pc,AudioAnalyser:()=>Ih,AudioContext:()=>Hr,AudioListener:()=>Ch,AudioLoader:()=>Ah,AxesHelper:()=>iu,BackSide:()=>Be,BasicDepthPacking:()=>Qf,BasicShadowMap:()=>Vp,BatchedMesh:()=>Fa,Bone:()=>br,BooleanKeyframeTrack:()=>Xn,Box2:()=>Gh,Box3:()=>Ae,Box3Helper:()=>tu,BoxGeometry:()=>Ni,BoxHelper:()=>jh,BufferAttribute:()=>Qt,BufferGeometry:()=>zt,BufferGeometryLoader:()=>Rc,ByteType:()=>lu,Cache:()=>Fn,Camera:()=>Es,CameraHelper:()=>Qh,CanvasTexture:()=>uh,CapsuleGeometry:()=>Ya,CatmullRomCurve3:()=>Ha,CineonToneMapping:()=>kf,CircleGeometry:()=>Za,ClampToEdgeWrapping:()=>en,Clock:()=>Ic,Color:()=>ut,ColorKeyframeTrack:()=>Br,ColorManagement:()=>Yt,CompressedArrayTexture:()=>lh,CompressedCubeTexture:()=>hh,CompressedTexture:()=>Ts,CompressedTextureLoader:()=>_h,ConeGeometry:()=>Ja,ConstantAlphaFactor:()=>Df,ConstantColorFactor:()=>Lf,Controls:()=>ru,CubeCamera:()=>wa,CubeReflectionMapping:()=>Hn,CubeRefractionMapping:()=>si,CubeTexture:()=>Fi,CubeTextureLoader:()=>xh,CubeUVReflectionMapping:()=>Is,CubicBezierCurve:()=>wr,CubicBezierCurve3:()=>Ga,CubicInterpolant:()=>gc,CullFaceBack:()=>Dl,CullFaceFront:()=>gf,CullFaceFrontBack:()=>kp,CullFaceNone:()=>mf,Curve:()=>Ke,CurvePath:()=>qa,CustomBlending:()=>xf,CustomToneMapping:()=>Hf,CylinderGeometry:()=>Rs,Cylindrical:()=>Vh,Data3DTexture:()=>mr,DataArrayTexture:()=>Ms,DataTexture:()=>nn,DataTextureLoader:()=>vh,DataUtils:()=>$m,DecrementStencilOp:()=>Qp,DecrementWrapStencilOp:()=>tm,DefaultLoadingManager:()=>wp,DepthFormat:()=>Ii,DepthStencilFormat:()=>Di,DepthTexture:()=>vr,DetachedBindMode:()=>Xf,DirectionalLight:()=>Sc,DirectionalLightHelper:()=>Kh,DiscreteInterpolant:()=>_c,DodecahedronGeometry:()=>$a,DoubleSide:()=>gn,DstAlphaFactor:()=>Tf,DstColorFactor:()=>Rf,DynamicCopyUsage:()=>mm,DynamicDrawUsage:()=>lm,DynamicReadUsage:()=>dm,EdgesGeometry:()=>Ka,EllipseCurve:()=>Cs,EqualCompare:()=>ip,EqualDepth:()=>qo,EqualStencilFunc:()=>sm,EquirectangularReflectionMapping:()=>or,EquirectangularRefractionMapping:()=>ar,Euler:()=>Je,EventDispatcher:()=>sn,ExtrudeGeometry:()=>Qa,FileLoader:()=>dn,Float16BufferAttribute:()=>Zl,Float32BufferAttribute:()=>vt,FloatType:()=>Ge,Fog:()=>Ra,FogExp2:()=>Ca,FramebufferTexture:()=>ch,FrontSide:()=>Vn,Frustum:()=>Oi,GLBufferAttribute:()=>Oh,GLSL1:()=>_m,GLSL3:()=>kl,GreaterCompare:()=>sp,GreaterDepth:()=>Zo,GreaterEqualCompare:()=>op,GreaterEqualDepth:()=>Yo,GreaterEqualStencilFunc:()=>cm,GreaterStencilFunc:()=>om,GridHelper:()=>Jh,Group:()=>ii,HalfFloatType:()=>Ps,HemisphereLight:()=>vc,HemisphereLightHelper:()=>Zh,IcosahedronGeometry:()=>ja,ImageBitmapLoader:()=>wh,ImageLoader:()=>qi,ImageUtils:()=>ba,IncrementStencilOp:()=>Kp,IncrementWrapStencilOp:()=>jp,InstancedBufferAttribute:()=>Wn,InstancedBufferGeometry:()=>Cc,InstancedInterleavedBuffer:()=>Fh,InstancedMesh:()=>Na,Int16BufferAttribute:()=>ql,Int32BufferAttribute:()=>Yl,Int8BufferAttribute:()=>Gl,IntType:()=>Fc,InterleavedBuffer:()=>Bi,InterleavedBufferAttribute:()=>oi,Interpolant:()=>Vi,InterpolateDiscrete:()=>hr,InterpolateLinear:()=>Sa,InterpolateSmooth:()=>ko,InvertStencilOp:()=>em,KeepStencilOp:()=>bi,KeyframeTrack:()=>Qe,LOD:()=>La,LatheGeometry:()=>Ir,Layers:()=>Ss,LessCompare:()=>np,LessDepth:()=>Xo,LessEqualCompare:()=>vu,LessEqualDepth:()=>Li,LessEqualStencilFunc:()=>rm,LessStencilFunc:()=>im,Light:()=>En,LightProbe:()=>Ac,Line:()=>bn,Line3:()=>Wh,LineBasicMaterial:()=>Te,LineCurve:()=>Ar,LineCurve3:()=>Wa,LineDashedMaterial:()=>mc,LineLoop:()=>za,LineSegments:()=>rn,LinearFilter:()=>ve,LinearInterpolant:()=>Or,LinearMipMapLinearFilter:()=>Xp,LinearMipMapNearestFilter:()=>Wp,LinearMipmapLinearFilter:()=>xn,LinearMipmapNearestFilter:()=>$s,LinearSRGBColorSpace:()=>Yi,LinearToneMapping:()=>Bf,LinearTransfer:()=>Xr,Loader:()=>Ue,LoaderUtils:()=>Vr,LoadingManager:()=>zr,LoopOnce:()=>qf,LoopPingPong:()=>Zf,LoopRepeat:()=>Yf,LuminanceAlphaFormat:()=>mu,LuminanceFormat:()=>pu,MOUSE:()=>Bp,Material:()=>Ee,MaterialLoader:()=>Tc,MathUtils:()=>Dm,Matrix2:()=>Hh,Matrix3:()=>Bt,Matrix4:()=>Dt,MaxEquation:()=>Sf,Mesh:()=>pe,MeshBasicMaterial:()=>Sn,MeshDepthMaterial:()=>yr,MeshDistanceMaterial:()=>Mr,MeshLambertMaterial:()=>fc,MeshMatcapMaterial:()=>pc,MeshNormalMaterial:()=>dc,MeshPhongMaterial:()=>hc,MeshPhysicalMaterial:()=>lc,MeshStandardMaterial:()=>Fr,MeshToonMaterial:()=>uc,MinEquation:()=>Mf,MirroredRepeatWrapping:()=>lr,MixOperation:()=>Ff,MultiplyBlending:()=>Ol,MultiplyOperation:()=>Gr,NearestFilter:()=>we,NearestMipMapLinearFilter:()=>Gp,NearestMipMapNearestFilter:()=>Hp,NearestMipmapLinearFilter:()=>fs,NearestMipmapNearestFilter:()=>cu,NeutralToneMapping:()=>Wf,NeverCompare:()=>ep,NeverDepth:()=>Go,NeverStencilFunc:()=>nm,NoBlending:()=>On,NoColorSpace:()=>Un,NoToneMapping:()=>Bn,NormalAnimationBlendMode:()=>Hc,NormalBlending:()=>Ri,NotEqualCompare:()=>rp,NotEqualDepth:()=>Jo,NotEqualStencilFunc:()=>am,NumberKeyframeTrack:()=>Hi,Object3D:()=>jt,ObjectLoader:()=>Eh,ObjectSpaceNormalMap:()=>tp,OctahedronGeometry:()=>Dr,OneFactor:()=>Ef,OneMinusConstantAlphaFactor:()=>Nf,OneMinusConstantColorFactor:()=>Uf,OneMinusDstAlphaFactor:()=>Cf,OneMinusDstColorFactor:()=>If,OneMinusSrcAlphaFactor:()=>Ho,OneMinusSrcColorFactor:()=>Af,OrthographicCamera:()=>As,PCFShadowMap:()=>au,PCFSoftShadowMap:()=>_f,PMREMGenerator:()=>xr,Path:()=>zi,PerspectiveCamera:()=>xe,Plane:()=>mn,PlaneGeometry:()=>ws,PlaneHelper:()=>eu,PointLight:()=>Mc,PointLightHelper:()=>Yh,Points:()=>ka,PointsMaterial:()=>Er,PolarGridHelper:()=>$h,PolyhedronGeometry:()=>ai,PositionalAudio:()=>Rh,PropertyBinding:()=>re,PropertyMixer:()=>Lc,QuadraticBezierCurve:()=>Tr,QuadraticBezierCurve3:()=>Cr,Quaternion:()=>Le,QuaternionKeyframeTrack:()=>Gi,QuaternionLinearInterpolant:()=>xc,RED_GREEN_RGTC2_Format:()=>ya,RED_RGTC1_Format:()=>_u,REVISION:()=>Dc,RGBADepthPacking:()=>jf,RGBAFormat:()=>Oe,RGBAIntegerFormat:()=>Vc,RGBA_ASTC_10x10_Format:()=>pa,RGBA_ASTC_10x5_Format:()=>ua,RGBA_ASTC_10x6_Format:()=>da,RGBA_ASTC_10x8_Format:()=>fa,RGBA_ASTC_12x10_Format:()=>ma,RGBA_ASTC_12x12_Format:()=>ga,RGBA_ASTC_4x4_Format:()=>ia,RGBA_ASTC_5x4_Format:()=>sa,RGBA_ASTC_5x5_Format:()=>ra,RGBA_ASTC_6x5_Format:()=>oa,RGBA_ASTC_6x6_Format:()=>aa,RGBA_ASTC_8x5_Format:()=>ca,RGBA_ASTC_8x6_Format:()=>la,RGBA_ASTC_8x8_Format:()=>ha,RGBA_BPTC_Format:()=>er,RGBA_ETC2_EAC_Format:()=>na,RGBA_PVRTC_2BPPV1_Format:()=>jo,RGBA_PVRTC_4BPPV1_Format:()=>Qo,RGBA_S3TC_DXT1_Format:()=>Qs,RGBA_S3TC_DXT3_Format:()=>js,RGBA_S3TC_DXT5_Format:()=>tr,RGBDepthPacking:()=>Yp,RGBFormat:()=>fu,RGBIntegerFormat:()=>qp,RGB_BPTC_SIGNED_Format:()=>_a,RGB_BPTC_UNSIGNED_Format:()=>xa,RGB_ETC1_Format:()=>ta,RGB_ETC2_Format:()=>ea,RGB_PVRTC_2BPPV1_Format:()=>Ko,RGB_PVRTC_4BPPV1_Format:()=>$o,RGB_S3TC_DXT1_Format:()=>Ks,RGDepthPacking:()=>Zp,RGFormat:()=>gu,RGIntegerFormat:()=>kc,RawShaderMaterial:()=>cc,Ray:()=>ri,Raycaster:()=>Bh,RectAreaLight:()=>Ec,RedFormat:()=>zc,RedIntegerFormat:()=>Wr,ReinhardToneMapping:()=>zf,RenderTarget:()=>Ea,RepeatWrapping:()=>cr,ReplaceStencilOp:()=>$p,ReverseSubtractEquation:()=>yf,RingGeometry:()=>tc,SIGNED_RED_GREEN_RGTC2_Format:()=>Ma,SIGNED_RED_RGTC1_Format:()=>va,SRGBColorSpace:()=>He,SRGBTransfer:()=>se,Scene:()=>Ia,ShaderChunk:()=>Wt,ShaderLib:()=>un,ShaderMaterial:()=>$e,ShadowMaterial:()=>ac,Shape:()=>kn,ShapeGeometry:()=>ec,ShapePath:()=>su,ShapeUtils:()=>yn,ShortType:()=>hu,Skeleton:()=>Da,SkeletonHelper:()=>qh,SkinnedMesh:()=>Ua,Source:()=>Nn,Sphere:()=>be,SphereGeometry:()=>Nr,Spherical:()=>kh,SphericalHarmonics3:()=>wc,SplineCurve:()=>Rr,SpotLight:()=>yc,SpotLightHelper:()=>Xh,Sprite:()=>Pa,SpriteMaterial:()=>Sr,SrcAlphaFactor:()=>Vo,SrcAlphaSaturateFactor:()=>Pf,SrcColorFactor:()=>wf,StaticCopyUsage:()=>pm,StaticDrawUsage:()=>dr,StaticReadUsage:()=>um,StereoCamera:()=>Th,StreamCopyUsage:()=>gm,StreamDrawUsage:()=>hm,StreamReadUsage:()=>fm,StringKeyframeTrack:()=>qn,SubtractEquation:()=>vf,SubtractiveBlending:()=>Fl,TOUCH:()=>zp,TangentSpaceNormalMap:()=>ci,TetrahedronGeometry:()=>nc,Texture:()=>_e,TextureLoader:()=>yh,TextureUtils:()=>Cv,TorusGeometry:()=>ic,TorusKnotGeometry:()=>sc,Triangle:()=>_n,TriangleFanDrawMode:()=>Kf,TriangleStripDrawMode:()=>$f,TrianglesDrawMode:()=>Jf,TubeGeometry:()=>rc,UVMapping:()=>Nc,Uint16BufferAttribute:()=>gr,Uint32BufferAttribute:()=>_r,Uint8BufferAttribute:()=>Wl,Uint8ClampedBufferAttribute:()=>Xl,Uniform:()=>Dh,UniformsGroup:()=>Nh,UniformsLib:()=>ct,UniformsUtils:()=>dp,UnsignedByteType:()=>Mn,UnsignedInt248Type:()=>Ui,UnsignedInt5999Type:()=>uu,UnsignedIntType:()=>Gn,UnsignedShort4444Type:()=>Oc,UnsignedShort5551Type:()=>Bc,UnsignedShortType:()=>vs,VSMShadowMap:()=>pn,Vector2:()=>$,Vector3:()=>T,Vector4:()=>$t,VectorKeyframeTrack:()=>Wi,VideoTexture:()=>ah,WebGL3DRenderTarget:()=>Hl,WebGLArrayRenderTarget:()=>Vl,WebGLCoordinateSystem:()=>vn,WebGLCubeRenderTarget:()=>Aa,WebGLMultipleRenderTargets:()=>ou,WebGLRenderTarget:()=>Ze,WebGLRenderer:()=>sh,WebGLUtils:()=>xp,WebGPUCoordinateSystem:()=>fr,WireframeGeometry:()=>oc,WrapAroundEnding:()=>ur,ZeroCurvatureEnding:()=>Ai,ZeroFactor:()=>bf,ZeroSlopeEnding:()=>Ti,ZeroStencilOp:()=>Jp,createCanvasElement:()=>lp,mergeGeometries:()=>Cp});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Dc="170",Bp={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},zp={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},mf=0,Dl=1,gf=2,kp=3,Vp=0,au=1,_f=2,pn=3,Vn=0,Be=1,gn=2,On=0,Ri=1,Nl=2,Fl=3,Ol=4,xf=5,ni=100,vf=101,yf=102,Mf=103,Sf=104,bf=200,Ef=201,wf=202,Af=203,Vo=204,Ho=205,Tf=206,Cf=207,Rf=208,If=209,Pf=210,Lf=211,Uf=212,Df=213,Nf=214,Go=0,Wo=1,Xo=2,Li=3,qo=4,Yo=5,Zo=6,Jo=7,Gr=0,Ff=1,Of=2,Bn=0,Bf=1,zf=2,kf=3,Vf=4,Hf=5,Gf=6,Wf=7,Bl="attached",Xf="detached",Nc=300,Hn=301,si=302,or=303,ar=304,Is=306,cr=1e3,en=1001,lr=1002,we=1003,cu=1004,Hp=1004,fs=1005,Gp=1005,ve=1006,$s=1007,Wp=1007,xn=1008,Xp=1008,Mn=1009,lu=1010,hu=1011,vs=1012,Fc=1013,Gn=1014,Ge=1015,Ps=1016,Oc=1017,Bc=1018,Ui=1020,uu=35902,du=1021,fu=1022,Oe=1023,pu=1024,mu=1025,Ii=1026,Di=1027,zc=1028,Wr=1029,gu=1030,kc=1031,qp=1032,Vc=1033,Ks=33776,Qs=33777,js=33778,tr=33779,$o=35840,Ko=35841,Qo=35842,jo=35843,ta=36196,ea=37492,na=37496,ia=37808,sa=37809,ra=37810,oa=37811,aa=37812,ca=37813,la=37814,ha=37815,ua=37816,da=37817,fa=37818,pa=37819,ma=37820,ga=37821,er=36492,_a=36494,xa=36495,_u=36283,va=36284,ya=36285,Ma=36286,qf=2200,Yf=2201,Zf=2202,hr=2300,Sa=2301,ko=2302,Ai=2400,Ti=2401,ur=2402,Hc=2500,xu=2501,Jf=0,$f=1,Kf=2,Qf=3200,jf=3201,Yp=3202,Zp=3203,ci=0,tp=1,Un="",He="srgb",Yi="srgb-linear",Xr="linear",se="srgb",Jp=0,bi=7680,$p=7681,Kp=7682,Qp=7683,jp=34055,tm=34056,em=5386,nm=512,im=513,sm=514,rm=515,om=516,am=517,cm=518,zl=519,ep=512,np=513,ip=514,vu=515,sp=516,rp=517,op=518,ap=519,dr=35044,lm=35048,hm=35040,um=35045,dm=35049,fm=35041,pm=35046,mm=35050,gm=35042,_m="100",kl="300 es",vn=2e3,fr=2001,sn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Du=1234567,Pi=Math.PI/180,ys=180/Math.PI;function Ye(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Re[s&255]+Re[s>>8&255]+Re[s>>16&255]+Re[s>>24&255]+"-"+Re[t&255]+Re[t>>8&255]+"-"+Re[t>>16&15|64]+Re[t>>24&255]+"-"+Re[e&63|128]+Re[e>>8&255]+"-"+Re[e>>16&255]+Re[e>>24&255]+Re[n&255]+Re[n>>8&255]+Re[n>>16&255]+Re[n>>24&255]).toLowerCase()}function fe(s,t,e){return Math.max(t,Math.min(e,s))}function yu(s,t){return(s%t+t)%t}function xm(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function vm(s,t,e){return s!==t?(e-s)/(t-s):0}function nr(s,t,e){return(1-e)*s+e*t}function ym(s,t,e,n){return nr(s,t,1-Math.exp(-e*n))}function Mm(s,t=1){return t-Math.abs(yu(s,t*2)-t)}function Sm(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function bm(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Em(s,t){return s+Math.floor(Math.random()*(t-s+1))}function wm(s,t){return s+Math.random()*(t-s)}function Am(s){return s*(.5-Math.random())}function Tm(s){s!==void 0&&(Du=s);let t=Du+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Cm(s){return s*Pi}function Rm(s){return s*ys}function Im(s){return(s&s-1)===0&&s!==0}function Pm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Lm(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Um(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),m=o((n-t)/2);switch(i){case"XYX":s.set(a*h,c*u,c*d,a*l);break;case"YZY":s.set(c*d,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*d,a*h,a*l);break;case"XZX":s.set(a*h,c*m,c*f,a*l);break;case"YXY":s.set(c*f,a*h,c*m,a*l);break;case"ZYZ":s.set(c*m,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Fe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Vt(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Dm={DEG2RAD:Pi,RAD2DEG:ys,generateUUID:Ye,clamp:fe,euclideanModulo:yu,mapLinear:xm,inverseLerp:vm,lerp:nr,damp:ym,pingpong:Mm,smoothstep:Sm,smootherstep:bm,randInt:Em,randFloat:wm,randFloatSpread:Am,seededRandom:Tm,degToRad:Cm,radToDeg:Rm,isPowerOfTwo:Im,ceilPowerOfTwo:Pm,floorPowerOfTwo:Lm,setQuaternionFromProperEuler:Um,normalize:Vt,denormalize:Fe},$=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Bt=class s{constructor(t,e,n,i,r,o,a,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],_=i[0],g=i[3],p=i[6],y=i[1],v=i[4],x=i[7],P=i[2],w=i[5],C=i[8];return r[0]=o*_+a*y+c*P,r[3]=o*g+a*v+c*w,r[6]=o*p+a*x+c*C,r[1]=l*_+h*y+u*P,r[4]=l*g+h*v+u*w,r[7]=l*p+h*x+u*C,r[2]=d*_+f*y+m*P,r[5]=d*g+f*v+m*w,r[8]=d*p+f*x+m*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,m=e*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return t[0]=u*_,t[1]=(i*l-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=d*_,t[4]=(h*e-i*c)*_,t[5]=(i*r-a*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Yc.makeScale(t,e)),this}rotate(t){return this.premultiply(Yc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Yc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Yc=new Bt;function cp(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}var Nm={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function ps(s,t){return new Nm[s](t)}function pr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function lp(){let s=pr("canvas");return s.style.display="block",s}var Nu={};function Ys(s){s in Nu||(Nu[s]=!0,console.warn(s))}function Fm(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Om(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Bm(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Yt={enabled:!0,workingColorSpace:Yi,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===se&&(s.r=zn(s.r),s.g=zn(s.g),s.b=zn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===se&&(s.r=_s(s.r),s.g=_s(s.g),s.b=_s(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Un?Xr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function zn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function _s(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Fu=[.64,.33,.3,.6,.15,.06],Ou=[.2126,.7152,.0722],Bu=[.3127,.329],zu=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ku=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Yt.define({[Yi]:{primaries:Fu,whitePoint:Bu,transfer:Xr,toXYZ:zu,fromXYZ:ku,luminanceCoefficients:Ou,workingColorSpaceConfig:{unpackColorSpace:He},outputColorSpaceConfig:{drawingBufferColorSpace:He}},[He]:{primaries:Fu,whitePoint:Bu,transfer:se,toXYZ:zu,fromXYZ:ku,luminanceCoefficients:Ou,outputColorSpaceConfig:{drawingBufferColorSpace:He}}});var Ji,ba=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ji===void 0&&(Ji=pr("canvas")),Ji.width=t.width,Ji.height=t.height;let n=Ji.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ji}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=pr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=zn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(zn(e[n]/255)*255):e[n]=zn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},zm=0,Nn=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=Ye(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Zc(i[o].image)):r.push(Zc(i[o]))}else r=Zc(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Zc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ba.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var km=0,_e=class s extends sn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=en,i=en,r=ve,o=xn,a=Oe,c=Mn,l=s.DEFAULT_ANISOTROPY,h=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:km++}),this.uuid=Ye(),this.name="",this.source=new Nn(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new $(0,0),this.repeat=new $(1,1),this.center=new $(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Nc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case cr:t.x=t.x-Math.floor(t.x);break;case en:t.x=t.x<0?0:1;break;case lr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case cr:t.y=t.y-Math.floor(t.y);break;case en:t.y=t.y<0?0:1;break;case lr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};_e.DEFAULT_IMAGE=null;_e.DEFAULT_MAPPING=Nc;_e.DEFAULT_ANISOTROPY=1;var $t=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],_=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(l+1)/2,x=(f+1)/2,P=(p+1)/2,w=(h+d)/4,C=(u+_)/4,R=(m+g)/4;return v>x&&v>P?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=w/n,r=C/n):x>P?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=w/i,r=R/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=C/r,i=R/r),this.set(n,i,r,e),this}let y=Math.sqrt((g-m)*(g-m)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ea=class extends sn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new $t(0,0,t,e),this.scissorTest=!1,this.viewport=new $t(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ve,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new _e(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Nn(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ze=class extends Ea{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ms=class extends _e{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=we,this.minFilter=we,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},Vl=class extends Ze{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Ms(null,t,e,n),this.texture.isRenderTargetTexture=!0}},mr=class extends _e{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=we,this.minFilter=we,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Hl=class extends Ze{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new mr(null,t,e,n),this.texture.isRenderTargetTexture=!0}},Le=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],f=r[o+1],m=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=_;return}if(u!==_||c!==d||l!==f||h!==m){let g=1-a,p=c*d+l*f+h*m+u*_,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let P=Math.sqrt(v),w=Math.atan2(P,p*y);g=Math.sin(g*w)/P,a=Math.sin(a*w)/P}let x=a*y;if(c=c*g+d*x,l=l*g+f*x,h=h*g+m*x,u=u*g+_*x,g===1-a){let P=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=P,l*=P,h*=P,u*=P}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*u+c*f-l*d,t[e+1]=c*m+h*d+l*u-a*f,t[e+2]=l*m+h*f+a*d-c*u,t[e+3]=h*m-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),d=c(n/2),f=c(i/2),m=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Jc.copy(this).projectOnVector(t),this.sub(Jc)}reflect(t){return this.sub(Jc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Jc=new T,Vu=new Le,Ae=class{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,cn):cn.fromBufferAttribute(r,o),cn.applyMatrix4(t.matrixWorld),this.expandByPoint(cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Zr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zr.copy(n.boundingBox)),Zr.applyMatrix4(t.matrixWorld),this.union(Zr)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,cn),cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ns),Jr.subVectors(this.max,Ns),$i.subVectors(t.a,Ns),Ki.subVectors(t.b,Ns),Qi.subVectors(t.c,Ns),Jn.subVectors(Ki,$i),$n.subVectors(Qi,Ki),hi.subVectors($i,Qi);let e=[0,-Jn.z,Jn.y,0,-$n.z,$n.y,0,-hi.z,hi.y,Jn.z,0,-Jn.x,$n.z,0,-$n.x,hi.z,0,-hi.x,-Jn.y,Jn.x,0,-$n.y,$n.x,0,-hi.y,hi.x,0];return!$c(e,$i,Ki,Qi,Jr)||(e=[1,0,0,0,1,0,0,0,1],!$c(e,$i,Ki,Qi,Jr))?!1:($r.crossVectors(Jn,$n),e=[$r.x,$r.y,$r.z],$c(e,$i,Ki,Qi,Jr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Tn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Tn=[new T,new T,new T,new T,new T,new T,new T,new T],cn=new T,Zr=new Ae,$i=new T,Ki=new T,Qi=new T,Jn=new T,$n=new T,hi=new T,Ns=new T,Jr=new T,$r=new T,ui=new T;function $c(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ui.fromArray(s,r);let a=i.x*Math.abs(ui.x)+i.y*Math.abs(ui.y)+i.z*Math.abs(ui.z),c=t.dot(ui),l=e.dot(ui),h=n.dot(ui);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Vm=new Ae,Fs=new T,Kc=new T,be=class{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Vm.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fs.subVectors(t,this.center);let e=Fs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Fs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Kc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fs.copy(t.center).add(Kc)),this.expandByPoint(Fs.copy(t.center).sub(Kc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Cn=new T,Qc=new T,Kr=new T,Kn=new T,jc=new T,Qr=new T,tl=new T,ri=class{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Cn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Cn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Cn.copy(this.origin).addScaledVector(this.direction,e),Cn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Qc.copy(t).add(e).multiplyScalar(.5),Kr.copy(e).sub(t).normalize(),Kn.copy(this.origin).sub(Qc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Kr),a=Kn.dot(this.direction),c=-Kn.dot(Kr),l=Kn.lengthSq(),h=Math.abs(1-o*o),u,d,f,m;if(h>0)if(u=o*c-a,d=o*a-c,m=r*h,u>=0)if(d>=-m)if(d<=m){let _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Qc).addScaledVector(Kr,d),f}intersectSphere(t,e){Cn.subVectors(t.center,this.origin);let n=Cn.dot(this.direction),i=Cn.dot(Cn)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Cn)!==null}intersectTriangle(t,e,n,i,r){jc.subVectors(e,t),Qr.subVectors(n,t),tl.crossVectors(jc,Qr);let o=this.direction.dot(tl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Kn.subVectors(this.origin,t);let c=a*this.direction.dot(Qr.crossVectors(Kn,Qr));if(c<0)return null;let l=a*this.direction.dot(jc.cross(Kn));if(l<0||c+l>o)return null;let h=-a*Kn.dot(tl);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Dt=class s{constructor(t,e,n,i,r,o,a,c,l,h,u,d,f,m,_,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,h,u,d,f,m,_,g)}set(t,e,n,i,r,o,a,c,l,h,u,d,f,m,_,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/ji.setFromMatrixColumn(t,0).length(),r=1/ji.setFromMatrixColumn(t,1).length(),o=1/ji.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,m=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+m*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=m+f*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,f=c*u,m=l*h,_=l*u;e[0]=d+_*a,e[4]=m*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,f=c*u,m=l*h,_=l*u;e[0]=d-_*a,e[4]=-o*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,f=o*u,m=a*h,_=a*u;e[0]=c*h,e[4]=m*l-f,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=f*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,f=o*l,m=a*c,_=a*l;e[0]=c*h,e[4]=_-d*u,e[8]=m*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+m,e[10]=d-_*u}else if(t.order==="XZY"){let d=o*c,f=o*l,m=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hm,t,Gm)}lookAt(t,e,n){let i=this.elements;return Xe.subVectors(t,e),Xe.lengthSq()===0&&(Xe.z=1),Xe.normalize(),Qn.crossVectors(n,Xe),Qn.lengthSq()===0&&(Math.abs(n.z)===1?Xe.x+=1e-4:Xe.z+=1e-4,Xe.normalize(),Qn.crossVectors(n,Xe)),Qn.normalize(),jr.crossVectors(Xe,Qn),i[0]=Qn.x,i[4]=jr.x,i[8]=Xe.x,i[1]=Qn.y,i[5]=jr.y,i[9]=Xe.y,i[2]=Qn.z,i[6]=jr.z,i[10]=Xe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],y=n[3],v=n[7],x=n[11],P=n[15],w=i[0],C=i[4],R=i[8],b=i[12],M=i[1],L=i[5],k=i[9],O=i[13],V=i[2],Z=i[6],H=i[10],et=i[14],G=i[3],at=i[7],mt=i[11],St=i[15];return r[0]=o*w+a*M+c*V+l*G,r[4]=o*C+a*L+c*Z+l*at,r[8]=o*R+a*k+c*H+l*mt,r[12]=o*b+a*O+c*et+l*St,r[1]=h*w+u*M+d*V+f*G,r[5]=h*C+u*L+d*Z+f*at,r[9]=h*R+u*k+d*H+f*mt,r[13]=h*b+u*O+d*et+f*St,r[2]=m*w+_*M+g*V+p*G,r[6]=m*C+_*L+g*Z+p*at,r[10]=m*R+_*k+g*H+p*mt,r[14]=m*b+_*O+g*et+p*St,r[3]=y*w+v*M+x*V+P*G,r[7]=y*C+v*L+x*Z+P*at,r[11]=y*R+v*k+x*H+P*mt,r[15]=y*b+v*O+x*et+P*St,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],_=t[7],g=t[11],p=t[15];return m*(+r*c*u-i*l*u-r*a*d+n*l*d+i*a*f-n*c*f)+_*(+e*c*f-e*l*d+r*o*d-i*o*f+i*l*h-r*c*h)+g*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-i*a*h-e*c*u+e*a*d+i*o*u-n*o*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],_=t[13],g=t[14],p=t[15],y=u*g*l-_*d*l+_*c*f-a*g*f-u*c*p+a*d*p,v=m*d*l-h*g*l-m*c*f+o*g*f+h*c*p-o*d*p,x=h*_*l-m*u*l+m*a*f-o*_*f-h*a*p+o*u*p,P=m*u*c-h*_*c-m*a*d+o*_*d+h*a*g-o*u*g,w=e*y+n*v+i*x+r*P;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/w;return t[0]=y*C,t[1]=(_*d*r-u*g*r-_*i*f+n*g*f+u*i*p-n*d*p)*C,t[2]=(a*g*r-_*c*r+_*i*l-n*g*l-a*i*p+n*c*p)*C,t[3]=(u*c*r-a*d*r-u*i*l+n*d*l+a*i*f-n*c*f)*C,t[4]=v*C,t[5]=(h*g*r-m*d*r+m*i*f-e*g*f-h*i*p+e*d*p)*C,t[6]=(m*c*r-o*g*r-m*i*l+e*g*l+o*i*p-e*c*p)*C,t[7]=(o*d*r-h*c*r+h*i*l-e*d*l-o*i*f+e*c*f)*C,t[8]=x*C,t[9]=(m*u*r-h*_*r-m*n*f+e*_*f+h*n*p-e*u*p)*C,t[10]=(o*_*r-m*a*r+m*n*l-e*_*l-o*n*p+e*a*p)*C,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*C,t[12]=P*C,t[13]=(h*_*i-m*u*i+m*n*d-e*_*d-h*n*g+e*u*g)*C,t[14]=(m*a*i-o*_*i-m*n*c+e*_*c+o*n*g-e*a*g)*C,t[15]=(o*u*i-h*a*i+h*n*c-e*u*c-o*n*d+e*a*d)*C,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,m=r*u,_=o*h,g=o*u,p=a*u,y=c*l,v=c*h,x=c*u,P=n.x,w=n.y,C=n.z;return i[0]=(1-(_+p))*P,i[1]=(f+x)*P,i[2]=(m-v)*P,i[3]=0,i[4]=(f-x)*w,i[5]=(1-(d+p))*w,i[6]=(g+y)*w,i[7]=0,i[8]=(m+v)*C,i[9]=(g-y)*C,i[10]=(1-(d+_))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=ji.set(i[0],i[1],i[2]).length(),o=ji.set(i[4],i[5],i[6]).length(),a=ji.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],ln.copy(this);let l=1/r,h=1/o,u=1/a;return ln.elements[0]*=l,ln.elements[1]*=l,ln.elements[2]*=l,ln.elements[4]*=h,ln.elements[5]*=h,ln.elements[6]*=h,ln.elements[8]*=u,ln.elements[9]*=u,ln.elements[10]*=u,e.setFromRotationMatrix(ln),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=vn){let c=this.elements,l=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),f,m;if(a===vn)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===fr)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=vn){let c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(o-r),d=(e+t)*l,f=(n+i)*h,m,_;if(a===vn)m=(o+r)*u,_=-2*u;else if(a===fr)m=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ji=new T,ln=new Dt,Hm=new T(0,0,0),Gm=new T(1,1,1),Qn=new T,jr=new T,Xe=new T,Hu=new Dt,Gu=new Le,Je=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(fe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-fe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(fe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Hu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Gu.setFromEuler(this),this.setFromQuaternion(Gu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Je.DEFAULT_ORDER="XYZ";var Ss=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Wm=0,Wu=new T,ts=new Le,Rn=new Dt,to=new T,Os=new T,Xm=new T,qm=new Le,Xu=new T(1,0,0),qu=new T(0,1,0),Yu=new T(0,0,1),Zu={type:"added"},Ym={type:"removed"},es={type:"childadded",child:null},el={type:"childremoved",child:null},jt=class s extends sn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=Ye(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new T,e=new Je,n=new Le,i=new T(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Dt},normalMatrix:{value:new Bt}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ss,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ts.setFromAxisAngle(t,e),this.quaternion.multiply(ts),this}rotateOnWorldAxis(t,e){return ts.setFromAxisAngle(t,e),this.quaternion.premultiply(ts),this}rotateX(t){return this.rotateOnAxis(Xu,t)}rotateY(t){return this.rotateOnAxis(qu,t)}rotateZ(t){return this.rotateOnAxis(Yu,t)}translateOnAxis(t,e){return Wu.copy(t).applyQuaternion(this.quaternion),this.position.add(Wu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xu,t)}translateY(t){return this.translateOnAxis(qu,t)}translateZ(t){return this.translateOnAxis(Yu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?to.copy(t):to.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(Os,to,this.up):Rn.lookAt(to,Os,this.up),this.quaternion.setFromRotationMatrix(Rn),i&&(Rn.extractRotation(i.matrixWorld),ts.setFromRotationMatrix(Rn),this.quaternion.premultiply(ts.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zu),es.child=t,this.dispatchEvent(es),es.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ym),el.child=t,this.dispatchEvent(el),el.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Rn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Rn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zu),es.child=t,this.dispatchEvent(es),es.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,t,Xm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,qm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};jt.DEFAULT_UP=new T(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var hn=new T,In=new T,nl=new T,Pn=new T,ns=new T,is=new T,Ju=new T,il=new T,sl=new T,rl=new T,ol=new $t,al=new $t,cl=new $t,_n=class s{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),hn.subVectors(t,e),i.cross(hn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){hn.subVectors(i,e),In.subVectors(n,e),nl.subVectors(t,e);let o=hn.dot(hn),a=hn.dot(In),c=hn.dot(nl),l=In.dot(In),h=In.dot(nl),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,m=(o*h-a*c)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,Pn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Pn.x),c.addScaledVector(o,Pn.y),c.addScaledVector(a,Pn.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return ol.setScalar(0),al.setScalar(0),cl.setScalar(0),ol.fromBufferAttribute(t,e),al.fromBufferAttribute(t,n),cl.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(ol,r.x),o.addScaledVector(al,r.y),o.addScaledVector(cl,r.z),o}static isFrontFacing(t,e,n,i){return hn.subVectors(n,e),In.subVectors(t,e),hn.cross(In).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),hn.cross(In).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;ns.subVectors(i,n),is.subVectors(r,n),il.subVectors(t,n);let c=ns.dot(il),l=is.dot(il);if(c<=0&&l<=0)return e.copy(n);sl.subVectors(t,i);let h=ns.dot(sl),u=is.dot(sl);if(h>=0&&u<=h)return e.copy(i);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(ns,o);rl.subVectors(t,r);let f=ns.dot(rl),m=is.dot(rl);if(m>=0&&f<=m)return e.copy(r);let _=f*l-c*m;if(_<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(is,a);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Ju.subVectors(r,i),a=(u-h)/(u-h+(f-m)),e.copy(i).addScaledVector(Ju,a);let p=1/(g+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(ns,o).addScaledVector(is,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},hp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},eo={h:0,s:0,l:0};function ll(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var ut=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=He){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Yt.workingColorSpace){if(t=yu(t,1),e=fe(e,0,1),n=fe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ll(o,r,t+1/3),this.g=ll(o,r,t),this.b=ll(o,r,t-1/3)}return Yt.toWorkingColorSpace(this,i),this}setStyle(t,e=He){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=He){let n=hp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=zn(t.r),this.g=zn(t.g),this.b=zn(t.b),this}copyLinearToSRGB(t){return this.r=_s(t.r),this.g=_s(t.g),this.b=_s(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=He){return Yt.fromWorkingColorSpace(Ie.copy(this),t),Math.round(fe(Ie.r*255,0,255))*65536+Math.round(fe(Ie.g*255,0,255))*256+Math.round(fe(Ie.b*255,0,255))}getHexString(t=He){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(Ie.copy(this),e);let n=Ie.r,i=Ie.g,r=Ie.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=He){Yt.fromWorkingColorSpace(Ie.copy(this),t);let e=Ie.r,n=Ie.g,i=Ie.b;return t!==He?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(jn),this.setHSL(jn.h+t,jn.s+e,jn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(jn),t.getHSL(eo);let n=nr(jn.h,eo.h,e),i=nr(jn.s,eo.s,e),r=nr(jn.l,eo.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ie=new ut;ut.NAMES=hp;var Zm=0,Ee=class extends sn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zm++}),this.uuid=Ye(),this.name="",this.blending=Ri,this.side=Vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vo,this.blendDst=Ho,this.blendEquation=ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=Li,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bi,this.stencilZFail=bi,this.stencilZPass=bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ri&&(n.blending=this.blending),this.side!==Vn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Vo&&(n.blendSrc=this.blendSrc),this.blendDst!==Ho&&(n.blendDst=this.blendDst),this.blendEquation!==ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Li&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==bi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==bi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Sn=class extends Ee{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Je,this.combine=Gr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Dn=Jm();function Jm(){let s=new ArrayBuffer(4),t=new Float32Array(s),e=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}let r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;(l&8388608)===0;)l<<=1,h-=8388608;l&=-8388609,h+=947912704,r[c]=l|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function Ve(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=fe(s,-65504,65504),Dn.floatView[0]=s;let t=Dn.uint32View[0],e=t>>23&511;return Dn.baseTable[e]+((t&8388607)>>Dn.shiftTable[e])}function Zs(s){let t=s>>10;return Dn.uint32View[0]=Dn.mantissaTable[Dn.offsetTable[t]+(s&1023)]+Dn.exponentTable[t],Dn.floatView[0]}var $m={toHalfFloat:Ve,fromHalfFloat:Zs},ge=new T,no=new $,Qt=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=dr,this.updateRanges=[],this.gpuType=Ge,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)no.fromBufferAttribute(this,e),no.applyMatrix3(t),this.setXY(e,no.x,no.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Fe(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Vt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Fe(e,this.array)),e}setX(t,e){return this.normalized&&(e=Vt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Fe(e,this.array)),e}setY(t,e){return this.normalized&&(e=Vt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Fe(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Vt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Fe(e,this.array)),e}setW(t,e){return this.normalized&&(e=Vt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Vt(e,this.array),n=Vt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Vt(e,this.array),n=Vt(n,this.array),i=Vt(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Vt(e,this.array),n=Vt(n,this.array),i=Vt(i,this.array),r=Vt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==dr&&(t.usage=this.usage),t}},Gl=class extends Qt{constructor(t,e,n){super(new Int8Array(t),e,n)}},Wl=class extends Qt{constructor(t,e,n){super(new Uint8Array(t),e,n)}},Xl=class extends Qt{constructor(t,e,n){super(new Uint8ClampedArray(t),e,n)}},ql=class extends Qt{constructor(t,e,n){super(new Int16Array(t),e,n)}},gr=class extends Qt{constructor(t,e,n){super(new Uint16Array(t),e,n)}},Yl=class extends Qt{constructor(t,e,n){super(new Int32Array(t),e,n)}},_r=class extends Qt{constructor(t,e,n){super(new Uint32Array(t),e,n)}},Zl=class extends Qt{constructor(t,e,n){super(new Uint16Array(t),e,n),this.isFloat16BufferAttribute=!0}getX(t){let e=Zs(this.array[t*this.itemSize]);return this.normalized&&(e=Fe(e,this.array)),e}setX(t,e){return this.normalized&&(e=Vt(e,this.array)),this.array[t*this.itemSize]=Ve(e),this}getY(t){let e=Zs(this.array[t*this.itemSize+1]);return this.normalized&&(e=Fe(e,this.array)),e}setY(t,e){return this.normalized&&(e=Vt(e,this.array)),this.array[t*this.itemSize+1]=Ve(e),this}getZ(t){let e=Zs(this.array[t*this.itemSize+2]);return this.normalized&&(e=Fe(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Vt(e,this.array)),this.array[t*this.itemSize+2]=Ve(e),this}getW(t){let e=Zs(this.array[t*this.itemSize+3]);return this.normalized&&(e=Fe(e,this.array)),e}setW(t,e){return this.normalized&&(e=Vt(e,this.array)),this.array[t*this.itemSize+3]=Ve(e),this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Vt(e,this.array),n=Vt(n,this.array)),this.array[t+0]=Ve(e),this.array[t+1]=Ve(n),this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Vt(e,this.array),n=Vt(n,this.array),i=Vt(i,this.array)),this.array[t+0]=Ve(e),this.array[t+1]=Ve(n),this.array[t+2]=Ve(i),this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Vt(e,this.array),n=Vt(n,this.array),i=Vt(i,this.array),r=Vt(r,this.array)),this.array[t+0]=Ve(e),this.array[t+1]=Ve(n),this.array[t+2]=Ve(i),this.array[t+3]=Ve(r),this}},vt=class extends Qt{constructor(t,e,n){super(new Float32Array(t),e,n)}},Km=0,tn=new Dt,hl=new jt,ss=new T,qe=new Ae,Bs=new Ae,Se=new T,zt=class s extends sn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=Ye(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(cp(t)?_r:gr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return tn.makeRotationFromQuaternion(t),this.applyMatrix4(tn),this}rotateX(t){return tn.makeRotationX(t),this.applyMatrix4(tn),this}rotateY(t){return tn.makeRotationY(t),this.applyMatrix4(tn),this}rotateZ(t){return tn.makeRotationZ(t),this.applyMatrix4(tn),this}translate(t,e,n){return tn.makeTranslation(t,e,n),this.applyMatrix4(tn),this}scale(t,e,n){return tn.makeScale(t,e,n),this.applyMatrix4(tn),this}lookAt(t){return hl.lookAt(t),hl.updateMatrix(),this.applyMatrix4(hl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new vt(n,3))}else{for(let n=0,i=e.count;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ae);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];qe.setFromBufferAttribute(r),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,qe.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,qe.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(qe.min),this.boundingBox.expandByPoint(qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new be);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(t){let n=this.boundingSphere.center;if(qe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Bs.setFromBufferAttribute(a),this.morphTargetsRelative?(Se.addVectors(qe.min,Bs.min),qe.expandByPoint(Se),Se.addVectors(qe.max,Bs.max),qe.expandByPoint(Se)):(qe.expandByPoint(Bs.min),qe.expandByPoint(Bs.max))}qe.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Se.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Se));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Se.fromBufferAttribute(a,l),c&&(ss.fromBufferAttribute(t,l),Se.add(ss)),i=Math.max(i,n.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<n.count;R++)a[R]=new T,c[R]=new T;let l=new T,h=new T,u=new T,d=new $,f=new $,m=new $,_=new T,g=new T;function p(R,b,M){l.fromBufferAttribute(n,R),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,R),f.fromBufferAttribute(r,b),m.fromBufferAttribute(r,M),h.sub(l),u.sub(l),f.sub(d),m.sub(d);let L=1/(f.x*m.y-m.x*f.y);isFinite(L)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(L),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(L),a[R].add(_),a[b].add(_),a[M].add(_),c[R].add(g),c[b].add(g),c[M].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let R=0,b=y.length;R<b;++R){let M=y[R],L=M.start,k=M.count;for(let O=L,V=L+k;O<V;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let v=new T,x=new T,P=new T,w=new T;function C(R){P.fromBufferAttribute(i,R),w.copy(P);let b=a[R];v.copy(b),v.sub(P.multiplyScalar(P.dot(b))).normalize(),x.crossVectors(w,b);let L=x.dot(c[R])<0?-1:1;o.setXYZW(R,v.x,v.y,v.z,L)}for(let R=0,b=y.length;R<b;++R){let M=y[R],L=M.start,k=M.count;for(let O=L,V=L+k;O<V;O+=3)C(t.getX(O+0)),C(t.getX(O+1)),C(t.getX(O+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new T,r=new T,o=new T,a=new T,c=new T,l=new T,h=new T,u=new T;if(t)for(let d=0,f=t.count;d<f;d+=3){let m=t.getX(d+0),_=t.getX(d+1),g=t.getX(d+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,m=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new Qt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},$u=new Dt,di=new ri,io=new be,Ku=new T,so=new T,ro=new T,oo=new T,ul=new T,ao=new T,Qu=new T,co=new T,pe=class extends jt{constructor(t=new zt,e=new Sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){ao.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(ul.fromBufferAttribute(u,t),o?ao.addScaledVector(ul,h):ao.addScaledVector(ul.sub(e),h))}e.add(ao)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),io.copy(n.boundingSphere),io.applyMatrix4(r),di.copy(t.ray).recast(t.near),!(io.containsPoint(di.origin)===!1&&(di.intersectSphere(io,Ku)===null||di.origin.distanceToSquared(Ku)>(t.far-t.near)**2))&&($u.copy(r).invert(),di.copy(t.ray).applyMatrix4($u),!(n.boundingBox!==null&&di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,di)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){let g=d[m],p=o[g.materialIndex],y=Math.max(g.start,f.start),v=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let x=y,P=v;x<P;x+=3){let w=a.getX(x),C=a.getX(x+1),R=a.getX(x+2);i=lo(this,p,t,n,l,h,u,w,C,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){let y=a.getX(g),v=a.getX(g+1),x=a.getX(g+2);i=lo(this,o,t,n,l,h,u,y,v,x),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){let g=d[m],p=o[g.materialIndex],y=Math.max(g.start,f.start),v=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let x=y,P=v;x<P;x+=3){let w=x,C=x+1,R=x+2;i=lo(this,p,t,n,l,h,u,w,C,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){let y=g,v=g+1,x=g+2;i=lo(this,o,t,n,l,h,u,y,v,x),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function Qm(s,t,e,n,i,r,o,a){let c;if(t.side===Be?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===Vn,a),c===null)return null;co.copy(a),co.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(co);return l<e.near||l>e.far?null:{distance:l,point:co.clone(),object:s}}function lo(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,so),s.getVertexPosition(c,ro),s.getVertexPosition(l,oo);let h=Qm(s,t,e,n,so,ro,oo,Qu);if(h){let u=new T;_n.getBarycoord(Qu,so,ro,oo,u),i&&(h.uv=_n.getInterpolatedAttribute(i,a,c,l,u,new $)),r&&(h.uv1=_n.getInterpolatedAttribute(r,a,c,l,u,new $)),o&&(h.normal=_n.getInterpolatedAttribute(o,a,c,l,u,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new T,materialIndex:0};_n.getNormal(so,ro,oo,d.normal),h.face=d,h.barycoord=u}return h}var Ni=class s extends zt{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new vt(l,3)),this.setAttribute("normal",new vt(h,3)),this.setAttribute("uv",new vt(u,2));function m(_,g,p,y,v,x,P,w,C,R,b){let M=x/C,L=P/R,k=x/2,O=P/2,V=w/2,Z=C+1,H=R+1,et=0,G=0,at=new T;for(let mt=0;mt<H;mt++){let St=mt*L-O;for(let kt=0;kt<Z;kt++){let te=kt*M-k;at[_]=te*y,at[g]=St*v,at[p]=V,l.push(at.x,at.y,at.z),at[_]=0,at[g]=0,at[p]=w>0?1:-1,h.push(at.x,at.y,at.z),u.push(kt/C),u.push(1-mt/R),et+=1}}for(let mt=0;mt<R;mt++)for(let St=0;St<C;St++){let kt=d+St+Z*mt,te=d+St+Z*(mt+1),Y=d+(St+1)+Z*(mt+1),it=d+(St+1)+Z*mt;c.push(kt,te,it),c.push(te,Y,it),G+=6}a.addGroup(f,G,b),f+=G,d+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function bs(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ne(s){let t={};for(let e=0;e<s.length;e++){let n=bs(s[e]);for(let i in n)t[i]=n[i]}return t}function jm(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function up(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}var dp={clone:bs,merge:Ne},tg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$e=class extends Ee{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tg,this.fragmentShader=eg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=bs(t.uniforms),this.uniformsGroups=jm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Es=class extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=vn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ti=new T,ju=new $,td=new $,xe=class extends Es{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ys*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Pi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ys*2*Math.atan(Math.tan(Pi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ti.x,ti.y).multiplyScalar(-t/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ti.x,ti.y).multiplyScalar(-t/ti.z)}getViewSize(t,e){return this.getViewBounds(t,ju,td),e.subVectors(td,ju)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Pi*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},rs=-90,os=1,wa=class extends jt{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new xe(rs,os,t,e);i.layers=this.layers,this.add(i);let r=new xe(rs,os,t,e);r.layers=this.layers,this.add(r);let o=new xe(rs,os,t,e);o.layers=this.layers,this.add(o);let a=new xe(rs,os,t,e);a.layers=this.layers,this.add(a);let c=new xe(rs,os,t,e);c.layers=this.layers,this.add(c);let l=new xe(rs,os,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===vn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===fr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Fi=class extends _e{constructor(t,e,n,i,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Hn,super(t,e,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Aa=class extends Ze{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Fi(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ve}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ni(5,5,5),r=new $e({name:"CubemapFromEquirect",uniforms:bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Be,blending:On});r.uniforms.tEquirect.value=e;let o=new pe(i,r),a=e.minFilter;return e.minFilter===xn&&(e.minFilter=ve),new wa(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},dl=new T,ng=new T,ig=new Bt,mn=class{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=dl.subVectors(n,e).cross(ng.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(dl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ig.getNormalMatrix(t),i=this.coplanarPoint(dl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},fi=new be,ho=new T,Oi=class{constructor(t=new mn,e=new mn,n=new mn,i=new mn,r=new mn,o=new mn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=vn){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],m=i[9],_=i[10],g=i[11],p=i[12],y=i[13],v=i[14],x=i[15];if(n[0].setComponents(c-r,d-l,g-f,x-p).normalize(),n[1].setComponents(c+r,d+l,g+f,x+p).normalize(),n[2].setComponents(c+o,d+h,g+m,x+y).normalize(),n[3].setComponents(c-o,d-h,g-m,x-y).normalize(),n[4].setComponents(c-a,d-u,g-_,x-v).normalize(),e===vn)n[5].setComponents(c+a,d+u,g+_,x+v).normalize();else if(e===fr)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(t){return fi.center.set(0,0,0),fi.radius=.7071067811865476,fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(ho.x=i.normal.x>0?t.max.x:t.min.x,ho.y=i.normal.y>0?t.max.y:t.min.y,ho.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ho)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function fp(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function sg(s){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],_=u[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let _=u[f];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var ws=class s extends zt{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,d=e/c,f=[],m=[],_=[],g=[];for(let p=0;p<h;p++){let y=p*d-o;for(let v=0;v<l;v++){let x=v*u-r;m.push(x,-y,0),_.push(0,0,1),g.push(v/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){let v=y+l*p,x=y+l*(p+1),P=y+1+l*(p+1),w=y+1+l*p;f.push(v,x,w),f.push(x,P,w)}this.setIndex(f),this.setAttribute("position",new vt(m,3)),this.setAttribute("normal",new vt(_,3)),this.setAttribute("uv",new vt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},rg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,og=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ag=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ug=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,pg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_g=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Mg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Eg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ag=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Tg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Cg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Rg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ig=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Pg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ug=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ng="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Og=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Bg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Hg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Yg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$g=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Kg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Qg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,t_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,e_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,n_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,i_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,s_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,r_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,o_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,a_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,c_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,u_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,d_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,f_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,p_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,m_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,g_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,__=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,x_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,v_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,M_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,S_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,b_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,E_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,T_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,C_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,R_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,I_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,P_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,L_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,U_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,D_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,N_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,F_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,O_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,B_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,z_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,k_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,V_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,H_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,G_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,W_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,X_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,q_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Y_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Z_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,J_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,K_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Q_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,j_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,t0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,e0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,n0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,i0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,s0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,r0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,u0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,d0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,f0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,p0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,m0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,x0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,v0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,b0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,w0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,A0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,R0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,U0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,D0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,N0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,F0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,O0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wt={alphahash_fragment:rg,alphahash_pars_fragment:og,alphamap_fragment:ag,alphamap_pars_fragment:cg,alphatest_fragment:lg,alphatest_pars_fragment:hg,aomap_fragment:ug,aomap_pars_fragment:dg,batching_pars_vertex:fg,batching_vertex:pg,begin_vertex:mg,beginnormal_vertex:gg,bsdfs:_g,iridescence_fragment:xg,bumpmap_pars_fragment:vg,clipping_planes_fragment:yg,clipping_planes_pars_fragment:Mg,clipping_planes_pars_vertex:Sg,clipping_planes_vertex:bg,color_fragment:Eg,color_pars_fragment:wg,color_pars_vertex:Ag,color_vertex:Tg,common:Cg,cube_uv_reflection_fragment:Rg,defaultnormal_vertex:Ig,displacementmap_pars_vertex:Pg,displacementmap_vertex:Lg,emissivemap_fragment:Ug,emissivemap_pars_fragment:Dg,colorspace_fragment:Ng,colorspace_pars_fragment:Fg,envmap_fragment:Og,envmap_common_pars_fragment:Bg,envmap_pars_fragment:zg,envmap_pars_vertex:kg,envmap_physical_pars_fragment:Kg,envmap_vertex:Vg,fog_vertex:Hg,fog_pars_vertex:Gg,fog_fragment:Wg,fog_pars_fragment:Xg,gradientmap_pars_fragment:qg,lightmap_pars_fragment:Yg,lights_lambert_fragment:Zg,lights_lambert_pars_fragment:Jg,lights_pars_begin:$g,lights_toon_fragment:Qg,lights_toon_pars_fragment:jg,lights_phong_fragment:t_,lights_phong_pars_fragment:e_,lights_physical_fragment:n_,lights_physical_pars_fragment:i_,lights_fragment_begin:s_,lights_fragment_maps:r_,lights_fragment_end:o_,logdepthbuf_fragment:a_,logdepthbuf_pars_fragment:c_,logdepthbuf_pars_vertex:l_,logdepthbuf_vertex:h_,map_fragment:u_,map_pars_fragment:d_,map_particle_fragment:f_,map_particle_pars_fragment:p_,metalnessmap_fragment:m_,metalnessmap_pars_fragment:g_,morphinstance_vertex:__,morphcolor_vertex:x_,morphnormal_vertex:v_,morphtarget_pars_vertex:y_,morphtarget_vertex:M_,normal_fragment_begin:S_,normal_fragment_maps:b_,normal_pars_fragment:E_,normal_pars_vertex:w_,normal_vertex:A_,normalmap_pars_fragment:T_,clearcoat_normal_fragment_begin:C_,clearcoat_normal_fragment_maps:R_,clearcoat_pars_fragment:I_,iridescence_pars_fragment:P_,opaque_fragment:L_,packing:U_,premultiplied_alpha_fragment:D_,project_vertex:N_,dithering_fragment:F_,dithering_pars_fragment:O_,roughnessmap_fragment:B_,roughnessmap_pars_fragment:z_,shadowmap_pars_fragment:k_,shadowmap_pars_vertex:V_,shadowmap_vertex:H_,shadowmask_pars_fragment:G_,skinbase_vertex:W_,skinning_pars_vertex:X_,skinning_vertex:q_,skinnormal_vertex:Y_,specularmap_fragment:Z_,specularmap_pars_fragment:J_,tonemapping_fragment:$_,tonemapping_pars_fragment:K_,transmission_fragment:Q_,transmission_pars_fragment:j_,uv_pars_fragment:t0,uv_pars_vertex:e0,uv_vertex:n0,worldpos_vertex:i0,background_vert:s0,background_frag:r0,backgroundCube_vert:o0,backgroundCube_frag:a0,cube_vert:c0,cube_frag:l0,depth_vert:h0,depth_frag:u0,distanceRGBA_vert:d0,distanceRGBA_frag:f0,equirect_vert:p0,equirect_frag:m0,linedashed_vert:g0,linedashed_frag:_0,meshbasic_vert:x0,meshbasic_frag:v0,meshlambert_vert:y0,meshlambert_frag:M0,meshmatcap_vert:S0,meshmatcap_frag:b0,meshnormal_vert:E0,meshnormal_frag:w0,meshphong_vert:A0,meshphong_frag:T0,meshphysical_vert:C0,meshphysical_frag:R0,meshtoon_vert:I0,meshtoon_frag:P0,points_vert:L0,points_frag:U0,shadow_vert:D0,shadow_frag:N0,sprite_vert:F0,sprite_frag:O0},ct={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new $(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new $(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},un={basic:{uniforms:Ne([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Ne([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new ut(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Ne([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Ne([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Ne([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new ut(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Ne([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Ne([ct.points,ct.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Ne([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Ne([ct.common,ct.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Ne([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Ne([ct.sprite,ct.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:Ne([ct.common,ct.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:Ne([ct.lights,ct.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};un.physical={uniforms:Ne([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new $(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new $},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new $},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};var uo={r:0,b:0,g:0},pi=new Je,B0=new Dt;function z0(s,t,e,n,i,r,o){let a=new ut(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function m(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?e:t).get(v)),v}function _(y){let v=!1,x=m(y);x===null?p(a,c):x&&x.isColor&&(p(x,1),v=!0);let P=s.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(y,v){let x=m(v);x&&(x.isCubeTexture||x.mapping===Is)?(h===void 0&&(h=new pe(new Ni(1,1,1),new $e({name:"BackgroundCubeMaterial",uniforms:bs(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),pi.copy(v.backgroundRotation),pi.x*=-1,pi.y*=-1,pi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(B0.makeRotationFromEuler(pi)),h.material.toneMapped=Yt.getTransfer(x.colorSpace)!==se,(u!==x||d!==x.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new pe(new ws(2,2),new $e({name:"BackgroundMaterial",uniforms:bs(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Yt.getTransfer(x.colorSpace)!==se,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,v){y.getRGB(uo,up(s)),n.buffers.color.setClear(uo.r,uo.g,uo.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(a,c)},render:_,addToRenderList:g}}function k0(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(M,L,k,O,V){let Z=!1,H=u(O,k,L);r!==H&&(r=H,l(r.object)),Z=f(M,O,k,V),Z&&m(M,O,k,V),V!==null&&t.update(V,s.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,x(M,L,k,O),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function c(){return s.createVertexArray()}function l(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,L,k){let O=k.wireframe===!0,V=n[M.id];V===void 0&&(V={},n[M.id]=V);let Z=V[L.id];Z===void 0&&(Z={},V[L.id]=Z);let H=Z[O];return H===void 0&&(H=d(c()),Z[O]=H),H}function d(M){let L=[],k=[],O=[];for(let V=0;V<e;V++)L[V]=0,k[V]=0,O[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:O,object:M,attributes:{},index:null}}function f(M,L,k,O){let V=r.attributes,Z=L.attributes,H=0,et=k.getAttributes();for(let G in et)if(et[G].location>=0){let mt=V[G],St=Z[G];if(St===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(St=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(St=M.instanceColor)),mt===void 0||mt.attribute!==St||St&&mt.data!==St.data)return!0;H++}return r.attributesNum!==H||r.index!==O}function m(M,L,k,O){let V={},Z=L.attributes,H=0,et=k.getAttributes();for(let G in et)if(et[G].location>=0){let mt=Z[G];mt===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(mt=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(mt=M.instanceColor));let St={};St.attribute=mt,mt&&mt.data&&(St.data=mt.data),V[G]=St,H++}r.attributes=V,r.attributesNum=H,r.index=O}function _(){let M=r.newAttributes;for(let L=0,k=M.length;L<k;L++)M[L]=0}function g(M){p(M,0)}function p(M,L){let k=r.newAttributes,O=r.enabledAttributes,V=r.attributeDivisors;k[M]=1,O[M]===0&&(s.enableVertexAttribArray(M),O[M]=1),V[M]!==L&&(s.vertexAttribDivisor(M,L),V[M]=L)}function y(){let M=r.newAttributes,L=r.enabledAttributes;for(let k=0,O=L.length;k<O;k++)L[k]!==M[k]&&(s.disableVertexAttribArray(k),L[k]=0)}function v(M,L,k,O,V,Z,H){H===!0?s.vertexAttribIPointer(M,L,k,V,Z):s.vertexAttribPointer(M,L,k,O,V,Z)}function x(M,L,k,O){_();let V=O.attributes,Z=k.getAttributes(),H=L.defaultAttributeValues;for(let et in Z){let G=Z[et];if(G.location>=0){let at=V[et];if(at===void 0&&(et==="instanceMatrix"&&M.instanceMatrix&&(at=M.instanceMatrix),et==="instanceColor"&&M.instanceColor&&(at=M.instanceColor)),at!==void 0){let mt=at.normalized,St=at.itemSize,kt=t.get(at);if(kt===void 0)continue;let te=kt.buffer,Y=kt.type,it=kt.bytesPerElement,bt=Y===s.INT||Y===s.UNSIGNED_INT||at.gpuType===Fc;if(at.isInterleavedBufferAttribute){let rt=at.data,It=rt.stride,Ft=at.offset;if(rt.isInstancedInterleavedBuffer){for(let Ut=0;Ut<G.locationSize;Ut++)p(G.location+Ut,rt.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Ut=0;Ut<G.locationSize;Ut++)g(G.location+Ut);s.bindBuffer(s.ARRAY_BUFFER,te);for(let Ut=0;Ut<G.locationSize;Ut++)v(G.location+Ut,St/G.locationSize,Y,mt,It*it,(Ft+St/G.locationSize*Ut)*it,bt)}else{if(at.isInstancedBufferAttribute){for(let rt=0;rt<G.locationSize;rt++)p(G.location+rt,at.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let rt=0;rt<G.locationSize;rt++)g(G.location+rt);s.bindBuffer(s.ARRAY_BUFFER,te);for(let rt=0;rt<G.locationSize;rt++)v(G.location+rt,St/G.locationSize,Y,mt,St*it,St/G.locationSize*rt*it,bt)}}else if(H!==void 0){let mt=H[et];if(mt!==void 0)switch(mt.length){case 2:s.vertexAttrib2fv(G.location,mt);break;case 3:s.vertexAttrib3fv(G.location,mt);break;case 4:s.vertexAttrib4fv(G.location,mt);break;default:s.vertexAttrib1fv(G.location,mt)}}}}y()}function P(){R();for(let M in n){let L=n[M];for(let k in L){let O=L[k];for(let V in O)h(O[V].object),delete O[V];delete L[k]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;let L=n[M.id];for(let k in L){let O=L[k];for(let V in O)h(O[V].object),delete O[V];delete L[k]}delete n[M.id]}function C(M){for(let L in n){let k=n[L];if(k[M.id]===void 0)continue;let O=k[M.id];for(let V in O)h(O[V].object),delete O[V];delete k[M.id]}}function R(){b(),o=!0,r!==i&&(r=i,l(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:b,dispose:P,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:g,disableUnusedAttributes:y}}function V0(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)o(l[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_]*d[_];e.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function H0(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==Oe&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let R=C===Ps&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Mn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Ge&&!R)}function c(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=m>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:P,maxSamples:w}}function G0(s){let t=this,e=null,n=0,i=!1,r=!1,o=new mn,a=new Bt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,p=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?h(null):l();else{let y=r?0:n,v=y*4,x=p.clippingState||null;c.value=x,x=h(m,d,v,f);for(let P=0;P!==v;++P)x[P]=e[P];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){let _=u!==null?u.length:0,g=null;if(_!==0){if(g=c.value,m!==!0||g===null){let p=f+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let v=0,x=f;v!==_;++v,x+=4)o.copy(u[v]).applyMatrix4(y,a),o.normal.toArray(g,x),g[x+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function W0(s){let t=new WeakMap;function e(o,a){return a===or?o.mapping=Hn:a===ar&&(o.mapping=si),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===or||a===ar)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Aa(c.height);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var As=class extends Es{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ms=4,ed=[.125,.215,.35,.446,.526,.582],wi=20,fl=new As,nd=new ut,pl=null,ml=0,gl=0,_l=!1,Ei=(1+Math.sqrt(5))/2,as=1/Ei,id=[new T(-Ei,as,0),new T(Ei,as,0),new T(-as,0,Ei),new T(as,0,Ei),new T(0,Ei,-as),new T(0,Ei,as),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],xr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){pl=this._renderer.getRenderTarget(),ml=this._renderer.getActiveCubeFace(),gl=this._renderer.getActiveMipmapLevel(),_l=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=od(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(pl,ml,gl),this._renderer.xr.enabled=_l,t.scissorTest=!1,fo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Hn||t.mapping===si?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),pl=this._renderer.getRenderTarget(),ml=this._renderer.getActiveCubeFace(),gl=this._renderer.getActiveMipmapLevel(),_l=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ve,minFilter:ve,generateMipmaps:!1,type:Ps,format:Oe,colorSpace:Yi,depthBuffer:!1},i=sd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sd(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=X0(r)),this._blurMaterial=q0(r,t,e)}return i}_compileMaterial(t){let e=new pe(this._lodPlanes[0],t);this._renderer.compile(e,fl)}_sceneToCubeUV(t,e,n,i){let a=new xe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(nd),h.toneMapping=Bn,h.autoClear=!1;let f=new Sn({name:"PMREM.Background",side:Be,depthWrite:!1,depthTest:!1}),m=new pe(new Ni,f),_=!1,g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,_=!0):(f.color.copy(nd),_=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):y===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let v=this._cubeSize;fo(i,y*v,p>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Hn||t.mapping===si;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=od()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rd());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new pe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;fo(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,fl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=id[(i-r-1)%id.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new pe(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*wi-1),_=r/m,g=isFinite(r)?1+Math.floor(h*_):wi;g>wi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${wi}`);let p=[],y=0;for(let C=0;C<wi;++C){let R=C/_,b=Math.exp(-R*R/2);p.push(b),C===0?y+=b:C<g&&(y+=2*b)}for(let C=0;C<p.length;C++)p[C]=p[C]/y;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:v}=this;d.dTheta.value=m,d.mipInt.value=v-n;let x=this._sizeLods[i],P=3*x*(i>v-ms?i-v+ms:0),w=4*(this._cubeSize-x);fo(e,P,w,3*x,2*x),c.setRenderTarget(e),c.render(u,fl)}};function X0(s){let t=[],e=[],n=[],i=s,r=s-ms+1+ed.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let c=1/a;o>s-ms?c=ed[o-s+ms-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,_=3,g=2,p=1,y=new Float32Array(_*m*f),v=new Float32Array(g*m*f),x=new Float32Array(p*m*f);for(let w=0;w<f;w++){let C=w%3*2/3-1,R=w>2?0:-1,b=[C,R,0,C+2/3,R,0,C+2/3,R+1,0,C,R,0,C+2/3,R+1,0,C,R+1,0];y.set(b,_*m*w),v.set(d,g*m*w);let M=[w,w,w,w,w,w];x.set(M,p*m*w)}let P=new zt;P.setAttribute("position",new Qt(y,_)),P.setAttribute("uv",new Qt(v,g)),P.setAttribute("faceIndex",new Qt(x,p)),t.push(P),i>ms&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function sd(s,t,e){let n=new Ze(s,t,e);return n.texture.mapping=Is,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fo(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function q0(s,t,e){let n=new Float32Array(wi),i=new T(0,1,0);return new $e({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function rd(){return new $e({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function od(){return new $e({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Mu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Y0(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===or||c===ar,h=c===Hn||c===si;if(l||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new xr(s)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new xr(s)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Z0(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Ys("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function J0(s,t,e,n){let i={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);for(let m in d.morphAttributes){let _=d.morphAttributes[m];for(let g=0,p=_.length;g<p;g++)t.remove(_[g])}d.removeEventListener("dispose",o),delete i[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let m in d)t.update(d[m],s.ARRAY_BUFFER);let f=u.morphAttributes;for(let m in f){let _=f[m];for(let g=0,p=_.length;g<p;g++)t.update(_[g],s.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,m=u.attributes.position,_=0;if(f!==null){let y=f.array;_=f.version;for(let v=0,x=y.length;v<x;v+=3){let P=y[v+0],w=y[v+1],C=y[v+2];d.push(P,w,w,C,C,P)}}else if(m!==void 0){let y=m.array;_=m.version;for(let v=0,x=y.length/3-1;v<x;v+=3){let P=v+0,w=v+1,C=v+2;d.push(P,w,w,C,C,P)}}else return;let g=new(cp(d)?_r:gr)(d,1);g.version=_;let p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function $0(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,m){m!==0&&(s.drawElementsInstanced(n,f,r,d*o,m),e.update(f,n,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function u(d,f,m,_){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,m);let p=0;for(let y=0;y<m;y++)p+=f[y]*_[y];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function K0(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Q0(s,t,e){let n=new WeakMap,i=new $t;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let b=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],v=0;f===!0&&(v=1),m===!0&&(v=2),_===!0&&(v=3);let x=a.attributes.position.count*v,P=1;x>t.maxTextureSize&&(P=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let w=new Float32Array(x*P*4*u),C=new Ms(w,x,P,u);C.type=Ge,C.needsUpdate=!0;let R=v*4;for(let M=0;M<u;M++){let L=g[M],k=p[M],O=y[M],V=x*P*4*M;for(let Z=0;Z<L.count;Z++){let H=Z*R;f===!0&&(i.fromBufferAttribute(L,Z),w[V+H+0]=i.x,w[V+H+1]=i.y,w[V+H+2]=i.z,w[V+H+3]=0),m===!0&&(i.fromBufferAttribute(k,Z),w[V+H+4]=i.x,w[V+H+5]=i.y,w[V+H+6]=i.z,w[V+H+7]=0),_===!0&&(i.fromBufferAttribute(O,Z),w[V+H+8]=i.x,w[V+H+9]=i.y,w[V+H+10]=i.z,w[V+H+11]=O.itemSize===4?i.w:1)}}d={count:u,texture:C,size:new $(x,P)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];let m=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",m),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function j0(s,t,e,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var vr=class extends _e{constructor(t,e,n,i,r,o,a,c,l,h=Ii){if(h!==Ii&&h!==Di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ii&&(n=Gn),n===void 0&&h===Di&&(n=Ui),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:we,this.minFilter=c!==void 0?c:we,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},pp=new _e,ad=new vr(1,1),mp=new Ms,gp=new mr,_p=new Fi,cd=[],ld=[],hd=new Float32Array(16),ud=new Float32Array(9),dd=new Float32Array(4);function Ls(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=cd[i];if(r===void 0&&(r=new Float32Array(i),cd[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function ye(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Me(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Gc(s,t){let e=ld[t];e===void 0&&(e=new Int32Array(t),ld[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function tx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function ex(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;s.uniform2fv(this.addr,t),Me(e,t)}}function nx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;s.uniform3fv(this.addr,t),Me(e,t)}}function ix(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;s.uniform4fv(this.addr,t),Me(e,t)}}function sx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;dd.set(n),s.uniformMatrix2fv(this.addr,!1,dd),Me(e,n)}}function rx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;ud.set(n),s.uniformMatrix3fv(this.addr,!1,ud),Me(e,n)}}function ox(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;hd.set(n),s.uniformMatrix4fv(this.addr,!1,hd),Me(e,n)}}function ax(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function cx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;s.uniform2iv(this.addr,t),Me(e,t)}}function lx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;s.uniform3iv(this.addr,t),Me(e,t)}}function hx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;s.uniform4iv(this.addr,t),Me(e,t)}}function ux(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function dx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;s.uniform2uiv(this.addr,t),Me(e,t)}}function fx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;s.uniform3uiv(this.addr,t),Me(e,t)}}function px(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;s.uniform4uiv(this.addr,t),Me(e,t)}}function mx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(ad.compareFunction=vu,r=ad):r=pp,e.setTexture2D(t||r,i)}function gx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||gp,i)}function _x(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||_p,i)}function xx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||mp,i)}function vx(s){switch(s){case 5126:return tx;case 35664:return ex;case 35665:return nx;case 35666:return ix;case 35674:return sx;case 35675:return rx;case 35676:return ox;case 5124:case 35670:return ax;case 35667:case 35671:return cx;case 35668:case 35672:return lx;case 35669:case 35673:return hx;case 5125:return ux;case 36294:return dx;case 36295:return fx;case 36296:return px;case 35678:case 36198:case 36298:case 36306:case 35682:return mx;case 35679:case 36299:case 36307:return gx;case 35680:case 36300:case 36308:case 36293:return _x;case 36289:case 36303:case 36311:case 36292:return xx}}function yx(s,t){s.uniform1fv(this.addr,t)}function Mx(s,t){let e=Ls(t,this.size,2);s.uniform2fv(this.addr,e)}function Sx(s,t){let e=Ls(t,this.size,3);s.uniform3fv(this.addr,e)}function bx(s,t){let e=Ls(t,this.size,4);s.uniform4fv(this.addr,e)}function Ex(s,t){let e=Ls(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function wx(s,t){let e=Ls(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Ax(s,t){let e=Ls(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Tx(s,t){s.uniform1iv(this.addr,t)}function Cx(s,t){s.uniform2iv(this.addr,t)}function Rx(s,t){s.uniform3iv(this.addr,t)}function Ix(s,t){s.uniform4iv(this.addr,t)}function Px(s,t){s.uniform1uiv(this.addr,t)}function Lx(s,t){s.uniform2uiv(this.addr,t)}function Ux(s,t){s.uniform3uiv(this.addr,t)}function Dx(s,t){s.uniform4uiv(this.addr,t)}function Nx(s,t,e){let n=this.cache,i=t.length,r=Gc(e,i);ye(n,r)||(s.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||pp,r[o])}function Fx(s,t,e){let n=this.cache,i=t.length,r=Gc(e,i);ye(n,r)||(s.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||gp,r[o])}function Ox(s,t,e){let n=this.cache,i=t.length,r=Gc(e,i);ye(n,r)||(s.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||_p,r[o])}function Bx(s,t,e){let n=this.cache,i=t.length,r=Gc(e,i);ye(n,r)||(s.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||mp,r[o])}function zx(s){switch(s){case 5126:return yx;case 35664:return Mx;case 35665:return Sx;case 35666:return bx;case 35674:return Ex;case 35675:return wx;case 35676:return Ax;case 5124:case 35670:return Tx;case 35667:case 35671:return Cx;case 35668:case 35672:return Rx;case 35669:case 35673:return Ix;case 5125:return Px;case 36294:return Lx;case 36295:return Ux;case 36296:return Dx;case 35678:case 36198:case 36298:case 36306:case 35682:return Nx;case 35679:case 36299:case 36307:return Fx;case 35680:case 36300:case 36308:case 36293:return Ox;case 36289:case 36303:case 36311:case 36292:return Bx}}var Jl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=vx(e.type)}},$l=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=zx(e.type)}},Kl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},xl=/(\w+)(\])?(\[|\.)?/g;function fd(s,t){s.seq.push(t),s.map[t.id]=t}function kx(s,t,e){let n=s.name,i=n.length;for(xl.lastIndex=0;;){let r=xl.exec(n),o=xl.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){fd(e,l===void 0?new Jl(a,s,t):new $l(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Kl(a),fd(e,u)),e=u}}}var xs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);kx(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function pd(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var Vx=37297,Hx=0;function Gx(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var md=new Bt;function Wx(s){Yt._getMatrix(md,Yt.workingColorSpace,s);let t=`mat3( ${md.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(s)){case Xr:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function gd(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Gx(s.getShaderSource(t),o)}else return i}function Xx(s,t){let e=Wx(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function qx(s,t){let e;switch(t){case Bf:e="Linear";break;case zf:e="Reinhard";break;case kf:e="Cineon";break;case Vf:e="ACESFilmic";break;case Gf:e="AgX";break;case Wf:e="Neutral";break;case Hf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var po=new T;function Yx(){Yt.getLuminanceCoefficients(po);let s=po.x.toFixed(4),t=po.y.toFixed(4),e=po.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Js).join(`
`)}function Jx(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function $x(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Js(s){return s!==""}function _d(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xd(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Kx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ql(s){return s.replace(Kx,jx)}var Qx=new Map;function jx(s,t){let e=Wt[t];if(e===void 0){let n=Qx.get(t);if(n!==void 0)e=Wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ql(e)}var tv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vd(s){return s.replace(tv,ev)}function ev(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function yd(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function nv(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===au?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===_f?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===pn&&(t="SHADOWMAP_TYPE_VSM"),t}function iv(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Hn:case si:t="ENVMAP_TYPE_CUBE";break;case Is:t="ENVMAP_TYPE_CUBE_UV";break}return t}function sv(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case si:t="ENVMAP_MODE_REFRACTION";break}return t}function rv(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Gr:t="ENVMAP_BLENDING_MULTIPLY";break;case Ff:t="ENVMAP_BLENDING_MIX";break;case Of:t="ENVMAP_BLENDING_ADD";break}return t}function ov(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function av(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=nv(e),l=iv(e),h=sv(e),u=rv(e),d=ov(e),f=Zx(e),m=Jx(r),_=i.createProgram(),g,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Js).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Js).join(`
`),p.length>0&&(p+=`
`)):(g=[yd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Js).join(`
`),p=[yd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bn?"#define TONE_MAPPING":"",e.toneMapping!==Bn?Wt.tonemapping_pars_fragment:"",e.toneMapping!==Bn?qx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,Xx("linearToOutputTexel",e.outputColorSpace),Yx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Js).join(`
`)),o=Ql(o),o=_d(o,e),o=xd(o,e),a=Ql(a),a=_d(a,e),a=xd(a,e),o=vd(o),a=vd(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===kl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===kl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=y+g+o,x=y+p+a,P=pd(i,i.VERTEX_SHADER,v),w=pd(i,i.FRAGMENT_SHADER,x);i.attachShader(_,P),i.attachShader(_,w),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function C(L){if(s.debug.checkShaderErrors){let k=i.getProgramInfoLog(_).trim(),O=i.getShaderInfoLog(P).trim(),V=i.getShaderInfoLog(w).trim(),Z=!0,H=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,P,w);else{let et=gd(i,P,"vertex"),G=gd(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+k+`
`+et+`
`+G)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(O===""||V==="")&&(H=!1);H&&(L.diagnostics={runnable:Z,programLog:k,vertexShader:{log:O,prefix:g},fragmentShader:{log:V,prefix:p}})}i.deleteShader(P),i.deleteShader(w),R=new xs(i,_),b=$x(i,_)}let R;this.getUniforms=function(){return R===void 0&&C(this),R};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,Vx)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Hx++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=w,this}var cv=0,jl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new th(t),e.set(t,n)),n}},th=class{constructor(t){this.id=cv++,this.code=t,this.usedTimes=0}};function lv(s,t,e,n,i,r,o){let a=new Ss,c=new jl,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return l.add(b),b===0?"uv":`uv${b}`}function g(b,M,L,k,O){let V=k.fog,Z=O.geometry,H=b.isMeshStandardMaterial?k.environment:null,et=(b.isMeshStandardMaterial?e:t).get(b.envMap||H),G=et&&et.mapping===Is?et.image.height:null,at=m[b.type];b.precision!==null&&(f=i.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let mt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,St=mt!==void 0?mt.length:0,kt=0;Z.morphAttributes.position!==void 0&&(kt=1),Z.morphAttributes.normal!==void 0&&(kt=2),Z.morphAttributes.color!==void 0&&(kt=3);let te,Y,it,bt;if(at){let ie=un[at];te=ie.vertexShader,Y=ie.fragmentShader}else te=b.vertexShader,Y=b.fragmentShader,c.update(b),it=c.getVertexShaderID(b),bt=c.getFragmentShaderID(b);let rt=s.getRenderTarget(),It=s.state.buffers.depth.getReversed(),Ft=O.isInstancedMesh===!0,Ut=O.isBatchedMesh===!0,Jt=!!b.map,K=!!b.matcap,nt=!!et,I=!!b.aoMap,Ct=!!b.lightMap,j=!!b.bumpMap,xt=!!b.normalMap,ot=!!b.displacementMap,Pt=!!b.emissiveMap,gt=!!b.metalnessMap,A=!!b.roughnessMap,S=b.anisotropy>0,F=b.clearcoat>0,X=b.dispersion>0,Q=b.iridescence>0,q=b.sheen>0,Et=b.transmission>0,lt=S&&!!b.anisotropyMap,_t=F&&!!b.clearcoatMap,qt=F&&!!b.clearcoatNormalMap,tt=F&&!!b.clearcoatRoughnessMap,yt=Q&&!!b.iridescenceMap,Lt=Q&&!!b.iridescenceThicknessMap,Nt=q&&!!b.sheenColorMap,Mt=q&&!!b.sheenRoughnessMap,Zt=!!b.specularMap,Xt=!!b.specularColorMap,oe=!!b.specularIntensityMap,U=Et&&!!b.transmissionMap,ht=Et&&!!b.thicknessMap,W=!!b.gradientMap,J=!!b.alphaMap,pt=b.alphaTest>0,dt=!!b.alphaHash,Ht=!!b.extensions,ue=Bn;b.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(ue=s.toneMapping);let Ce={shaderID:at,shaderType:b.type,shaderName:b.name,vertexShader:te,fragmentShader:Y,defines:b.defines,customVertexShaderID:it,customFragmentShaderID:bt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Ut,batchingColor:Ut&&O._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&O.instanceColor!==null,instancingMorph:Ft&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:rt===null?s.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Yi,alphaToCoverage:!!b.alphaToCoverage,map:Jt,matcap:K,envMap:nt,envMapMode:nt&&et.mapping,envMapCubeUVHeight:G,aoMap:I,lightMap:Ct,bumpMap:j,normalMap:xt,displacementMap:d&&ot,emissiveMap:Pt,normalMapObjectSpace:xt&&b.normalMapType===tp,normalMapTangentSpace:xt&&b.normalMapType===ci,metalnessMap:gt,roughnessMap:A,anisotropy:S,anisotropyMap:lt,clearcoat:F,clearcoatMap:_t,clearcoatNormalMap:qt,clearcoatRoughnessMap:tt,dispersion:X,iridescence:Q,iridescenceMap:yt,iridescenceThicknessMap:Lt,sheen:q,sheenColorMap:Nt,sheenRoughnessMap:Mt,specularMap:Zt,specularColorMap:Xt,specularIntensityMap:oe,transmission:Et,transmissionMap:U,thicknessMap:ht,gradientMap:W,opaque:b.transparent===!1&&b.blending===Ri&&b.alphaToCoverage===!1,alphaMap:J,alphaTest:pt,alphaHash:dt,combine:b.combine,mapUv:Jt&&_(b.map.channel),aoMapUv:I&&_(b.aoMap.channel),lightMapUv:Ct&&_(b.lightMap.channel),bumpMapUv:j&&_(b.bumpMap.channel),normalMapUv:xt&&_(b.normalMap.channel),displacementMapUv:ot&&_(b.displacementMap.channel),emissiveMapUv:Pt&&_(b.emissiveMap.channel),metalnessMapUv:gt&&_(b.metalnessMap.channel),roughnessMapUv:A&&_(b.roughnessMap.channel),anisotropyMapUv:lt&&_(b.anisotropyMap.channel),clearcoatMapUv:_t&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:qt&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&_(b.sheenRoughnessMap.channel),specularMapUv:Zt&&_(b.specularMap.channel),specularColorMapUv:Xt&&_(b.specularColorMap.channel),specularIntensityMapUv:oe&&_(b.specularIntensityMap.channel),transmissionMapUv:U&&_(b.transmissionMap.channel),thicknessMapUv:ht&&_(b.thicknessMap.channel),alphaMapUv:J&&_(b.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(xt||S),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!Z.attributes.uv&&(Jt||J),fog:!!V,useFog:b.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:It,skinning:O.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:kt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:ue,decodeVideoTexture:Jt&&b.map.isVideoTexture===!0&&Yt.getTransfer(b.map.colorSpace)===se,decodeVideoTextureEmissive:Pt&&b.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(b.emissiveMap.colorSpace)===se,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===gn,flipSided:b.side===Be,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ht&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&b.extensions.multiDraw===!0||Ut)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ce.vertexUv1s=l.has(1),Ce.vertexUv2s=l.has(2),Ce.vertexUv3s=l.has(3),l.clear(),Ce}function p(b){let M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(let L in b.defines)M.push(L),M.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(y(M,b),v(M,b),M.push(s.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function y(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function v(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function x(b){let M=m[b.type],L;if(M){let k=un[M];L=dp.clone(k.uniforms)}else L=b.uniforms;return L}function P(b,M){let L;for(let k=0,O=h.length;k<O;k++){let V=h[k];if(V.cacheKey===M){L=V,++L.usedTimes;break}}return L===void 0&&(L=new av(s,M,b,r),h.push(L)),L}function w(b){if(--b.usedTimes===0){let M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function C(b){c.remove(b)}function R(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:x,acquireProgram:P,releaseProgram:w,releaseShaderCache:C,programs:h,dispose:R}}function hv(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function uv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Md(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Sd(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,m,_,g){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:_,group:g},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=_,p.group=g),t++,p}function a(u,d,f,m,_,g){let p=o(u,d,f,m,_,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function c(u,d,f,m,_,g){let p=o(u,d,f,m,_,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||uv),n.length>1&&n.sort(d||Md),i.length>1&&i.sort(d||Md)}function h(){for(let u=t,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function dv(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new Sd,s.set(n,[o])):i>=r.length?(o=new Sd,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function fv(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new ut};break;case"SpotLight":e={position:new T,direction:new T,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":e={color:new ut,position:new T,halfWidth:new T,halfHeight:new T};break}return s[t.id]=e,e}}}function pv(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var mv=0;function gv(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function _v(s){let t=new fv,e=pv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new T);let i=new T,r=new Dt,o=new Dt;function a(l){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,y=0,v=0,x=0,P=0,w=0,C=0;l.sort(gv);for(let b=0,M=l.length;b<M;b++){let L=l[b],k=L.color,O=L.intensity,V=L.distance,Z=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=k.r*O,u+=k.g*O,d+=k.b*O;else if(L.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(L.sh.coefficients[H],O);C++}else if(L.isDirectionalLight){let H=t.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let et=L.shadow,G=e.get(L);G.shadowIntensity=et.intensity,G.shadowBias=et.bias,G.shadowNormalBias=et.normalBias,G.shadowRadius=et.radius,G.shadowMapSize=et.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=Z,n.directionalShadowMatrix[f]=L.shadow.matrix,y++}n.directional[f]=H,f++}else if(L.isSpotLight){let H=t.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(k).multiplyScalar(O),H.distance=V,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,n.spot[_]=H;let et=L.shadow;if(L.map&&(n.spotLightMap[P]=L.map,P++,et.updateMatrices(L),L.castShadow&&w++),n.spotLightMatrix[_]=et.matrix,L.castShadow){let G=e.get(L);G.shadowIntensity=et.intensity,G.shadowBias=et.bias,G.shadowNormalBias=et.normalBias,G.shadowRadius=et.radius,G.shadowMapSize=et.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=Z,x++}_++}else if(L.isRectAreaLight){let H=t.get(L);H.color.copy(k).multiplyScalar(O),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=H,g++}else if(L.isPointLight){let H=t.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),H.distance=L.distance,H.decay=L.decay,L.castShadow){let et=L.shadow,G=e.get(L);G.shadowIntensity=et.intensity,G.shadowBias=et.bias,G.shadowNormalBias=et.normalBias,G.shadowRadius=et.radius,G.shadowMapSize=et.mapSize,G.shadowCameraNear=et.camera.near,G.shadowCameraFar=et.camera.far,n.pointShadow[m]=G,n.pointShadowMap[m]=Z,n.pointShadowMatrix[m]=L.shadow.matrix,v++}n.point[m]=H,m++}else if(L.isHemisphereLight){let H=t.get(L);H.skyColor.copy(L.color).multiplyScalar(O),H.groundColor.copy(L.groundColor).multiplyScalar(O),n.hemi[p]=H,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let R=n.hash;(R.directionalLength!==f||R.pointLength!==m||R.spotLength!==_||R.rectAreaLength!==g||R.hemiLength!==p||R.numDirectionalShadows!==y||R.numPointShadows!==v||R.numSpotShadows!==x||R.numSpotMaps!==P||R.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+P-w,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,R.directionalLength=f,R.pointLength=m,R.spotLength=_,R.rectAreaLength=g,R.hemiLength=p,R.numDirectionalShadows=y,R.numPointShadows=v,R.numSpotShadows=x,R.numSpotMaps=P,R.numLightProbes=C,n.version=mv++)}function c(l,h){let u=0,d=0,f=0,m=0,_=0,g=h.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){let v=l[p];if(v.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),u++}else if(v.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),f++}else if(v.isRectAreaLight){let x=n.rectArea[m];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(v.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){let x=n.hemi[_];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(g),_++}}}return{setup:a,setupView:c,state:n}}function bd(s){let t=new _v(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function xv(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new bd(s),t.set(i,[a])):r>=o.length?(a=new bd(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var yr=class extends Ee{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Qf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Mr=class extends Ee{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},vv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Mv(s,t,e){let n=new Oi,i=new $,r=new $,o=new $t,a=new yr({depthPacking:jf}),c=new Mr,l={},h=e.maxTextureSize,u={[Vn]:Be,[Be]:Vn,[gn]:gn},d=new $e({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $},radius:{value:4}},vertexShader:vv,fragmentShader:yv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new zt;m.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new pe(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=au;let p=this.type;this.render=function(w,C,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;let b=s.getRenderTarget(),M=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),k=s.state;k.setBlending(On),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let O=p!==pn&&this.type===pn,V=p===pn&&this.type!==pn;for(let Z=0,H=w.length;Z<H;Z++){let et=w[Z],G=et.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);let at=G.getFrameExtents();if(i.multiply(at),r.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/at.x),i.x=r.x*at.x,G.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/at.y),i.y=r.y*at.y,G.mapSize.y=r.y)),G.map===null||O===!0||V===!0){let St=this.type!==pn?{minFilter:we,magFilter:we}:{};G.map!==null&&G.map.dispose(),G.map=new Ze(i.x,i.y,St),G.map.texture.name=et.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();let mt=G.getViewportCount();for(let St=0;St<mt;St++){let kt=G.getViewport(St);o.set(r.x*kt.x,r.y*kt.y,r.x*kt.z,r.y*kt.w),k.viewport(o),G.updateMatrices(et,St),n=G.getFrustum(),x(C,R,G.camera,et,this.type)}G.isPointLightShadow!==!0&&this.type===pn&&y(G,R),G.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(b,M,L)};function y(w,C){let R=t.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ze(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(C,null,R,d,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(C,null,R,f,_,null)}function v(w,C,R,b){let M=null,L=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)M=L;else if(M=R.isPointLight===!0?c:a,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let k=M.uuid,O=C.uuid,V=l[k];V===void 0&&(V={},l[k]=V);let Z=V[O];Z===void 0&&(Z=M.clone(),V[O]=Z,C.addEventListener("dispose",P)),M=Z}if(M.visible=C.visible,M.wireframe=C.wireframe,b===pn?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:u[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let k=s.properties.get(M);k.light=R}return M}function x(w,C,R,b,M){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===pn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);let O=t.update(w),V=w.material;if(Array.isArray(V)){let Z=O.groups;for(let H=0,et=Z.length;H<et;H++){let G=Z[H],at=V[G.materialIndex];if(at&&at.visible){let mt=v(w,at,b,M);w.onBeforeShadow(s,w,C,R,O,mt,G),s.renderBufferDirect(R,null,O,mt,w,G),w.onAfterShadow(s,w,C,R,O,mt,G)}}}else if(V.visible){let Z=v(w,V,b,M);w.onBeforeShadow(s,w,C,R,O,Z,null),s.renderBufferDirect(R,null,O,Z,w,null),w.onAfterShadow(s,w,C,R,O,Z,null)}}let k=w.children;for(let O=0,V=k.length;O<V;O++)x(k[O],C,R,b,M)}function P(w){w.target.removeEventListener("dispose",P);for(let R in l){let b=l[R],M=w.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}var Sv={[Go]:Wo,[Xo]:Zo,[qo]:Jo,[Li]:Yo,[Wo]:Go,[Zo]:Xo,[Jo]:qo,[Yo]:Li};function bv(s,t){function e(){let U=!1,ht=new $t,W=null,J=new $t(0,0,0,0);return{setMask:function(pt){W!==pt&&!U&&(s.colorMask(pt,pt,pt,pt),W=pt)},setLocked:function(pt){U=pt},setClear:function(pt,dt,Ht,ue,Ce){Ce===!0&&(pt*=ue,dt*=ue,Ht*=ue),ht.set(pt,dt,Ht,ue),J.equals(ht)===!1&&(s.clearColor(pt,dt,Ht,ue),J.copy(ht))},reset:function(){U=!1,W=null,J.set(-1,0,0,0)}}}function n(){let U=!1,ht=!1,W=null,J=null,pt=null;return{setReversed:function(dt){if(ht!==dt){let Ht=t.get("EXT_clip_control");ht?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT);let ue=pt;pt=null,this.setClear(ue)}ht=dt},getReversed:function(){return ht},setTest:function(dt){dt?rt(s.DEPTH_TEST):It(s.DEPTH_TEST)},setMask:function(dt){W!==dt&&!U&&(s.depthMask(dt),W=dt)},setFunc:function(dt){if(ht&&(dt=Sv[dt]),J!==dt){switch(dt){case Go:s.depthFunc(s.NEVER);break;case Wo:s.depthFunc(s.ALWAYS);break;case Xo:s.depthFunc(s.LESS);break;case Li:s.depthFunc(s.LEQUAL);break;case qo:s.depthFunc(s.EQUAL);break;case Yo:s.depthFunc(s.GEQUAL);break;case Zo:s.depthFunc(s.GREATER);break;case Jo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}J=dt}},setLocked:function(dt){U=dt},setClear:function(dt){pt!==dt&&(ht&&(dt=1-dt),s.clearDepth(dt),pt=dt)},reset:function(){U=!1,W=null,J=null,pt=null,ht=!1}}}function i(){let U=!1,ht=null,W=null,J=null,pt=null,dt=null,Ht=null,ue=null,Ce=null;return{setTest:function(ie){U||(ie?rt(s.STENCIL_TEST):It(s.STENCIL_TEST))},setMask:function(ie){ht!==ie&&!U&&(s.stencilMask(ie),ht=ie)},setFunc:function(ie,on,wn){(W!==ie||J!==on||pt!==wn)&&(s.stencilFunc(ie,on,wn),W=ie,J=on,pt=wn)},setOp:function(ie,on,wn){(dt!==ie||Ht!==on||ue!==wn)&&(s.stencilOp(ie,on,wn),dt=ie,Ht=on,ue=wn)},setLocked:function(ie){U=ie},setClear:function(ie){Ce!==ie&&(s.clearStencil(ie),Ce=ie)},reset:function(){U=!1,ht=null,W=null,J=null,pt=null,dt=null,Ht=null,ue=null,Ce=null}}}let r=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,y=null,v=null,x=null,P=null,w=null,C=new ut(0,0,0),R=0,b=!1,M=null,L=null,k=null,O=null,V=null,Z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,et=0,G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(G)[1]),H=et>=1):G.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),H=et>=2);let at=null,mt={},St=s.getParameter(s.SCISSOR_BOX),kt=s.getParameter(s.VIEWPORT),te=new $t().fromArray(St),Y=new $t().fromArray(kt);function it(U,ht,W,J){let pt=new Uint8Array(4),dt=s.createTexture();s.bindTexture(U,dt),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ht=0;Ht<W;Ht++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(ht,0,s.RGBA,1,1,J,0,s.RGBA,s.UNSIGNED_BYTE,pt):s.texImage2D(ht+Ht,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,pt);return dt}let bt={};bt[s.TEXTURE_2D]=it(s.TEXTURE_2D,s.TEXTURE_2D,1),bt[s.TEXTURE_CUBE_MAP]=it(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),bt[s.TEXTURE_2D_ARRAY]=it(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),bt[s.TEXTURE_3D]=it(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),rt(s.DEPTH_TEST),o.setFunc(Li),j(!1),xt(Dl),rt(s.CULL_FACE),I(On);function rt(U){h[U]!==!0&&(s.enable(U),h[U]=!0)}function It(U){h[U]!==!1&&(s.disable(U),h[U]=!1)}function Ft(U,ht){return u[U]!==ht?(s.bindFramebuffer(U,ht),u[U]=ht,U===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ht),U===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ht),!0):!1}function Ut(U,ht){let W=f,J=!1;if(U){W=d.get(ht),W===void 0&&(W=[],d.set(ht,W));let pt=U.textures;if(W.length!==pt.length||W[0]!==s.COLOR_ATTACHMENT0){for(let dt=0,Ht=pt.length;dt<Ht;dt++)W[dt]=s.COLOR_ATTACHMENT0+dt;W.length=pt.length,J=!0}}else W[0]!==s.BACK&&(W[0]=s.BACK,J=!0);J&&s.drawBuffers(W)}function Jt(U){return m!==U?(s.useProgram(U),m=U,!0):!1}let K={[ni]:s.FUNC_ADD,[vf]:s.FUNC_SUBTRACT,[yf]:s.FUNC_REVERSE_SUBTRACT};K[Mf]=s.MIN,K[Sf]=s.MAX;let nt={[bf]:s.ZERO,[Ef]:s.ONE,[wf]:s.SRC_COLOR,[Vo]:s.SRC_ALPHA,[Pf]:s.SRC_ALPHA_SATURATE,[Rf]:s.DST_COLOR,[Tf]:s.DST_ALPHA,[Af]:s.ONE_MINUS_SRC_COLOR,[Ho]:s.ONE_MINUS_SRC_ALPHA,[If]:s.ONE_MINUS_DST_COLOR,[Cf]:s.ONE_MINUS_DST_ALPHA,[Lf]:s.CONSTANT_COLOR,[Uf]:s.ONE_MINUS_CONSTANT_COLOR,[Df]:s.CONSTANT_ALPHA,[Nf]:s.ONE_MINUS_CONSTANT_ALPHA};function I(U,ht,W,J,pt,dt,Ht,ue,Ce,ie){if(U===On){_===!0&&(It(s.BLEND),_=!1);return}if(_===!1&&(rt(s.BLEND),_=!0),U!==xf){if(U!==g||ie!==b){if((p!==ni||x!==ni)&&(s.blendEquation(s.FUNC_ADD),p=ni,x=ni),ie)switch(U){case Ri:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Nl:s.blendFunc(s.ONE,s.ONE);break;case Fl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ol:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ri:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Nl:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Fl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ol:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,v=null,P=null,w=null,C.set(0,0,0),R=0,g=U,b=ie}return}pt=pt||ht,dt=dt||W,Ht=Ht||J,(ht!==p||pt!==x)&&(s.blendEquationSeparate(K[ht],K[pt]),p=ht,x=pt),(W!==y||J!==v||dt!==P||Ht!==w)&&(s.blendFuncSeparate(nt[W],nt[J],nt[dt],nt[Ht]),y=W,v=J,P=dt,w=Ht),(ue.equals(C)===!1||Ce!==R)&&(s.blendColor(ue.r,ue.g,ue.b,Ce),C.copy(ue),R=Ce),g=U,b=!1}function Ct(U,ht){U.side===gn?It(s.CULL_FACE):rt(s.CULL_FACE);let W=U.side===Be;ht&&(W=!W),j(W),U.blending===Ri&&U.transparent===!1?I(On):I(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let J=U.stencilWrite;a.setTest(J),J&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Pt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?rt(s.SAMPLE_ALPHA_TO_COVERAGE):It(s.SAMPLE_ALPHA_TO_COVERAGE)}function j(U){M!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),M=U)}function xt(U){U!==mf?(rt(s.CULL_FACE),U!==L&&(U===Dl?s.cullFace(s.BACK):U===gf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):It(s.CULL_FACE),L=U}function ot(U){U!==k&&(H&&s.lineWidth(U),k=U)}function Pt(U,ht,W){U?(rt(s.POLYGON_OFFSET_FILL),(O!==ht||V!==W)&&(s.polygonOffset(ht,W),O=ht,V=W)):It(s.POLYGON_OFFSET_FILL)}function gt(U){U?rt(s.SCISSOR_TEST):It(s.SCISSOR_TEST)}function A(U){U===void 0&&(U=s.TEXTURE0+Z-1),at!==U&&(s.activeTexture(U),at=U)}function S(U,ht,W){W===void 0&&(at===null?W=s.TEXTURE0+Z-1:W=at);let J=mt[W];J===void 0&&(J={type:void 0,texture:void 0},mt[W]=J),(J.type!==U||J.texture!==ht)&&(at!==W&&(s.activeTexture(W),at=W),s.bindTexture(U,ht||bt[U]),J.type=U,J.texture=ht)}function F(){let U=mt[at];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function X(){try{s.compressedTexImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function q(){try{s.texSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Et(){try{s.texSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function lt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _t(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function qt(){try{s.texStorage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function tt(){try{s.texStorage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function yt(){try{s.texImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Lt(){try{s.texImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Nt(U){te.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),te.copy(U))}function Mt(U){Y.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),Y.copy(U))}function Zt(U,ht){let W=l.get(ht);W===void 0&&(W=new WeakMap,l.set(ht,W));let J=W.get(U);J===void 0&&(J=s.getUniformBlockIndex(ht,U.name),W.set(U,J))}function Xt(U,ht){let J=l.get(ht).get(U);c.get(ht)!==J&&(s.uniformBlockBinding(ht,J,U.__bindingPointIndex),c.set(ht,J))}function oe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},at=null,mt={},u={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,y=null,v=null,x=null,P=null,w=null,C=new ut(0,0,0),R=0,b=!1,M=null,L=null,k=null,O=null,V=null,te.set(0,0,s.canvas.width,s.canvas.height),Y.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:rt,disable:It,bindFramebuffer:Ft,drawBuffers:Ut,useProgram:Jt,setBlending:I,setMaterial:Ct,setFlipSided:j,setCullFace:xt,setLineWidth:ot,setPolygonOffset:Pt,setScissorTest:gt,activeTexture:A,bindTexture:S,unbindTexture:F,compressedTexImage2D:X,compressedTexImage3D:Q,texImage2D:yt,texImage3D:Lt,updateUBOMapping:Zt,uniformBlockBinding:Xt,texStorage2D:qt,texStorage3D:tt,texSubImage2D:q,texSubImage3D:Et,compressedTexSubImage2D:lt,compressedTexSubImage3D:_t,scissor:Nt,viewport:Mt,reset:oe}}function Ev(s,t){let e=s.image&&s.image.width?s.image.width/s.image.height:1;return e>t?(s.repeat.x=1,s.repeat.y=e/t,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2):(s.repeat.x=t/e,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0),s}function wv(s,t){let e=s.image&&s.image.width?s.image.width/s.image.height:1;return e>t?(s.repeat.x=t/e,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0):(s.repeat.x=1,s.repeat.y=e/t,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2),s}function Av(s){return s.repeat.x=1,s.repeat.y=1,s.offset.x=0,s.offset.y=0,s}function eh(s,t,e,n){let i=Tv(n);switch(e){case du:return s*t;case pu:return s*t;case mu:return s*t*2;case zc:return s*t/i.components*i.byteLength;case Wr:return s*t/i.components*i.byteLength;case gu:return s*t*2/i.components*i.byteLength;case kc:return s*t*2/i.components*i.byteLength;case fu:return s*t*3/i.components*i.byteLength;case Oe:return s*t*4/i.components*i.byteLength;case Vc:return s*t*4/i.components*i.byteLength;case Ks:case Qs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case js:case tr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ko:case jo:return Math.max(s,16)*Math.max(t,8)/4;case $o:case Qo:return Math.max(s,8)*Math.max(t,8)/2;case ta:case ea:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case na:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ia:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case sa:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ra:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case oa:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case aa:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case ca:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case la:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case ha:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case ua:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case da:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case fa:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case pa:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case ma:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case ga:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case er:case _a:case xa:return Math.ceil(s/4)*Math.ceil(t/4)*16;case _u:case va:return Math.ceil(s/4)*Math.ceil(t/4)*8;case ya:case Ma:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Tv(s){switch(s){case Mn:case lu:return{byteLength:1,components:1};case vs:case hu:case Ps:return{byteLength:2,components:1};case Oc:case Bc:return{byteLength:2,components:4};case Gn:case Fc:case Ge:return{byteLength:4,components:1};case uu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}var Cv={contain:Ev,cover:wv,fill:Av,getByteLength:eh};function Rv(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new $,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,S){return f?new OffscreenCanvas(A,S):pr("canvas")}function _(A,S,F){let X=1,Q=gt(A);if((Q.width>F||Q.height>F)&&(X=F/Math.max(Q.width,Q.height)),X<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let q=Math.floor(X*Q.width),Et=Math.floor(X*Q.height);u===void 0&&(u=m(q,Et));let lt=S?m(q,Et):u;return lt.width=q,lt.height=Et,lt.getContext("2d").drawImage(A,0,0,q,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+q+"x"+Et+")."),lt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),A;return A}function g(A){return A.generateMipmaps}function p(A){s.generateMipmap(A)}function y(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(A,S,F,X,Q=!1){if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let q=S;if(S===s.RED&&(F===s.FLOAT&&(q=s.R32F),F===s.HALF_FLOAT&&(q=s.R16F),F===s.UNSIGNED_BYTE&&(q=s.R8)),S===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(q=s.R8UI),F===s.UNSIGNED_SHORT&&(q=s.R16UI),F===s.UNSIGNED_INT&&(q=s.R32UI),F===s.BYTE&&(q=s.R8I),F===s.SHORT&&(q=s.R16I),F===s.INT&&(q=s.R32I)),S===s.RG&&(F===s.FLOAT&&(q=s.RG32F),F===s.HALF_FLOAT&&(q=s.RG16F),F===s.UNSIGNED_BYTE&&(q=s.RG8)),S===s.RG_INTEGER&&(F===s.UNSIGNED_BYTE&&(q=s.RG8UI),F===s.UNSIGNED_SHORT&&(q=s.RG16UI),F===s.UNSIGNED_INT&&(q=s.RG32UI),F===s.BYTE&&(q=s.RG8I),F===s.SHORT&&(q=s.RG16I),F===s.INT&&(q=s.RG32I)),S===s.RGB_INTEGER&&(F===s.UNSIGNED_BYTE&&(q=s.RGB8UI),F===s.UNSIGNED_SHORT&&(q=s.RGB16UI),F===s.UNSIGNED_INT&&(q=s.RGB32UI),F===s.BYTE&&(q=s.RGB8I),F===s.SHORT&&(q=s.RGB16I),F===s.INT&&(q=s.RGB32I)),S===s.RGBA_INTEGER&&(F===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),F===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),F===s.UNSIGNED_INT&&(q=s.RGBA32UI),F===s.BYTE&&(q=s.RGBA8I),F===s.SHORT&&(q=s.RGBA16I),F===s.INT&&(q=s.RGBA32I)),S===s.RGB&&F===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),S===s.RGBA){let Et=Q?Xr:Yt.getTransfer(X);F===s.FLOAT&&(q=s.RGBA32F),F===s.HALF_FLOAT&&(q=s.RGBA16F),F===s.UNSIGNED_BYTE&&(q=Et===se?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function x(A,S){let F;return A?S===null||S===Gn||S===Ui?F=s.DEPTH24_STENCIL8:S===Ge?F=s.DEPTH32F_STENCIL8:S===vs&&(F=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Gn||S===Ui?F=s.DEPTH_COMPONENT24:S===Ge?F=s.DEPTH_COMPONENT32F:S===vs&&(F=s.DEPTH_COMPONENT16),F}function P(A,S){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==we&&A.minFilter!==ve?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function w(A){let S=A.target;S.removeEventListener("dispose",w),R(S),S.isVideoTexture&&h.delete(S)}function C(A){let S=A.target;S.removeEventListener("dispose",C),M(S)}function R(A){let S=n.get(A);if(S.__webglInit===void 0)return;let F=A.source,X=d.get(F);if(X){let Q=X[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&b(A),Object.keys(X).length===0&&d.delete(F)}n.remove(A)}function b(A){let S=n.get(A);s.deleteTexture(S.__webglTexture);let F=A.source,X=d.get(F);delete X[S.__cacheKey],o.memory.textures--}function M(A){let S=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(S.__webglFramebuffer[X]))for(let Q=0;Q<S.__webglFramebuffer[X].length;Q++)s.deleteFramebuffer(S.__webglFramebuffer[X][Q]);else s.deleteFramebuffer(S.__webglFramebuffer[X]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[X])}else{if(Array.isArray(S.__webglFramebuffer))for(let X=0;X<S.__webglFramebuffer.length;X++)s.deleteFramebuffer(S.__webglFramebuffer[X]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let X=0;X<S.__webglColorRenderbuffer.length;X++)S.__webglColorRenderbuffer[X]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[X]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let F=A.textures;for(let X=0,Q=F.length;X<Q;X++){let q=n.get(F[X]);q.__webglTexture&&(s.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(F[X])}n.remove(A)}let L=0;function k(){L=0}function O(){let A=L;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),L+=1,A}function V(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function Z(A,S){let F=n.get(A);if(A.isVideoTexture&&ot(A),A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){let X=A.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(F,A,S);return}}e.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+S)}function H(A,S){let F=n.get(A);if(A.version>0&&F.__version!==A.version){Y(F,A,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+S)}function et(A,S){let F=n.get(A);if(A.version>0&&F.__version!==A.version){Y(F,A,S);return}e.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+S)}function G(A,S){let F=n.get(A);if(A.version>0&&F.__version!==A.version){it(F,A,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+S)}let at={[cr]:s.REPEAT,[en]:s.CLAMP_TO_EDGE,[lr]:s.MIRRORED_REPEAT},mt={[we]:s.NEAREST,[cu]:s.NEAREST_MIPMAP_NEAREST,[fs]:s.NEAREST_MIPMAP_LINEAR,[ve]:s.LINEAR,[$s]:s.LINEAR_MIPMAP_NEAREST,[xn]:s.LINEAR_MIPMAP_LINEAR},St={[ep]:s.NEVER,[ap]:s.ALWAYS,[np]:s.LESS,[vu]:s.LEQUAL,[ip]:s.EQUAL,[op]:s.GEQUAL,[sp]:s.GREATER,[rp]:s.NOTEQUAL};function kt(A,S){if(S.type===Ge&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===ve||S.magFilter===$s||S.magFilter===fs||S.magFilter===xn||S.minFilter===ve||S.minFilter===$s||S.minFilter===fs||S.minFilter===xn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,at[S.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,at[S.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,at[S.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,mt[S.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,mt[S.minFilter]),S.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,St[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===we||S.minFilter!==fs&&S.minFilter!==xn||S.type===Ge&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function te(A,S){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",w));let X=S.source,Q=d.get(X);Q===void 0&&(Q={},d.set(X,Q));let q=V(S);if(q!==A.__cacheKey){Q[q]===void 0&&(Q[q]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,F=!0),Q[q].usedTimes++;let Et=Q[A.__cacheKey];Et!==void 0&&(Q[A.__cacheKey].usedTimes--,Et.usedTimes===0&&b(S)),A.__cacheKey=q,A.__webglTexture=Q[q].texture}return F}function Y(A,S,F){let X=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(X=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(X=s.TEXTURE_3D);let Q=te(A,S),q=S.source;e.bindTexture(X,A.__webglTexture,s.TEXTURE0+F);let Et=n.get(q);if(q.version!==Et.__version||Q===!0){e.activeTexture(s.TEXTURE0+F);let lt=Yt.getPrimaries(Yt.workingColorSpace),_t=S.colorSpace===Un?null:Yt.getPrimaries(S.colorSpace),qt=S.colorSpace===Un||lt===_t?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let tt=_(S.image,!1,i.maxTextureSize);tt=Pt(S,tt);let yt=r.convert(S.format,S.colorSpace),Lt=r.convert(S.type),Nt=v(S.internalFormat,yt,Lt,S.colorSpace,S.isVideoTexture);kt(X,S);let Mt,Zt=S.mipmaps,Xt=S.isVideoTexture!==!0,oe=Et.__version===void 0||Q===!0,U=q.dataReady,ht=P(S,tt);if(S.isDepthTexture)Nt=x(S.format===Di,S.type),oe&&(Xt?e.texStorage2D(s.TEXTURE_2D,1,Nt,tt.width,tt.height):e.texImage2D(s.TEXTURE_2D,0,Nt,tt.width,tt.height,0,yt,Lt,null));else if(S.isDataTexture)if(Zt.length>0){Xt&&oe&&e.texStorage2D(s.TEXTURE_2D,ht,Nt,Zt[0].width,Zt[0].height);for(let W=0,J=Zt.length;W<J;W++)Mt=Zt[W],Xt?U&&e.texSubImage2D(s.TEXTURE_2D,W,0,0,Mt.width,Mt.height,yt,Lt,Mt.data):e.texImage2D(s.TEXTURE_2D,W,Nt,Mt.width,Mt.height,0,yt,Lt,Mt.data);S.generateMipmaps=!1}else Xt?(oe&&e.texStorage2D(s.TEXTURE_2D,ht,Nt,tt.width,tt.height),U&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,tt.width,tt.height,yt,Lt,tt.data)):e.texImage2D(s.TEXTURE_2D,0,Nt,tt.width,tt.height,0,yt,Lt,tt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Xt&&oe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ht,Nt,Zt[0].width,Zt[0].height,tt.depth);for(let W=0,J=Zt.length;W<J;W++)if(Mt=Zt[W],S.format!==Oe)if(yt!==null)if(Xt){if(U)if(S.layerUpdates.size>0){let pt=eh(Mt.width,Mt.height,S.format,S.type);for(let dt of S.layerUpdates){let Ht=Mt.data.subarray(dt*pt/Mt.data.BYTES_PER_ELEMENT,(dt+1)*pt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,dt,Mt.width,Mt.height,1,yt,Ht)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,0,Mt.width,Mt.height,tt.depth,yt,Mt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,W,Nt,Mt.width,Mt.height,tt.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?U&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,0,Mt.width,Mt.height,tt.depth,yt,Lt,Mt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,W,Nt,Mt.width,Mt.height,tt.depth,0,yt,Lt,Mt.data)}else{Xt&&oe&&e.texStorage2D(s.TEXTURE_2D,ht,Nt,Zt[0].width,Zt[0].height);for(let W=0,J=Zt.length;W<J;W++)Mt=Zt[W],S.format!==Oe?yt!==null?Xt?U&&e.compressedTexSubImage2D(s.TEXTURE_2D,W,0,0,Mt.width,Mt.height,yt,Mt.data):e.compressedTexImage2D(s.TEXTURE_2D,W,Nt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?U&&e.texSubImage2D(s.TEXTURE_2D,W,0,0,Mt.width,Mt.height,yt,Lt,Mt.data):e.texImage2D(s.TEXTURE_2D,W,Nt,Mt.width,Mt.height,0,yt,Lt,Mt.data)}else if(S.isDataArrayTexture)if(Xt){if(oe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ht,Nt,tt.width,tt.height,tt.depth),U)if(S.layerUpdates.size>0){let W=eh(tt.width,tt.height,S.format,S.type);for(let J of S.layerUpdates){let pt=tt.data.subarray(J*W/tt.data.BYTES_PER_ELEMENT,(J+1)*W/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,J,tt.width,tt.height,1,yt,Lt,pt)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,yt,Lt,tt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Nt,tt.width,tt.height,tt.depth,0,yt,Lt,tt.data);else if(S.isData3DTexture)Xt?(oe&&e.texStorage3D(s.TEXTURE_3D,ht,Nt,tt.width,tt.height,tt.depth),U&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,yt,Lt,tt.data)):e.texImage3D(s.TEXTURE_3D,0,Nt,tt.width,tt.height,tt.depth,0,yt,Lt,tt.data);else if(S.isFramebufferTexture){if(oe)if(Xt)e.texStorage2D(s.TEXTURE_2D,ht,Nt,tt.width,tt.height);else{let W=tt.width,J=tt.height;for(let pt=0;pt<ht;pt++)e.texImage2D(s.TEXTURE_2D,pt,Nt,W,J,0,yt,Lt,null),W>>=1,J>>=1}}else if(Zt.length>0){if(Xt&&oe){let W=gt(Zt[0]);e.texStorage2D(s.TEXTURE_2D,ht,Nt,W.width,W.height)}for(let W=0,J=Zt.length;W<J;W++)Mt=Zt[W],Xt?U&&e.texSubImage2D(s.TEXTURE_2D,W,0,0,yt,Lt,Mt):e.texImage2D(s.TEXTURE_2D,W,Nt,yt,Lt,Mt);S.generateMipmaps=!1}else if(Xt){if(oe){let W=gt(tt);e.texStorage2D(s.TEXTURE_2D,ht,Nt,W.width,W.height)}U&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,yt,Lt,tt)}else e.texImage2D(s.TEXTURE_2D,0,Nt,yt,Lt,tt);g(S)&&p(X),Et.__version=q.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function it(A,S,F){if(S.image.length!==6)return;let X=te(A,S),Q=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+F);let q=n.get(Q);if(Q.version!==q.__version||X===!0){e.activeTexture(s.TEXTURE0+F);let Et=Yt.getPrimaries(Yt.workingColorSpace),lt=S.colorSpace===Un?null:Yt.getPrimaries(S.colorSpace),_t=S.colorSpace===Un||Et===lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let qt=S.isCompressedTexture||S.image[0].isCompressedTexture,tt=S.image[0]&&S.image[0].isDataTexture,yt=[];for(let J=0;J<6;J++)!qt&&!tt?yt[J]=_(S.image[J],!0,i.maxCubemapSize):yt[J]=tt?S.image[J].image:S.image[J],yt[J]=Pt(S,yt[J]);let Lt=yt[0],Nt=r.convert(S.format,S.colorSpace),Mt=r.convert(S.type),Zt=v(S.internalFormat,Nt,Mt,S.colorSpace),Xt=S.isVideoTexture!==!0,oe=q.__version===void 0||X===!0,U=Q.dataReady,ht=P(S,Lt);kt(s.TEXTURE_CUBE_MAP,S);let W;if(qt){Xt&&oe&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ht,Zt,Lt.width,Lt.height);for(let J=0;J<6;J++){W=yt[J].mipmaps;for(let pt=0;pt<W.length;pt++){let dt=W[pt];S.format!==Oe?Nt!==null?Xt?U&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt,0,0,dt.width,dt.height,Nt,dt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt,Zt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt,0,0,dt.width,dt.height,Nt,Mt,dt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt,Zt,dt.width,dt.height,0,Nt,Mt,dt.data)}}}else{if(W=S.mipmaps,Xt&&oe){W.length>0&&ht++;let J=gt(yt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ht,Zt,J.width,J.height)}for(let J=0;J<6;J++)if(tt){Xt?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,yt[J].width,yt[J].height,Nt,Mt,yt[J].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Zt,yt[J].width,yt[J].height,0,Nt,Mt,yt[J].data);for(let pt=0;pt<W.length;pt++){let Ht=W[pt].image[J].image;Xt?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt+1,0,0,Ht.width,Ht.height,Nt,Mt,Ht.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt+1,Zt,Ht.width,Ht.height,0,Nt,Mt,Ht.data)}}else{Xt?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Nt,Mt,yt[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Zt,Nt,Mt,yt[J]);for(let pt=0;pt<W.length;pt++){let dt=W[pt];Xt?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt+1,0,0,Nt,Mt,dt.image[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt+1,Zt,Nt,Mt,dt.image[J])}}}g(S)&&p(s.TEXTURE_CUBE_MAP),q.__version=Q.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function bt(A,S,F,X,Q,q){let Et=r.convert(F.format,F.colorSpace),lt=r.convert(F.type),_t=v(F.internalFormat,Et,lt,F.colorSpace),qt=n.get(S),tt=n.get(F);if(tt.__renderTarget=S,!qt.__hasExternalTextures){let yt=Math.max(1,S.width>>q),Lt=Math.max(1,S.height>>q);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?e.texImage3D(Q,q,_t,yt,Lt,S.depth,0,Et,lt,null):e.texImage2D(Q,q,_t,yt,Lt,0,Et,lt,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),xt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,X,Q,tt.__webglTexture,0,j(S)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,X,Q,tt.__webglTexture,q),e.bindFramebuffer(s.FRAMEBUFFER,null)}function rt(A,S,F){if(s.bindRenderbuffer(s.RENDERBUFFER,A),S.depthBuffer){let X=S.depthTexture,Q=X&&X.isDepthTexture?X.type:null,q=x(S.stencilBuffer,Q),Et=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=j(S);xt(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt,q,S.width,S.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,q,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,q,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Et,s.RENDERBUFFER,A)}else{let X=S.textures;for(let Q=0;Q<X.length;Q++){let q=X[Q],Et=r.convert(q.format,q.colorSpace),lt=r.convert(q.type),_t=v(q.internalFormat,Et,lt,q.colorSpace),qt=j(S);F&&xt(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,qt,_t,S.width,S.height):xt(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qt,_t,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,_t,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function It(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let X=n.get(S.depthTexture);X.__renderTarget=S,(!X.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Z(S.depthTexture,0);let Q=X.__webglTexture,q=j(S);if(S.depthTexture.format===Ii)xt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(S.depthTexture.format===Di)xt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ft(A){let S=n.get(A),F=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){let X=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),X){let Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,X.removeEventListener("dispose",Q)};X.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=X}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");It(S.__webglFramebuffer,A)}else if(F){S.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[X]),S.__webglDepthbuffer[X]===void 0)S.__webglDepthbuffer[X]=s.createRenderbuffer(),rt(S.__webglDepthbuffer[X],A,!1);else{let Q=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=S.__webglDepthbuffer[X];s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,q)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),rt(S.__webglDepthbuffer,A,!1);else{let X=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,X,s.RENDERBUFFER,Q)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ut(A,S,F){let X=n.get(A);S!==void 0&&bt(X.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&Ft(A)}function Jt(A){let S=A.texture,F=n.get(A),X=n.get(S);A.addEventListener("dispose",C);let Q=A.textures,q=A.isWebGLCubeRenderTarget===!0,Et=Q.length>1;if(Et||(X.__webglTexture===void 0&&(X.__webglTexture=s.createTexture()),X.__version=S.version,o.memory.textures++),q){F.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer[lt]=[];for(let _t=0;_t<S.mipmaps.length;_t++)F.__webglFramebuffer[lt][_t]=s.createFramebuffer()}else F.__webglFramebuffer[lt]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer=[];for(let lt=0;lt<S.mipmaps.length;lt++)F.__webglFramebuffer[lt]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(Et)for(let lt=0,_t=Q.length;lt<_t;lt++){let qt=n.get(Q[lt]);qt.__webglTexture===void 0&&(qt.__webglTexture=s.createTexture(),o.memory.textures++)}if(A.samples>0&&xt(A)===!1){F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let lt=0;lt<Q.length;lt++){let _t=Q[lt];F.__webglColorRenderbuffer[lt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[lt]);let qt=r.convert(_t.format,_t.colorSpace),tt=r.convert(_t.type),yt=v(_t.internalFormat,qt,tt,_t.colorSpace,A.isXRRenderTarget===!0),Lt=j(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Lt,yt,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,F.__webglColorRenderbuffer[lt])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),rt(F.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){e.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture),kt(s.TEXTURE_CUBE_MAP,S);for(let lt=0;lt<6;lt++)if(S.mipmaps&&S.mipmaps.length>0)for(let _t=0;_t<S.mipmaps.length;_t++)bt(F.__webglFramebuffer[lt][_t],A,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,_t);else bt(F.__webglFramebuffer[lt],A,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);g(S)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let lt=0,_t=Q.length;lt<_t;lt++){let qt=Q[lt],tt=n.get(qt);e.bindTexture(s.TEXTURE_2D,tt.__webglTexture),kt(s.TEXTURE_2D,qt),bt(F.__webglFramebuffer,A,qt,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,0),g(qt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let lt=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(lt=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(lt,X.__webglTexture),kt(lt,S),S.mipmaps&&S.mipmaps.length>0)for(let _t=0;_t<S.mipmaps.length;_t++)bt(F.__webglFramebuffer[_t],A,S,s.COLOR_ATTACHMENT0,lt,_t);else bt(F.__webglFramebuffer,A,S,s.COLOR_ATTACHMENT0,lt,0);g(S)&&p(lt),e.unbindTexture()}A.depthBuffer&&Ft(A)}function K(A){let S=A.textures;for(let F=0,X=S.length;F<X;F++){let Q=S[F];if(g(Q)){let q=y(A),Et=n.get(Q).__webglTexture;e.bindTexture(q,Et),p(q),e.unbindTexture()}}}let nt=[],I=[];function Ct(A){if(A.samples>0){if(xt(A)===!1){let S=A.textures,F=A.width,X=A.height,Q=s.COLOR_BUFFER_BIT,q=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Et=n.get(A),lt=S.length>1;if(lt)for(let _t=0;_t<S.length;_t++)e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let _t=0;_t<S.length;_t++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),lt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Et.__webglColorRenderbuffer[_t]);let qt=n.get(S[_t]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,qt,0)}s.blitFramebuffer(0,0,F,X,0,0,F,X,Q,s.NEAREST),c===!0&&(nt.length=0,I.length=0,nt.push(s.COLOR_ATTACHMENT0+_t),A.depthBuffer&&A.resolveDepthBuffer===!1&&(nt.push(q),I.push(q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,I)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,nt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),lt)for(let _t=0;_t<S.length;_t++){e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,Et.__webglColorRenderbuffer[_t]);let qt=n.get(S[_t]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,qt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){let S=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function j(A){return Math.min(i.maxSamples,A.samples)}function xt(A){let S=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ot(A){let S=o.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function Pt(A,S){let F=A.colorSpace,X=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==Yi&&F!==Un&&(Yt.getTransfer(F)===se?(X!==Oe||Q!==Mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),S}function gt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=k,this.setTexture2D=Z,this.setTexture2DArray=H,this.setTexture3D=et,this.setTextureCube=G,this.rebindTextures=Ut,this.setupRenderTarget=Jt,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=xt}function xp(s,t){function e(n,i=Un){let r,o=Yt.getTransfer(i);if(n===Mn)return s.UNSIGNED_BYTE;if(n===Oc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Bc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===uu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===lu)return s.BYTE;if(n===hu)return s.SHORT;if(n===vs)return s.UNSIGNED_SHORT;if(n===Fc)return s.INT;if(n===Gn)return s.UNSIGNED_INT;if(n===Ge)return s.FLOAT;if(n===Ps)return s.HALF_FLOAT;if(n===du)return s.ALPHA;if(n===fu)return s.RGB;if(n===Oe)return s.RGBA;if(n===pu)return s.LUMINANCE;if(n===mu)return s.LUMINANCE_ALPHA;if(n===Ii)return s.DEPTH_COMPONENT;if(n===Di)return s.DEPTH_STENCIL;if(n===zc)return s.RED;if(n===Wr)return s.RED_INTEGER;if(n===gu)return s.RG;if(n===kc)return s.RG_INTEGER;if(n===Vc)return s.RGBA_INTEGER;if(n===Ks||n===Qs||n===js||n===tr)if(o===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ks)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ks)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===js)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===tr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$o||n===Ko||n===Qo||n===jo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$o)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ko)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Qo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===jo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ta||n===ea||n===na)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ta||n===ea)return o===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===na)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ia||n===sa||n===ra||n===oa||n===aa||n===ca||n===la||n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===ga)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ia)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===sa)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ra)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===oa)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===aa)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ca)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===la)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ha)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ua)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===da)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fa)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===pa)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ma)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ga)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===er||n===_a||n===xa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===er)return o===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===_a)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_u||n===va||n===ya||n===Ma)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===er)return r.COMPRESSED_RED_RGTC1_EXT;if(n===va)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ya)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ma)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ui?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var Ta=class extends xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ii=class extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Iv={type:"move"},ir=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ii,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ii,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ii,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let _ of t.hand.values()){let g=e.getJointPose(_,n),p=this._getHandJoint(l,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Iv)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ii;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Pv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,nh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new _e,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new $e({vertexShader:Pv,fragmentShader:Lv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new pe(new ws(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ih=class extends sn{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null,_=new nh,g=e.getContextAttributes(),p=null,y=null,v=[],x=[],P=new $,w=null,C=new xe;C.viewport=new $t;let R=new xe;R.viewport=new $t;let b=[C,R],M=new Ta,L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let it=v[Y];return it===void 0&&(it=new ir,v[Y]=it),it.getTargetRaySpace()},this.getControllerGrip=function(Y){let it=v[Y];return it===void 0&&(it=new ir,v[Y]=it),it.getGripSpace()},this.getHand=function(Y){let it=v[Y];return it===void 0&&(it=new ir,v[Y]=it),it.getHandSpace()};function O(Y){let it=x.indexOf(Y.inputSource);if(it===-1)return;let bt=v[it];bt!==void 0&&(bt.update(Y.inputSource,Y.frame,l||o),bt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function V(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",Z);for(let Y=0;Y<v.length;Y++){let it=x[Y];it!==null&&(x[Y]=null,v[Y].disconnect(it))}L=null,k=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,i=null,y=null,te.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",V),i.addEventListener("inputsourceschange",Z),g.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(P),i.renderState.layers===void 0){let it={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,it),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Ze(f.framebufferWidth,f.framebufferHeight,{format:Oe,type:Mn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let it=null,bt=null,rt=null;g.depth&&(rt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=g.stencil?Di:Ii,bt=g.stencil?Ui:Gn);let It={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(It),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Ze(d.textureWidth,d.textureHeight,{format:Oe,type:Mn,depthTexture:new vr(d.textureWidth,d.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),te.setContext(i),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z(Y){for(let it=0;it<Y.removed.length;it++){let bt=Y.removed[it],rt=x.indexOf(bt);rt>=0&&(x[rt]=null,v[rt].disconnect(bt))}for(let it=0;it<Y.added.length;it++){let bt=Y.added[it],rt=x.indexOf(bt);if(rt===-1){for(let Ft=0;Ft<v.length;Ft++)if(Ft>=x.length){x.push(bt),rt=Ft;break}else if(x[Ft]===null){x[Ft]=bt,rt=Ft;break}if(rt===-1)break}let It=v[rt];It&&It.connect(bt)}}let H=new T,et=new T;function G(Y,it,bt){H.setFromMatrixPosition(it.matrixWorld),et.setFromMatrixPosition(bt.matrixWorld);let rt=H.distanceTo(et),It=it.projectionMatrix.elements,Ft=bt.projectionMatrix.elements,Ut=It[14]/(It[10]-1),Jt=It[14]/(It[10]+1),K=(It[9]+1)/It[5],nt=(It[9]-1)/It[5],I=(It[8]-1)/It[0],Ct=(Ft[8]+1)/Ft[0],j=Ut*I,xt=Ut*Ct,ot=rt/(-I+Ct),Pt=ot*-I;if(it.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Pt),Y.translateZ(ot),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),It[10]===-1)Y.projectionMatrix.copy(it.projectionMatrix),Y.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let gt=Ut+ot,A=Jt+ot,S=j-Pt,F=xt+(rt-Pt),X=K*Jt/A*gt,Q=nt*Jt/A*gt;Y.projectionMatrix.makePerspective(S,F,X,Q,gt,A),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function at(Y,it){it===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(it.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let it=Y.near,bt=Y.far;_.texture!==null&&(_.depthNear>0&&(it=_.depthNear),_.depthFar>0&&(bt=_.depthFar)),M.near=R.near=C.near=it,M.far=R.far=C.far=bt,(L!==M.near||k!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,k=M.far),C.layers.mask=Y.layers.mask|2,R.layers.mask=Y.layers.mask|4,M.layers.mask=C.layers.mask|R.layers.mask;let rt=Y.parent,It=M.cameras;at(M,rt);for(let Ft=0;Ft<It.length;Ft++)at(It[Ft],rt);It.length===2?G(M,C,R):M.projectionMatrix.copy(C.projectionMatrix),mt(Y,M,rt)};function mt(Y,it,bt){bt===null?Y.matrix.copy(it.matrixWorld):(Y.matrix.copy(bt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(it.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(it.projectionMatrix),Y.projectionMatrixInverse.copy(it.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ys*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let St=null;function kt(Y,it){if(h=it.getViewerPose(l||o),m=it,h!==null){let bt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let rt=!1;bt.length!==M.cameras.length&&(M.cameras.length=0,rt=!0);for(let Ft=0;Ft<bt.length;Ft++){let Ut=bt[Ft],Jt=null;if(f!==null)Jt=f.getViewport(Ut);else{let nt=u.getViewSubImage(d,Ut);Jt=nt.viewport,Ft===0&&(t.setRenderTargetTextures(y,nt.colorTexture,d.ignoreDepthValues?void 0:nt.depthStencilTexture),t.setRenderTarget(y))}let K=b[Ft];K===void 0&&(K=new xe,K.layers.enable(Ft),K.viewport=new $t,b[Ft]=K),K.matrix.fromArray(Ut.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(Ut.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(Jt.x,Jt.y,Jt.width,Jt.height),Ft===0&&(M.matrix.copy(K.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),rt===!0&&M.cameras.push(K)}let It=i.enabledFeatures;if(It&&It.includes("depth-sensing")){let Ft=u.getDepthInformation(bt[0]);Ft&&Ft.isValid&&Ft.texture&&_.init(t,Ft,i.renderState)}}for(let bt=0;bt<v.length;bt++){let rt=x[bt],It=v[bt];rt!==null&&It!==void 0&&It.update(rt,it,l||o)}St&&St(Y,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),m=null}let te=new fp;te.setAnimationLoop(kt),this.setAnimationLoop=function(Y){St=Y},this.dispose=function(){}}},mi=new Je,Uv=new Dt;function Dv(s,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,up(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,y,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,x)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,y,v):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Be&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Be&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let y=t.get(p),v=y.envMap,x=y.envMapRotation;v&&(g.envMap.value=v,mi.copy(x),mi.x*=-1,mi.y*=-1,mi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),g.envMapRotation.value.setFromMatrix4(Uv.makeRotationFromEuler(mi)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,y,v){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=v*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Be&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){let y=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Nv(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,v){let x=v.program;n.uniformBlockBinding(y,x)}function l(y,v){let x=i[y.id];x===void 0&&(m(y),x=h(y),i[y.id]=x,y.addEventListener("dispose",g));let P=v.program;n.updateUBOMapping(y,P);let w=t.render.frame;r[y.id]!==w&&(d(y),r[y.id]=w)}function h(y){let v=u();y.__bindingPointIndex=v;let x=s.createBuffer(),P=y.__size,w=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,P,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,x),x}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let v=i[y.id],x=y.uniforms,P=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let w=0,C=x.length;w<C;w++){let R=Array.isArray(x[w])?x[w]:[x[w]];for(let b=0,M=R.length;b<M;b++){let L=R[b];if(f(L,w,b,P)===!0){let k=L.__offset,O=Array.isArray(L.value)?L.value:[L.value],V=0;for(let Z=0;Z<O.length;Z++){let H=O[Z],et=_(H);typeof H=="number"||typeof H=="boolean"?(L.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,k+V,L.__data)):H.isMatrix3?(L.__data[0]=H.elements[0],L.__data[1]=H.elements[1],L.__data[2]=H.elements[2],L.__data[3]=0,L.__data[4]=H.elements[3],L.__data[5]=H.elements[4],L.__data[6]=H.elements[5],L.__data[7]=0,L.__data[8]=H.elements[6],L.__data[9]=H.elements[7],L.__data[10]=H.elements[8],L.__data[11]=0):(H.toArray(L.__data,V),V+=et.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,k,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,v,x,P){let w=y.value,C=v+"_"+x;if(P[C]===void 0)return typeof w=="number"||typeof w=="boolean"?P[C]=w:P[C]=w.clone(),!0;{let R=P[C];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return P[C]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function m(y){let v=y.uniforms,x=0,P=16;for(let C=0,R=v.length;C<R;C++){let b=Array.isArray(v[C])?v[C]:[v[C]];for(let M=0,L=b.length;M<L;M++){let k=b[M],O=Array.isArray(k.value)?k.value:[k.value];for(let V=0,Z=O.length;V<Z;V++){let H=O[V],et=_(H),G=x%P,at=G%et.boundary,mt=G+at;x+=at,mt!==0&&P-mt<et.storage&&(x+=P-mt),k.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=x,x+=et.storage}}}let w=x%P;return w>0&&(x+=P-w),y.__size=x,y.__cache={},this}function _(y){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function g(y){let v=y.target;v.removeEventListener("dispose",g);let x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(let y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}var sh=class{constructor(t={}){let{canvas:e=lp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let m=new Uint32Array(4),_=new Int32Array(4),g=null,p=null,y=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=He,this.toneMapping=Bn,this.toneMappingExposure=1;let x=this,P=!1,w=0,C=0,R=null,b=-1,M=null,L=new $t,k=new $t,O=null,V=new ut(0),Z=0,H=e.width,et=e.height,G=1,at=null,mt=null,St=new $t(0,0,H,et),kt=new $t(0,0,H,et),te=!1,Y=new Oi,it=!1,bt=!1,rt=new Dt,It=new Dt,Ft=new T,Ut=new $t,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},K=!1;function nt(){return R===null?G:1}let I=n;function Ct(E,D){return e.getContext(E,D)}try{let E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Dc}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",dt,!1),I===null){let D="webgl2";if(I=Ct(D,E),I===null)throw Ct(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let j,xt,ot,Pt,gt,A,S,F,X,Q,q,Et,lt,_t,qt,tt,yt,Lt,Nt,Mt,Zt,Xt,oe,U;function ht(){j=new Z0(I),j.init(),Xt=new xp(I,j),xt=new H0(I,j,t,Xt),ot=new bv(I,j),xt.reverseDepthBuffer&&d&&ot.buffers.depth.setReversed(!0),Pt=new K0(I),gt=new hv,A=new Rv(I,j,ot,gt,xt,Xt,Pt),S=new W0(x),F=new Y0(x),X=new sg(I),oe=new k0(I,X),Q=new J0(I,X,Pt,oe),q=new j0(I,Q,X,Pt),Nt=new Q0(I,xt,A),tt=new G0(gt),Et=new lv(x,S,F,j,xt,oe,tt),lt=new Dv(x,gt),_t=new dv,qt=new xv(j),Lt=new z0(x,S,F,ot,q,f,c),yt=new Mv(x,q,xt),U=new Nv(I,Pt,xt,ot),Mt=new V0(I,j,Pt),Zt=new $0(I,j,Pt),Pt.programs=Et.programs,x.capabilities=xt,x.extensions=j,x.properties=gt,x.renderLists=_t,x.shadowMap=yt,x.state=ot,x.info=Pt}ht();let W=new ih(x,I);this.xr=W,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let E=j.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=j.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(E){E!==void 0&&(G=E,this.setSize(H,et,!1))},this.getSize=function(E){return E.set(H,et)},this.setSize=function(E,D,B=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=E,et=D,e.width=Math.floor(E*G),e.height=Math.floor(D*G),B===!0&&(e.style.width=E+"px",e.style.height=D+"px"),this.setViewport(0,0,E,D)},this.getDrawingBufferSize=function(E){return E.set(H*G,et*G).floor()},this.setDrawingBufferSize=function(E,D,B){H=E,et=D,G=B,e.width=Math.floor(E*B),e.height=Math.floor(D*B),this.setViewport(0,0,E,D)},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(St)},this.setViewport=function(E,D,B,z){E.isVector4?St.set(E.x,E.y,E.z,E.w):St.set(E,D,B,z),ot.viewport(L.copy(St).multiplyScalar(G).round())},this.getScissor=function(E){return E.copy(kt)},this.setScissor=function(E,D,B,z){E.isVector4?kt.set(E.x,E.y,E.z,E.w):kt.set(E,D,B,z),ot.scissor(k.copy(kt).multiplyScalar(G).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(E){ot.setScissorTest(te=E)},this.setOpaqueSort=function(E){at=E},this.setTransparentSort=function(E){mt=E},this.getClearColor=function(E){return E.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor.apply(Lt,arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha.apply(Lt,arguments)},this.clear=function(E=!0,D=!0,B=!0){let z=0;if(E){let N=!1;if(R!==null){let st=R.texture.format;N=st===Vc||st===kc||st===Wr}if(N){let st=R.texture.type,ft=st===Mn||st===Gn||st===vs||st===Ui||st===Oc||st===Bc,wt=Lt.getClearColor(),At=Lt.getClearAlpha(),Ot=wt.r,Gt=wt.g,Tt=wt.b;ft?(m[0]=Ot,m[1]=Gt,m[2]=Tt,m[3]=At,I.clearBufferuiv(I.COLOR,0,m)):(_[0]=Ot,_[1]=Gt,_[2]=Tt,_[3]=At,I.clearBufferiv(I.COLOR,0,_))}else z|=I.COLOR_BUFFER_BIT}D&&(z|=I.DEPTH_BUFFER_BIT),B&&(z|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),_t.dispose(),qt.dispose(),gt.dispose(),S.dispose(),F.dispose(),q.dispose(),oe.dispose(),U.dispose(),Et.dispose(),W.dispose(),W.removeEventListener("sessionstart",Au),W.removeEventListener("sessionend",Tu),li.stop()};function J(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let E=Pt.autoReset,D=yt.enabled,B=yt.autoUpdate,z=yt.needsUpdate,N=yt.type;ht(),Pt.autoReset=E,yt.enabled=D,yt.autoUpdate=B,yt.needsUpdate=z,yt.type=N}function dt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ht(E){let D=E.target;D.removeEventListener("dispose",Ht),ue(D)}function ue(E){Ce(E),gt.remove(E)}function Ce(E){let D=gt.get(E).programs;D!==void 0&&(D.forEach(function(B){Et.releaseProgram(B)}),E.isShaderMaterial&&Et.releaseShaderCache(E))}this.renderBufferDirect=function(E,D,B,z,N,st){D===null&&(D=Jt);let ft=N.isMesh&&N.matrixWorld.determinant()<0,wt=Rp(E,D,B,z,N);ot.setMaterial(z,ft);let At=B.index,Ot=1;if(z.wireframe===!0){if(At=Q.getWireframeAttribute(B),At===void 0)return;Ot=2}let Gt=B.drawRange,Tt=B.attributes.position,Kt=Gt.start*Ot,ae=(Gt.start+Gt.count)*Ot;st!==null&&(Kt=Math.max(Kt,st.start*Ot),ae=Math.min(ae,(st.start+st.count)*Ot)),At!==null?(Kt=Math.max(Kt,0),ae=Math.min(ae,At.count)):Tt!=null&&(Kt=Math.max(Kt,0),ae=Math.min(ae,Tt.count));let ce=ae-Kt;if(ce<0||ce===1/0)return;oe.setup(N,z,wt,B,At);let ze,ee=Mt;if(At!==null&&(ze=X.get(At),ee=Zt,ee.setIndex(ze)),N.isMesh)z.wireframe===!0?(ot.setLineWidth(z.wireframeLinewidth*nt()),ee.setMode(I.LINES)):ee.setMode(I.TRIANGLES);else if(N.isLine){let Rt=z.linewidth;Rt===void 0&&(Rt=1),ot.setLineWidth(Rt*nt()),N.isLineSegments?ee.setMode(I.LINES):N.isLineLoop?ee.setMode(I.LINE_LOOP):ee.setMode(I.LINE_STRIP)}else N.isPoints?ee.setMode(I.POINTS):N.isSprite&&ee.setMode(I.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ee.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(j.get("WEBGL_multi_draw"))ee.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Rt=N._multiDrawStarts,An=N._multiDrawCounts,ne=N._multiDrawCount,an=At?X.get(At).bytesPerElement:1,Zi=gt.get(z).currentProgram.getUniforms();for(let We=0;We<ne;We++)Zi.setValue(I,"_gl_DrawID",We),ee.render(Rt[We]/an,An[We])}else if(N.isInstancedMesh)ee.renderInstances(Kt,ce,N.count);else if(B.isInstancedBufferGeometry){let Rt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,An=Math.min(B.instanceCount,Rt);ee.renderInstances(Kt,ce,An)}else ee.render(Kt,ce)};function ie(E,D,B){E.transparent===!0&&E.side===gn&&E.forceSinglePass===!1?(E.side=Be,E.needsUpdate=!0,Yr(E,D,B),E.side=Vn,E.needsUpdate=!0,Yr(E,D,B),E.side=gn):Yr(E,D,B)}this.compile=function(E,D,B=null){B===null&&(B=E),p=qt.get(B),p.init(D),v.push(p),B.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),E!==B&&E.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();let z=new Set;return E.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let st=N.material;if(st)if(Array.isArray(st))for(let ft=0;ft<st.length;ft++){let wt=st[ft];ie(wt,B,N),z.add(wt)}else ie(st,B,N),z.add(st)}),v.pop(),p=null,z},this.compileAsync=function(E,D,B=null){let z=this.compile(E,D,B);return new Promise(N=>{function st(){if(z.forEach(function(ft){gt.get(ft).currentProgram.isReady()&&z.delete(ft)}),z.size===0){N(E);return}setTimeout(st,10)}j.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let on=null;function wn(E){on&&on(E)}function Au(){li.stop()}function Tu(){li.start()}let li=new fp;li.setAnimationLoop(wn),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(E){on=E,W.setAnimationLoop(E),E===null?li.stop():li.start()},W.addEventListener("sessionstart",Au),W.addEventListener("sessionend",Tu),this.render=function(E,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(D),D=W.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,D,R),p=qt.get(E,v.length),p.init(D),v.push(p),It.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Y.setFromProjectionMatrix(It),bt=this.localClippingEnabled,it=tt.init(this.clippingPlanes,bt),g=_t.get(E,y.length),g.init(),y.push(g),W.enabled===!0&&W.isPresenting===!0){let st=x.xr.getDepthSensingMesh();st!==null&&Xc(st,D,-1/0,x.sortObjects)}Xc(E,D,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(at,mt),K=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,K&&Lt.addToRenderList(g,E),this.info.render.frame++,it===!0&&tt.beginShadows();let B=p.state.shadowsArray;yt.render(B,E,D),it===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();let z=g.opaque,N=g.transmissive;if(p.setupLights(),D.isArrayCamera){let st=D.cameras;if(N.length>0)for(let ft=0,wt=st.length;ft<wt;ft++){let At=st[ft];Ru(z,N,E,At)}K&&Lt.render(E);for(let ft=0,wt=st.length;ft<wt;ft++){let At=st[ft];Cu(g,E,At,At.viewport)}}else N.length>0&&Ru(z,N,E,D),K&&Lt.render(E),Cu(g,E,D);R!==null&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),E.isScene===!0&&E.onAfterRender(x,E,D),oe.resetDefaultState(),b=-1,M=null,v.pop(),v.length>0?(p=v[v.length-1],it===!0&&tt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?g=y[y.length-1]:g=null};function Xc(E,D,B,z){if(E.visible===!1)return;if(E.layers.test(D.layers)){if(E.isGroup)B=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(D);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Y.intersectsSprite(E)){z&&Ut.setFromMatrixPosition(E.matrixWorld).applyMatrix4(It);let ft=q.update(E),wt=E.material;wt.visible&&g.push(E,ft,wt,B,Ut.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Y.intersectsObject(E))){let ft=q.update(E),wt=E.material;if(z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ut.copy(E.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Ut.copy(ft.boundingSphere.center)),Ut.applyMatrix4(E.matrixWorld).applyMatrix4(It)),Array.isArray(wt)){let At=ft.groups;for(let Ot=0,Gt=At.length;Ot<Gt;Ot++){let Tt=At[Ot],Kt=wt[Tt.materialIndex];Kt&&Kt.visible&&g.push(E,ft,Kt,B,Ut.z,Tt)}}else wt.visible&&g.push(E,ft,wt,B,Ut.z,null)}}let st=E.children;for(let ft=0,wt=st.length;ft<wt;ft++)Xc(st[ft],D,B,z)}function Cu(E,D,B,z){let N=E.opaque,st=E.transmissive,ft=E.transparent;p.setupLightsView(B),it===!0&&tt.setGlobalState(x.clippingPlanes,B),z&&ot.viewport(L.copy(z)),N.length>0&&qr(N,D,B),st.length>0&&qr(st,D,B),ft.length>0&&qr(ft,D,B),ot.buffers.depth.setTest(!0),ot.buffers.depth.setMask(!0),ot.buffers.color.setMask(!0),ot.setPolygonOffset(!1)}function Ru(E,D,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new Ze(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")||j.has("EXT_color_buffer_float")?Ps:Mn,minFilter:xn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));let st=p.state.transmissionRenderTarget[z.id],ft=z.viewport||L;st.setSize(ft.z,ft.w);let wt=x.getRenderTarget();x.setRenderTarget(st),x.getClearColor(V),Z=x.getClearAlpha(),Z<1&&x.setClearColor(16777215,.5),x.clear(),K&&Lt.render(B);let At=x.toneMapping;x.toneMapping=Bn;let Ot=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),it===!0&&tt.setGlobalState(x.clippingPlanes,z),qr(E,B,z),A.updateMultisampleRenderTarget(st),A.updateRenderTargetMipmap(st),j.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let Tt=0,Kt=D.length;Tt<Kt;Tt++){let ae=D[Tt],ce=ae.object,ze=ae.geometry,ee=ae.material,Rt=ae.group;if(ee.side===gn&&ce.layers.test(z.layers)){let An=ee.side;ee.side=Be,ee.needsUpdate=!0,Iu(ce,B,z,ze,ee,Rt),ee.side=An,ee.needsUpdate=!0,Gt=!0}}Gt===!0&&(A.updateMultisampleRenderTarget(st),A.updateRenderTargetMipmap(st))}x.setRenderTarget(wt),x.setClearColor(V,Z),Ot!==void 0&&(z.viewport=Ot),x.toneMapping=At}function qr(E,D,B){let z=D.isScene===!0?D.overrideMaterial:null;for(let N=0,st=E.length;N<st;N++){let ft=E[N],wt=ft.object,At=ft.geometry,Ot=z===null?ft.material:z,Gt=ft.group;wt.layers.test(B.layers)&&Iu(wt,D,B,At,Ot,Gt)}}function Iu(E,D,B,z,N,st){E.onBeforeRender(x,D,B,z,N,st),E.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),N.onBeforeRender(x,D,B,z,E,st),N.transparent===!0&&N.side===gn&&N.forceSinglePass===!1?(N.side=Be,N.needsUpdate=!0,x.renderBufferDirect(B,D,z,N,E,st),N.side=Vn,N.needsUpdate=!0,x.renderBufferDirect(B,D,z,N,E,st),N.side=gn):x.renderBufferDirect(B,D,z,N,E,st),E.onAfterRender(x,D,B,z,N,st)}function Yr(E,D,B){D.isScene!==!0&&(D=Jt);let z=gt.get(E),N=p.state.lights,st=p.state.shadowsArray,ft=N.state.version,wt=Et.getParameters(E,N.state,st,D,B),At=Et.getProgramCacheKey(wt),Ot=z.programs;z.environment=E.isMeshStandardMaterial?D.environment:null,z.fog=D.fog,z.envMap=(E.isMeshStandardMaterial?F:S).get(E.envMap||z.environment),z.envMapRotation=z.environment!==null&&E.envMap===null?D.environmentRotation:E.envMapRotation,Ot===void 0&&(E.addEventListener("dispose",Ht),Ot=new Map,z.programs=Ot);let Gt=Ot.get(At);if(Gt!==void 0){if(z.currentProgram===Gt&&z.lightsStateVersion===ft)return Lu(E,wt),Gt}else wt.uniforms=Et.getUniforms(E),E.onBeforeCompile(wt,x),Gt=Et.acquireProgram(wt,At),Ot.set(At,Gt),z.uniforms=wt.uniforms;let Tt=z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Tt.clippingPlanes=tt.uniform),Lu(E,wt),z.needsLights=Pp(E),z.lightsStateVersion=ft,z.needsLights&&(Tt.ambientLightColor.value=N.state.ambient,Tt.lightProbe.value=N.state.probe,Tt.directionalLights.value=N.state.directional,Tt.directionalLightShadows.value=N.state.directionalShadow,Tt.spotLights.value=N.state.spot,Tt.spotLightShadows.value=N.state.spotShadow,Tt.rectAreaLights.value=N.state.rectArea,Tt.ltc_1.value=N.state.rectAreaLTC1,Tt.ltc_2.value=N.state.rectAreaLTC2,Tt.pointLights.value=N.state.point,Tt.pointLightShadows.value=N.state.pointShadow,Tt.hemisphereLights.value=N.state.hemi,Tt.directionalShadowMap.value=N.state.directionalShadowMap,Tt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Tt.spotShadowMap.value=N.state.spotShadowMap,Tt.spotLightMatrix.value=N.state.spotLightMatrix,Tt.spotLightMap.value=N.state.spotLightMap,Tt.pointShadowMap.value=N.state.pointShadowMap,Tt.pointShadowMatrix.value=N.state.pointShadowMatrix),z.currentProgram=Gt,z.uniformsList=null,Gt}function Pu(E){if(E.uniformsList===null){let D=E.currentProgram.getUniforms();E.uniformsList=xs.seqWithValue(D.seq,E.uniforms)}return E.uniformsList}function Lu(E,D){let B=gt.get(E);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.batchingColor=D.batchingColor,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.instancingMorph=D.instancingMorph,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function Rp(E,D,B,z,N){D.isScene!==!0&&(D=Jt),A.resetTextureUnits();let st=D.fog,ft=z.isMeshStandardMaterial?D.environment:null,wt=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Yi,At=(z.isMeshStandardMaterial?F:S).get(z.envMap||ft),Ot=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Gt=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Tt=!!B.morphAttributes.position,Kt=!!B.morphAttributes.normal,ae=!!B.morphAttributes.color,ce=Bn;z.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ce=x.toneMapping);let ze=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ee=ze!==void 0?ze.length:0,Rt=gt.get(z),An=p.state.lights;if(it===!0&&(bt===!0||E!==M)){let je=E===M&&z.id===b;tt.setState(z,E,je)}let ne=!1;z.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==An.state.version||Rt.outputColorSpace!==wt||N.isBatchedMesh&&Rt.batching===!1||!N.isBatchedMesh&&Rt.batching===!0||N.isBatchedMesh&&Rt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Rt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Rt.instancing===!1||!N.isInstancedMesh&&Rt.instancing===!0||N.isSkinnedMesh&&Rt.skinning===!1||!N.isSkinnedMesh&&Rt.skinning===!0||N.isInstancedMesh&&Rt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Rt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Rt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Rt.instancingMorph===!1&&N.morphTexture!==null||Rt.envMap!==At||z.fog===!0&&Rt.fog!==st||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==tt.numPlanes||Rt.numIntersection!==tt.numIntersection)||Rt.vertexAlphas!==Ot||Rt.vertexTangents!==Gt||Rt.morphTargets!==Tt||Rt.morphNormals!==Kt||Rt.morphColors!==ae||Rt.toneMapping!==ce||Rt.morphTargetsCount!==ee)&&(ne=!0):(ne=!0,Rt.__version=z.version);let an=Rt.currentProgram;ne===!0&&(an=Yr(z,D,N));let Zi=!1,We=!1,Us=!1,le=an.getUniforms(),fn=Rt.uniforms;if(ot.useProgram(an.program)&&(Zi=!0,We=!0,Us=!0),z.id!==b&&(b=z.id,We=!0),Zi||M!==E){ot.buffers.depth.getReversed()?(rt.copy(E.projectionMatrix),Om(rt),Bm(rt),le.setValue(I,"projectionMatrix",rt)):le.setValue(I,"projectionMatrix",E.projectionMatrix),le.setValue(I,"viewMatrix",E.matrixWorldInverse);let Yn=le.map.cameraPosition;Yn!==void 0&&Yn.setValue(I,Ft.setFromMatrixPosition(E.matrixWorld)),xt.logarithmicDepthBuffer&&le.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&le.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,We=!0,Us=!0)}if(N.isSkinnedMesh){le.setOptional(I,N,"bindMatrix"),le.setOptional(I,N,"bindMatrixInverse");let je=N.skeleton;je&&(je.boneTexture===null&&je.computeBoneTexture(),le.setValue(I,"boneTexture",je.boneTexture,A))}N.isBatchedMesh&&(le.setOptional(I,N,"batchingTexture"),le.setValue(I,"batchingTexture",N._matricesTexture,A),le.setOptional(I,N,"batchingIdTexture"),le.setValue(I,"batchingIdTexture",N._indirectTexture,A),le.setOptional(I,N,"batchingColorTexture"),N._colorsTexture!==null&&le.setValue(I,"batchingColorTexture",N._colorsTexture,A));let Ds=B.morphAttributes;if((Ds.position!==void 0||Ds.normal!==void 0||Ds.color!==void 0)&&Nt.update(N,B,an),(We||Rt.receiveShadow!==N.receiveShadow)&&(Rt.receiveShadow=N.receiveShadow,le.setValue(I,"receiveShadow",N.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(fn.envMap.value=At,fn.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&D.environment!==null&&(fn.envMapIntensity.value=D.environmentIntensity),We&&(le.setValue(I,"toneMappingExposure",x.toneMappingExposure),Rt.needsLights&&Ip(fn,Us),st&&z.fog===!0&&lt.refreshFogUniforms(fn,st),lt.refreshMaterialUniforms(fn,z,G,et,p.state.transmissionRenderTarget[E.id]),xs.upload(I,Pu(Rt),fn,A)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(xs.upload(I,Pu(Rt),fn,A),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&le.setValue(I,"center",N.center),le.setValue(I,"modelViewMatrix",N.modelViewMatrix),le.setValue(I,"normalMatrix",N.normalMatrix),le.setValue(I,"modelMatrix",N.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let je=z.uniformsGroups;for(let Yn=0,Zn=je.length;Yn<Zn;Yn++){let Uu=je[Yn];U.update(Uu,an),U.bind(Uu,an)}}return an}function Ip(E,D){E.ambientLightColor.needsUpdate=D,E.lightProbe.needsUpdate=D,E.directionalLights.needsUpdate=D,E.directionalLightShadows.needsUpdate=D,E.pointLights.needsUpdate=D,E.pointLightShadows.needsUpdate=D,E.spotLights.needsUpdate=D,E.spotLightShadows.needsUpdate=D,E.rectAreaLights.needsUpdate=D,E.hemisphereLights.needsUpdate=D}function Pp(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(E,D,B){gt.get(E.texture).__webglTexture=D,gt.get(E.depthTexture).__webglTexture=B;let z=gt.get(E);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||j.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,D){let B=gt.get(E);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(E,D=0,B=0){R=E,w=D,C=B;let z=!0,N=null,st=!1,ft=!1;if(E){let At=gt.get(E);if(At.__useDefaultFramebuffer!==void 0)ot.bindFramebuffer(I.FRAMEBUFFER,null),z=!1;else if(At.__webglFramebuffer===void 0)A.setupRenderTarget(E);else if(At.__hasExternalTextures)A.rebindTextures(E,gt.get(E.texture).__webglTexture,gt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Tt=E.depthTexture;if(At.__boundDepthTexture!==Tt){if(Tt!==null&&gt.has(Tt)&&(E.width!==Tt.image.width||E.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(E)}}let Ot=E.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(ft=!0);let Gt=gt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Gt[D])?N=Gt[D][B]:N=Gt[D],st=!0):E.samples>0&&A.useMultisampledRTT(E)===!1?N=gt.get(E).__webglMultisampledFramebuffer:Array.isArray(Gt)?N=Gt[B]:N=Gt,L.copy(E.viewport),k.copy(E.scissor),O=E.scissorTest}else L.copy(St).multiplyScalar(G).floor(),k.copy(kt).multiplyScalar(G).floor(),O=te;if(ot.bindFramebuffer(I.FRAMEBUFFER,N)&&z&&ot.drawBuffers(E,N),ot.viewport(L),ot.scissor(k),ot.setScissorTest(O),st){let At=gt.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+D,At.__webglTexture,B)}else if(ft){let At=gt.get(E.texture),Ot=D||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,At.__webglTexture,B||0,Ot)}b=-1},this.readRenderTargetPixels=function(E,D,B,z,N,st,ft){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=gt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ft!==void 0&&(wt=wt[ft]),wt){ot.bindFramebuffer(I.FRAMEBUFFER,wt);try{let At=E.texture,Ot=At.format,Gt=At.type;if(!xt.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xt.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=E.width-z&&B>=0&&B<=E.height-N&&I.readPixels(D,B,z,N,Xt.convert(Ot),Xt.convert(Gt),st)}finally{let At=R!==null?gt.get(R).__webglFramebuffer:null;ot.bindFramebuffer(I.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(E,D,B,z,N,st,ft){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=gt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ft!==void 0&&(wt=wt[ft]),wt){let At=E.texture,Ot=At.format,Gt=At.type;if(!xt.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xt.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=E.width-z&&B>=0&&B<=E.height-N){ot.bindFramebuffer(I.FRAMEBUFFER,wt);let Tt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Tt),I.bufferData(I.PIXEL_PACK_BUFFER,st.byteLength,I.STREAM_READ),I.readPixels(D,B,z,N,Xt.convert(Ot),Xt.convert(Gt),0);let Kt=R!==null?gt.get(R).__webglFramebuffer:null;ot.bindFramebuffer(I.FRAMEBUFFER,Kt);let ae=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Fm(I,ae,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Tt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,st),I.deleteBuffer(Tt),I.deleteSync(ae),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,D=null,B=0){E.isTexture!==!0&&(Ys("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,E=arguments[1]);let z=Math.pow(2,-B),N=Math.floor(E.image.width*z),st=Math.floor(E.image.height*z),ft=D!==null?D.x:0,wt=D!==null?D.y:0;A.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,B,0,0,ft,wt,N,st),ot.unbindTexture()},this.copyTextureToTexture=function(E,D,B=null,z=null,N=0){E.isTexture!==!0&&(Ys("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,E=arguments[1],D=arguments[2],N=arguments[3]||0,B=null);let st,ft,wt,At,Ot,Gt,Tt,Kt,ae,ce=E.isCompressedTexture?E.mipmaps[N]:E.image;B!==null?(st=B.max.x-B.min.x,ft=B.max.y-B.min.y,wt=B.isBox3?B.max.z-B.min.z:1,At=B.min.x,Ot=B.min.y,Gt=B.isBox3?B.min.z:0):(st=ce.width,ft=ce.height,wt=ce.depth||1,At=0,Ot=0,Gt=0),z!==null?(Tt=z.x,Kt=z.y,ae=z.z):(Tt=0,Kt=0,ae=0);let ze=Xt.convert(D.format),ee=Xt.convert(D.type),Rt;D.isData3DTexture?(A.setTexture3D(D,0),Rt=I.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(A.setTexture2DArray(D,0),Rt=I.TEXTURE_2D_ARRAY):(A.setTexture2D(D,0),Rt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,D.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,D.unpackAlignment);let An=I.getParameter(I.UNPACK_ROW_LENGTH),ne=I.getParameter(I.UNPACK_IMAGE_HEIGHT),an=I.getParameter(I.UNPACK_SKIP_PIXELS),Zi=I.getParameter(I.UNPACK_SKIP_ROWS),We=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ce.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ce.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,At),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ot),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Gt);let Us=E.isDataArrayTexture||E.isData3DTexture,le=D.isDataArrayTexture||D.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){let fn=gt.get(E),Ds=gt.get(D),je=gt.get(fn.__renderTarget),Yn=gt.get(Ds.__renderTarget);ot.bindFramebuffer(I.READ_FRAMEBUFFER,je.__webglFramebuffer),ot.bindFramebuffer(I.DRAW_FRAMEBUFFER,Yn.__webglFramebuffer);for(let Zn=0;Zn<wt;Zn++)Us&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,gt.get(E).__webglTexture,N,Gt+Zn),E.isDepthTexture?(le&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,gt.get(D).__webglTexture,N,ae+Zn),I.blitFramebuffer(At,Ot,st,ft,Tt,Kt,st,ft,I.DEPTH_BUFFER_BIT,I.NEAREST)):le?I.copyTexSubImage3D(Rt,N,Tt,Kt,ae+Zn,At,Ot,st,ft):I.copyTexSubImage2D(Rt,N,Tt,Kt,ae+Zn,At,Ot,st,ft);ot.bindFramebuffer(I.READ_FRAMEBUFFER,null),ot.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else le?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(Rt,N,Tt,Kt,ae,st,ft,wt,ze,ee,ce.data):D.isCompressedArrayTexture?I.compressedTexSubImage3D(Rt,N,Tt,Kt,ae,st,ft,wt,ze,ce.data):I.texSubImage3D(Rt,N,Tt,Kt,ae,st,ft,wt,ze,ee,ce):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,N,Tt,Kt,st,ft,ze,ee,ce.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,N,Tt,Kt,ce.width,ce.height,ze,ce.data):I.texSubImage2D(I.TEXTURE_2D,N,Tt,Kt,st,ft,ze,ee,ce);I.pixelStorei(I.UNPACK_ROW_LENGTH,An),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ne),I.pixelStorei(I.UNPACK_SKIP_PIXELS,an),I.pixelStorei(I.UNPACK_SKIP_ROWS,Zi),I.pixelStorei(I.UNPACK_SKIP_IMAGES,We),N===0&&D.generateMipmaps&&I.generateMipmap(Rt),ot.unbindTexture()},this.copyTextureToTexture3D=function(E,D,B=null,z=null,N=0){return E.isTexture!==!0&&(Ys("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,z=arguments[1]||null,E=arguments[2],D=arguments[3],N=arguments[4]||0),Ys('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,D,B,z,N)},this.initRenderTarget=function(E){gt.get(E).__webglFramebuffer===void 0&&A.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),ot.unbindTexture()},this.resetState=function(){w=0,C=0,R=null,ot.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}},Ca=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ut(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},Ra=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ut(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ia=class extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Je,this.environmentIntensity=1,this.environmentRotation=new Je,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Bi=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=dr,this.updateRanges=[],this.version=0,this.uuid=Ye()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ye()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ye()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},De=new T,oi=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Fe(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Vt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Vt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Vt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Vt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Vt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Fe(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Fe(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Fe(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Fe(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Vt(e,this.array),n=Vt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Vt(e,this.array),n=Vt(n,this.array),i=Vt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Vt(e,this.array),n=Vt(n,this.array),i=Vt(i,this.array),r=Vt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Qt(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Sr=class extends Ee{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new ut(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},cs,zs=new T,ls=new T,hs=new T,us=new $,ks=new $,vp=new Dt,mo=new T,Vs=new T,go=new T,Ed=new $,vl=new $,wd=new $,Pa=class extends jt{constructor(t=new Sr){if(super(),this.isSprite=!0,this.type="Sprite",cs===void 0){cs=new zt;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Bi(e,5);cs.setIndex([0,1,2,0,2,3]),cs.setAttribute("position",new oi(n,3,0,!1)),cs.setAttribute("uv",new oi(n,2,3,!1))}this.geometry=cs,this.material=t,this.center=new $(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ls.setFromMatrixScale(this.matrixWorld),vp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),hs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ls.multiplyScalar(-hs.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;_o(mo.set(-.5,-.5,0),hs,o,ls,i,r),_o(Vs.set(.5,-.5,0),hs,o,ls,i,r),_o(go.set(.5,.5,0),hs,o,ls,i,r),Ed.set(0,0),vl.set(1,0),wd.set(1,1);let a=t.ray.intersectTriangle(mo,Vs,go,!1,zs);if(a===null&&(_o(Vs.set(-.5,.5,0),hs,o,ls,i,r),vl.set(0,1),a=t.ray.intersectTriangle(mo,go,Vs,!1,zs),a===null))return;let c=t.ray.origin.distanceTo(zs);c<t.near||c>t.far||e.push({distance:c,point:zs.clone(),uv:_n.getInterpolation(zs,mo,Vs,go,Ed,vl,wd,new $),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function _o(s,t,e,n,i,r){us.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(ks.x=r*us.x-i*us.y,ks.y=i*us.x+r*us.y):ks.copy(us),s.copy(t),s.x+=ks.x,s.y+=ks.y,s.applyMatrix4(vp)}var xo=new T,Ad=new T,La=class extends jt{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);let e=t.levels;for(let n=0,i=e.length;n<i;n++){let r=e[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,n=0){e=Math.abs(e);let i=this.levels,r;for(r=0;r<i.length&&!(e<i[r].distance);r++);return i.splice(r,0,{distance:e,hysteresis:n,object:t}),this.add(t),this}removeLevel(t){let e=this.levels;for(let n=0;n<e.length;n++)if(e[n].distance===t){let i=e.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){let e=this.levels;if(e.length>0){let n,i;for(n=1,i=e.length;n<i;n++){let r=e[n].distance;if(e[n].object.visible&&(r-=r*e[n].hysteresis),t<r)break}return e[n-1].object}return null}raycast(t,e){if(this.levels.length>0){xo.setFromMatrixPosition(this.matrixWorld);let i=t.ray.origin.distanceTo(xo);this.getObjectForDistance(i).raycast(t,e)}}update(t){let e=this.levels;if(e.length>1){xo.setFromMatrixPosition(t.matrixWorld),Ad.setFromMatrixPosition(this.matrixWorld);let n=xo.distanceTo(Ad)/t.zoom;e[0].object.visible=!0;let i,r;for(i=1,r=e.length;i<r;i++){let o=e[i].distance;if(e[i].object.visible&&(o-=o*e[i].hysteresis),n>=o)e[i-1].object.visible=!1,e[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)e[i].object.visible=!1}}toJSON(t){let e=super.toJSON(t);this.autoUpdate===!1&&(e.object.autoUpdate=!1),e.object.levels=[];let n=this.levels;for(let i=0,r=n.length;i<r;i++){let o=n[i];e.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return e}},Td=new T,Cd=new $t,Rd=new $t,Fv=new T,Id=new Dt,vo=new T,yl=new be,Pd=new Dt,Ml=new ri,Ua=class extends pe{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Bl,this.bindMatrix=new Dt,this.bindMatrixInverse=new Dt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ae),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,vo),this.boundingBox.expandByPoint(vo)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new be),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,vo),this.boundingSphere.expandByPoint(vo)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yl.copy(this.boundingSphere),yl.applyMatrix4(i),t.ray.intersectsSphere(yl)!==!1&&(Pd.copy(i).invert(),Ml.copy(t.ray).applyMatrix4(Pd),!(this.boundingBox!==null&&Ml.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Ml)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new $t,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Bl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Xf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,i=this.geometry;Cd.fromBufferAttribute(i.attributes.skinIndex,t),Rd.fromBufferAttribute(i.attributes.skinWeight,t),Td.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){let o=Rd.getComponent(r);if(o!==0){let a=Cd.getComponent(r);Id.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Fv.copy(Td).applyMatrix4(Id),o)}}return e.applyMatrix4(this.bindMatrixInverse)}},br=class extends jt{constructor(){super(),this.isBone=!0,this.type="Bone"}},nn=class extends _e{constructor(t=null,e=1,n=1,i,r,o,a,c,l=we,h=we,u,d){super(null,o,a,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ld=new Dt,Ov=new Dt,Da=class s{constructor(t=[],e=[]){this.uuid=Ye(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Dt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new Dt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=t.length;r<o;r++){let a=t[r]?t[r].matrixWorld:Ov;Ld.multiplyMatrices(a,e[r]),Ld.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new nn(e,t,t,Oe,Ge);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){let r=t.bones[n],o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new br),this.bones.push(o),this.boneInverses.push(new Dt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){let o=e[i];t.bones.push(o.uuid);let a=n[i];t.boneInverses.push(a.toArray())}return t}},Wn=class extends Qt{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ds=new Dt,Ud=new Dt,yo=[],Dd=new Ae,Bv=new Dt,Hs=new pe,Gs=new be,Na=class extends pe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Wn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Bv)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ae),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ds),Dd.copy(t.boundingBox).applyMatrix4(ds),this.boundingBox.union(Dd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new be),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ds),Gs.copy(t.boundingSphere).applyMatrix4(ds),this.boundingSphere.union(Gs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Hs.geometry=this.geometry,Hs.material=this.material,Hs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gs.copy(this.boundingSphere),Gs.applyMatrix4(n),t.ray.intersectsSphere(Gs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ds),Ud.multiplyMatrices(n,ds),Hs.matrixWorld=Ud,Hs.raycast(t,yo);for(let o=0,a=yo.length;o<a;o++){let c=yo[o];c.instanceId=r,c.object=this,e.push(c)}yo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Wn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new nn(new Float32Array(i*this.count),i,this.count,zc,Ge));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};function Sl(s,t){return s-t}function zv(s,t){return s.z-t.z}function kv(s,t){return t.z-s.z}var rh=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,n,i){let r=this.pool,o=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let a=r[this.index];o.push(a),this.index++,a.start=t,a.count=e,a.z=n,a.index=i}reset(){this.list.length=0,this.index=0}},ke=new Dt,Vv=new ut(1,1,1),bl=new Oi,Mo=new Ae,gi=new be,Ws=new T,Nd=new T,Hv=new T,El=new rh,Pe=new pe,So=[];function Gv(s,t,e=0){let n=t.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==t.array.constructor){let i=s.count;for(let r=0;r<i;r++)for(let o=0;o<n;o++)t.setComponent(r+e,o,s.getComponent(r,o))}else t.array.set(s.array,e*n);t.needsUpdate=!0}function _i(s,t){if(s.constructor!==t.constructor){let e=Math.min(s.length,t.length);for(let n=0;n<e;n++)t[n]=s[n]}else{let e=Math.min(s.length,t.length);t.set(new s.constructor(s.buffer,0,e))}}var Fa=class extends pe{get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}constructor(t,e,n=e*2,i){super(new zt,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=t,this._maxVertexCount=e,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let t=Math.sqrt(this._maxInstanceCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4),n=new nn(e,t,t,Oe,Ge);this._matricesTexture=n}_initIndirectTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);let e=new Uint32Array(t*t),n=new nn(e,t,t,Wr,Gn);this._indirectTexture=n}_initColorsTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);let e=new Float32Array(t*t*4).fill(1),n=new nn(e,t,t,Oe,Ge);n.colorSpace=Yt.workingColorSpace,this._colorsTexture=n}_initializeGeometry(t){let e=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(let r in t.attributes){let o=t.getAttribute(r),{array:a,itemSize:c,normalized:l}=o,h=new a.constructor(n*c),u=new Qt(h,c,l);e.setAttribute(r,u)}if(t.getIndex()!==null){let r=n>65535?new Uint32Array(i):new Uint16Array(i);e.setIndex(new Qt(r,1))}this._geometryInitialized=!0}}_validateGeometry(t){let e=this.geometry;if(!!t.getIndex()!=!!e.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(let n in e.attributes){if(!t.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);let i=t.getAttribute(n),r=e.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ae);let t=this.boundingBox,e=this._instanceInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;let r=e[n].geometryIndex;this.getMatrixAt(n,ke),this.getBoundingBoxAt(r,Mo).applyMatrix4(ke),t.union(Mo)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new be);let t=this.boundingSphere,e=this._instanceInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;let r=e[n].geometryIndex;this.getMatrixAt(n,ke),this.getBoundingSphereAt(r,gi).applyMatrix4(ke),t.union(gi)}}addInstance(t){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("BatchedMesh: Maximum item count reached.");let n={visible:!0,active:!0,geometryIndex:t},i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Sl),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));let r=this._matricesTexture;ke.identity().toArray(r.image.data,i*16),r.needsUpdate=!0;let o=this._colorsTexture;return o&&(Vv.toArray(o.image.data,i*4),o.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(t,e=-1,n=-1){this._initializeGeometry(t),this._validateGeometry(t);let i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=e===-1?t.getAttribute("position").count:e;let o=t.getIndex();if(o!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?o.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");let c;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Sl),c=this._availableGeometryIds.shift(),r[c]=i):(c=this._geometryCount,this._geometryCount++,r.push(i)),this.setGeometryAt(c,t),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,c}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);let n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),o=e.getIndex(),a=this._geometryInfo[t];if(i&&o.count>a.reservedIndexCount||e.attributes.position.count>a.reservedVertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");let c=a.vertexStart,l=a.reservedVertexCount;a.vertexCount=e.getAttribute("position").count;for(let h in n.attributes){let u=e.getAttribute(h),d=n.getAttribute(h);Gv(u,d,c);let f=u.itemSize;for(let m=u.count,_=l;m<_;m++){let g=c+m;for(let p=0;p<f;p++)d.setComponent(g,p,0)}d.needsUpdate=!0,d.addUpdateRange(c*f,l*f)}if(i){let h=a.indexStart,u=a.reservedIndexCount;a.indexCount=e.getIndex().count;for(let d=0;d<o.count;d++)r.setX(h+d,c+o.getX(d));for(let d=o.count,f=u;d<f;d++)r.setX(h+d,c);r.needsUpdate=!0,r.addUpdateRange(h,a.reservedIndexCount)}return a.start=i?a.indexStart:a.vertexStart,a.count=i?a.indexCount:a.vertexCount,a.boundingBox=null,e.boundingBox!==null&&(a.boundingBox=e.boundingBox.clone()),a.boundingSphere=null,e.boundingSphere!==null&&(a.boundingSphere=e.boundingSphere.clone()),this._visibilityChanged=!0,t}deleteGeometry(t){let e=this._geometryInfo;if(t>=e.length||e[t].active===!1)return this;let n=this._instanceInfo;for(let i=0,r=n.length;i<r;i++)n[i].geometryIndex===t&&this.deleteInstance(i);return e[t].active=!1,this._availableGeometryIds.push(t),this._visibilityChanged=!0,this}deleteInstance(t){let e=this._instanceInfo;return t>=e.length||e[t].active===!1?this:(e[t].active=!1,this._availableInstanceIds.push(t),this._visibilityChanged=!0,this)}optimize(){let t=0,e=0,n=this._geometryInfo,i=n.map((o,a)=>a).sort((o,a)=>n[o].vertexStart-n[a].vertexStart),r=this.geometry;for(let o=0,a=n.length;o<a;o++){let c=i[o],l=n[c];if(l.active!==!1){if(r.index!==null){if(l.indexStart!==e){let{indexStart:h,vertexStart:u,reservedIndexCount:d}=l,f=r.index,m=f.array,_=t-u;for(let g=h;g<h+d;g++)m[g]=m[g]+_;f.array.copyWithin(e,h,h+d),f.addUpdateRange(e,d),l.indexStart=e}e+=l.reservedIndexCount}if(l.vertexStart!==t){let{vertexStart:h,reservedVertexCount:u}=l,d=r.attributes;for(let f in d){let m=d[f],{array:_,itemSize:g}=m;_.copyWithin(t*g,h*g,(h+u)*g),m.addUpdateRange(t*g,u*g)}l.vertexStart=t}t+=l.reservedVertexCount,l.start=r.index?l.indexStart:l.vertexStart,this._nextIndexStart=r.index?l.indexStart+l.reservedIndexCount:0,this._nextVertexStart=l.vertexStart+l.reservedVertexCount}}return this}getBoundingBoxAt(t,e){if(t>=this._geometryCount)return null;let n=this.geometry,i=this._geometryInfo[t];if(i.boundingBox===null){let r=new Ae,o=n.index,a=n.attributes.position;for(let c=i.start,l=i.start+i.count;c<l;c++){let h=c;o&&(h=o.getX(h)),r.expandByPoint(Ws.fromBufferAttribute(a,h))}i.boundingBox=r}return e.copy(i.boundingBox),e}getBoundingSphereAt(t,e){if(t>=this._geometryCount)return null;let n=this.geometry,i=this._geometryInfo[t];if(i.boundingSphere===null){let r=new be;this.getBoundingBoxAt(t,Mo),Mo.getCenter(r.center);let o=n.index,a=n.attributes.position,c=0;for(let l=i.start,h=i.start+i.count;l<h;l++){let u=l;o&&(u=o.getX(u)),Ws.fromBufferAttribute(a,u),c=Math.max(c,r.center.distanceToSquared(Ws))}r.radius=Math.sqrt(c),i.boundingSphere=r}return e.copy(i.boundingSphere),e}setMatrixAt(t,e){let n=this._instanceInfo,i=this._matricesTexture,r=this._matricesTexture.image.data;return t>=n.length||n[t].active===!1?this:(e.toArray(r,t*16),i.needsUpdate=!0,this)}getMatrixAt(t,e){let n=this._instanceInfo,i=this._matricesTexture.image.data;return t>=n.length||n[t].active===!1?null:e.fromArray(i,t*16)}setColorAt(t,e){this._colorsTexture===null&&this._initColorsTexture();let n=this._colorsTexture,i=this._colorsTexture.image.data,r=this._instanceInfo;return t>=r.length||r[t].active===!1?this:(e.toArray(i,t*4),n.needsUpdate=!0,this)}getColorAt(t,e){let n=this._colorsTexture.image.data,i=this._instanceInfo;return t>=i.length||i[t].active===!1?null:e.fromArray(n,t*4)}setVisibleAt(t,e){let n=this._instanceInfo;return t>=n.length||n[t].active===!1||n[t].visible===e?this:(n[t].visible=e,this._visibilityChanged=!0,this)}getVisibleAt(t){let e=this._instanceInfo;return t>=e.length||e[t].active===!1?!1:e[t].visible}setGeometryIdAt(t,e){let n=this._instanceInfo,i=this._geometryInfo;return t>=n.length||n[t].active===!1||e>=i.length||i[e].active===!1?null:(n[t].geometryIndex=e,this)}getGeometryIdAt(t){let e=this._instanceInfo;return t>=e.length||e[t].active===!1?-1:e[t].geometryIndex}getGeometryRangeAt(t,e={}){if(t<0||t>=this._geometryCount)return null;let n=this._geometryInfo[t];return e.vertexStart=n.vertexStart,e.vertexCount=n.vertexCount,e.reservedVertexCount=n.reservedVertexCount,e.indexStart=n.indexStart,e.indexCount=n.indexCount,e.reservedIndexCount=n.reservedIndexCount,e.start=n.start,e.count=n.count,e}setInstanceCount(t){let e=this._availableInstanceIds,n=this._instanceInfo;for(e.sort(Sl);e[e.length-1]===n.length;)n.pop(),e.pop();if(t<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${t} are being used. Cannot shrink instance count.`);let i=new Int32Array(t),r=new Int32Array(t);_i(this._multiDrawCounts,i),_i(this._multiDrawStarts,r),this._multiDrawCounts=i,this._multiDrawStarts=r,this._maxInstanceCount=t;let o=this._indirectTexture,a=this._matricesTexture,c=this._colorsTexture;o.dispose(),this._initIndirectTexture(),_i(o.image.data,this._indirectTexture.image.data),a.dispose(),this._initMatricesTexture(),_i(a.image.data,this._matricesTexture.image.data),c&&(c.dispose(),this._initColorsTexture(),_i(c.image.data,this._colorsTexture.image.data))}setGeometrySize(t,e){let n=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...n.map(a=>a.vertexStart+a.reservedVertexCount))>t)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${e}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(c=>c.indexStart+c.reservedIndexCount))>e)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${e}. Cannot shrink further.`);let r=this.geometry;r.dispose(),this._maxVertexCount=t,this._maxIndexCount=e,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new zt,this._initializeGeometry(r));let o=this.geometry;r.index&&_i(r.index.array,o.index.array);for(let a in r.attributes)_i(r.attributes[a].array,o.attributes[a].array)}raycast(t,e){let n=this._instanceInfo,i=this._geometryInfo,r=this.matrixWorld,o=this.geometry;Pe.material=this.material,Pe.geometry.index=o.index,Pe.geometry.attributes=o.attributes,Pe.geometry.boundingBox===null&&(Pe.geometry.boundingBox=new Ae),Pe.geometry.boundingSphere===null&&(Pe.geometry.boundingSphere=new be);for(let a=0,c=n.length;a<c;a++){if(!n[a].visible||!n[a].active)continue;let l=n[a].geometryIndex,h=i[l];Pe.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(a,Pe.matrixWorld).premultiply(r),this.getBoundingBoxAt(l,Pe.geometry.boundingBox),this.getBoundingSphereAt(l,Pe.geometry.boundingSphere),Pe.raycast(t,So);for(let u=0,d=So.length;u<d;u++){let f=So[u];f.object=this,f.batchId=a,e.push(f)}So.length=0}Pe.material=null,Pe.geometry.index=null,Pe.geometry.attributes={},Pe.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._geometryInfo=t._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox!==null?e.boundingBox.clone():null,boundingSphere:e.boundingSphere!==null?e.boundingSphere.clone():null})),this._instanceInfo=t._instanceInfo.map(e=>({...e})),this._maxInstanceCount=t._maxInstanceCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._geometryCount=t._geometryCount,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=t._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(t,e,n,i,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let o=i.getIndex(),a=o===null?1:o.array.BYTES_PER_ELEMENT,c=this._instanceInfo,l=this._multiDrawStarts,h=this._multiDrawCounts,u=this._geometryInfo,d=this.perObjectFrustumCulled,f=this._indirectTexture,m=f.image.data;d&&(ke.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),bl.setFromProjectionMatrix(ke,t.coordinateSystem));let _=0;if(this.sortObjects){ke.copy(this.matrixWorld).invert(),Ws.setFromMatrixPosition(n.matrixWorld).applyMatrix4(ke),Nd.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(ke);for(let y=0,v=c.length;y<v;y++)if(c[y].visible&&c[y].active){let x=c[y].geometryIndex;this.getMatrixAt(y,ke),this.getBoundingSphereAt(x,gi).applyMatrix4(ke);let P=!1;if(d&&(P=!bl.intersectsSphere(gi)),!P){let w=u[x],C=Hv.subVectors(gi.center,Ws).dot(Nd);El.push(w.start,w.count,C,y)}}let g=El.list,p=this.customSort;p===null?g.sort(r.transparent?kv:zv):p.call(this,g,n);for(let y=0,v=g.length;y<v;y++){let x=g[y];l[_]=x.start*a,h[_]=x.count,m[_]=x.index,_++}El.reset()}else for(let g=0,p=c.length;g<p;g++)if(c[g].visible&&c[g].active){let y=c[g].geometryIndex,v=!1;if(d&&(this.getMatrixAt(g,ke),this.getBoundingSphereAt(y,gi).applyMatrix4(ke),v=!bl.intersectsSphere(gi)),!v){let x=u[y];l[_]=x.start*a,h[_]=x.count,m[_]=g,_++}}f.needsUpdate=!0,this._multiDrawCount=_,this._visibilityChanged=!1}onBeforeShadow(t,e,n,i,r,o){this.onBeforeRender(t,null,i,r,o)}},Te=class extends Ee{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Oa=new T,Ba=new T,Fd=new Dt,Xs=new ri,bo=new be,wl=new T,Od=new T,bn=class extends jt{constructor(t=new zt,e=new Te){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Oa.fromBufferAttribute(e,i-1),Ba.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Oa.distanceTo(Ba);t.setAttribute("lineDistance",new vt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),bo.copy(n.boundingSphere),bo.applyMatrix4(i),bo.radius+=r,t.ray.intersectsSphere(bo)===!1)return;Fd.copy(i).invert(),Xs.copy(t.ray).applyMatrix4(Fd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=l){let p=h.getX(_),y=h.getX(_+1),v=Eo(this,t,Xs,c,p,y);v&&e.push(v)}if(this.isLineLoop){let _=h.getX(m-1),g=h.getX(f),p=Eo(this,t,Xs,c,_,g);p&&e.push(p)}}else{let f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=l){let p=Eo(this,t,Xs,c,_,_+1);p&&e.push(p)}if(this.isLineLoop){let _=Eo(this,t,Xs,c,m-1,f);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Eo(s,t,e,n,i,r){let o=s.geometry.attributes.position;if(Oa.fromBufferAttribute(o,i),Ba.fromBufferAttribute(o,r),e.distanceSqToSegment(Oa,Ba,wl,Od)>n)return;wl.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(wl);if(!(c<t.near||c>t.far))return{distance:c,point:Od.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}var Bd=new T,zd=new T,rn=class extends bn{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Bd.fromBufferAttribute(e,i),zd.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Bd.distanceTo(zd);t.setAttribute("lineDistance",new vt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},za=class extends bn{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Er=class extends Ee{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},kd=new Dt,oh=new ri,wo=new be,Ao=new T,ka=class extends jt{constructor(t=new zt,e=new Er){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wo.copy(n.boundingSphere),wo.applyMatrix4(i),wo.radius+=r,t.ray.intersectsSphere(wo)===!1)return;kd.copy(i).invert(),oh.copy(t.ray).applyMatrix4(kd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let m=d,_=f;m<_;m++){let g=l.getX(m);Ao.fromBufferAttribute(u,g),Vd(Ao,g,c,i,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,_=f;m<_;m++)Ao.fromBufferAttribute(u,m),Vd(Ao,m,c,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Vd(s,t,e,n,i,r,o){let a=oh.distanceSqToPoint(s);if(a<e){let c=new T;oh.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ah=class extends _e{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:ve,this.magFilter=r!==void 0?r:ve,this.generateMipmaps=!1;let h=this;function u(){h.needsUpdate=!0,t.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){let t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}},ch=class extends _e{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=we,this.minFilter=we,this.generateMipmaps=!1,this.needsUpdate=!0}},Ts=class extends _e{constructor(t,e,n,i,r,o,a,c,l,h,u,d){super(null,o,a,c,l,h,i,r,u,d),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}},lh=class extends Ts{constructor(t,e,n,i,r,o){super(t,e,n,r,o),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=en,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},hh=class extends Ts{constructor(t,e,n){super(void 0,t[0].width,t[0].height,e,n,Hn),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=t}},uh=class extends _e{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ke=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);let h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),c=e||(o.isVector2?new $:new T);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new T,i=[],r=[],o=[],a=new T,c=new Dt;for(let f=0;f<=t;f++){let m=f/t;i[f]=this.getTangentAt(m,new T)}r[0]=new T,o[0]=new T;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(fe(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(fe(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(i[m],f*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Cs=class extends Ke{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new $){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Va=class extends Cs{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Su(){let s=0,t=0,e=0,n=0;function i(r,o,a,c){s=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var To=new T,Al=new Su,Tl=new Su,Cl=new Su,Ha=class extends Ke{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new T){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(To.subVectors(i[0],i[1]).add(i[0]),l=To);let u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(To.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=To),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),Al.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,_,g),Tl.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,_,g),Cl.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(Al.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Tl.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Cl.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Al.calc(c),Tl.calc(c),Cl.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new T().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Hd(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*s+e}function Wv(s,t){let e=1-s;return e*e*t}function Xv(s,t){return 2*(1-s)*s*t}function qv(s,t){return s*s*t}function sr(s,t,e,n){return Wv(s,t)+Xv(s,e)+qv(s,n)}function Yv(s,t){let e=1-s;return e*e*e*t}function Zv(s,t){let e=1-s;return 3*e*e*s*t}function Jv(s,t){return 3*(1-s)*s*s*t}function $v(s,t){return s*s*s*t}function rr(s,t,e,n,i){return Yv(s,t)+Zv(s,e)+Jv(s,n)+$v(s,i)}var wr=class extends Ke{constructor(t=new $,e=new $,n=new $,i=new $){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new $){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(rr(t,i.x,r.x,o.x,a.x),rr(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ga=class extends Ke{constructor(t=new T,e=new T,n=new T,i=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new T){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(rr(t,i.x,r.x,o.x,a.x),rr(t,i.y,r.y,o.y,a.y),rr(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ar=class extends Ke{constructor(t=new $,e=new $){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new $){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new $){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Wa=class extends Ke{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Tr=class extends Ke{constructor(t=new $,e=new $,n=new $){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new $){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(sr(t,i.x,r.x,o.x),sr(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Cr=class extends Ke{constructor(t=new T,e=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new T){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(sr(t,i.x,r.x,o.x),sr(t,i.y,r.y,o.y),sr(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Rr=class extends Ke{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new $){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Hd(a,c.x,l.x,h.x,u.x),Hd(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new $().fromArray(i))}return this}},Xa=Object.freeze({__proto__:null,ArcCurve:Va,CatmullRomCurve3:Ha,CubicBezierCurve:wr,CubicBezierCurve3:Ga,EllipseCurve:Cs,LineCurve:Ar,LineCurve3:Wa,QuadraticBezierCurve:Tr,QuadraticBezierCurve3:Cr,SplineCurve:Rr}),qa=class extends Ke{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Xa[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Xa[i.type]().fromJSON(i))}return this}},zi=class extends qa{constructor(t){super(),this.type="Path",this.currentPoint=new $,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ar(this.currentPoint.clone(),new $(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new Tr(this.currentPoint.clone(),new $(t,e),new $(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new wr(this.currentPoint.clone(),new $(t,e),new $(n,i),new $(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Rr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,r,o,a,c),this}absellipse(t,e,n,i,r,o,a,c){let l=new Cs(t,e,n,i,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ir=class s extends zt{constructor(t=[new $(0,-.5),new $(.5,0),new $(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=fe(i,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/e,u=new T,d=new $,f=new T,m=new T,_=new T,g=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:g=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-g,f.z=p*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:g=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(m)}for(let y=0;y<=e;y++){let v=n+y*h*i,x=Math.sin(v),P=Math.cos(v);for(let w=0;w<=t.length-1;w++){u.x=t[w].x*x,u.y=t[w].y,u.z=t[w].x*P,o.push(u.x,u.y,u.z),d.x=y/e,d.y=w/(t.length-1),a.push(d.x,d.y);let C=c[3*w+0]*x,R=c[3*w+1],b=c[3*w+0]*P;l.push(C,R,b)}}for(let y=0;y<e;y++)for(let v=0;v<t.length-1;v++){let x=v+y*t.length,P=x,w=x+t.length,C=x+t.length+1,R=x+1;r.push(P,w,R),r.push(C,R,w)}this.setIndex(r),this.setAttribute("position",new vt(o,3)),this.setAttribute("uv",new vt(a,2)),this.setAttribute("normal",new vt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}},Ya=class s extends Ir{constructor(t=1,e=1,n=4,i=8){let r=new zi;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new s(t.radius,t.length,t.capSegments,t.radialSegments)}},Za=class s extends zt{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new T,h=new $;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*i;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new vt(o,3)),this.setAttribute("normal",new vt(a,3)),this.setAttribute("uv",new vt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Rs=class s extends zt{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,_=[],g=n/2,p=0;y(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new vt(u,3)),this.setAttribute("normal",new vt(d,3)),this.setAttribute("uv",new vt(f,2));function y(){let x=new T,P=new T,w=0,C=(e-t)/n;for(let R=0;R<=r;R++){let b=[],M=R/r,L=M*(e-t)+t;for(let k=0;k<=i;k++){let O=k/i,V=O*c+a,Z=Math.sin(V),H=Math.cos(V);P.x=L*Z,P.y=-M*n+g,P.z=L*H,u.push(P.x,P.y,P.z),x.set(Z,C,H).normalize(),d.push(x.x,x.y,x.z),f.push(O,1-M),b.push(m++)}_.push(b)}for(let R=0;R<i;R++)for(let b=0;b<r;b++){let M=_[b][R],L=_[b+1][R],k=_[b+1][R+1],O=_[b][R+1];(t>0||b!==0)&&(h.push(M,L,O),w+=3),(e>0||b!==r-1)&&(h.push(L,k,O),w+=3)}l.addGroup(p,w,0),p+=w}function v(x){let P=m,w=new $,C=new T,R=0,b=x===!0?t:e,M=x===!0?1:-1;for(let k=1;k<=i;k++)u.push(0,g*M,0),d.push(0,M,0),f.push(.5,.5),m++;let L=m;for(let k=0;k<=i;k++){let V=k/i*c+a,Z=Math.cos(V),H=Math.sin(V);C.x=b*H,C.y=g*M,C.z=b*Z,u.push(C.x,C.y,C.z),d.push(0,M,0),w.x=Z*.5+.5,w.y=H*.5*M+.5,f.push(w.x,w.y),m++}for(let k=0;k<i;k++){let O=P+k,V=L+k;x===!0?h.push(V,V+1,O):h.push(V+1,V,O),R+=3}l.addGroup(p,R,x===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ja=class s extends Rs{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ai=class s extends zt{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new vt(r,3)),this.setAttribute("normal",new vt(r.slice(),3)),this.setAttribute("uv",new vt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let v=new T,x=new T,P=new T;for(let w=0;w<e.length;w+=3)f(e[w+0],v),f(e[w+1],x),f(e[w+2],P),c(v,x,P,y)}function c(y,v,x,P){let w=P+1,C=[];for(let R=0;R<=w;R++){C[R]=[];let b=y.clone().lerp(x,R/w),M=v.clone().lerp(x,R/w),L=w-R;for(let k=0;k<=L;k++)k===0&&R===w?C[R][k]=b:C[R][k]=b.clone().lerp(M,k/L)}for(let R=0;R<w;R++)for(let b=0;b<2*(w-R)-1;b++){let M=Math.floor(b/2);b%2===0?(d(C[R][M+1]),d(C[R+1][M]),d(C[R][M])):(d(C[R][M+1]),d(C[R+1][M+1]),d(C[R+1][M]))}}function l(y){let v=new T;for(let x=0;x<r.length;x+=3)v.x=r[x+0],v.y=r[x+1],v.z=r[x+2],v.normalize().multiplyScalar(y),r[x+0]=v.x,r[x+1]=v.y,r[x+2]=v.z}function h(){let y=new T;for(let v=0;v<r.length;v+=3){y.x=r[v+0],y.y=r[v+1],y.z=r[v+2];let x=g(y)/2/Math.PI+.5,P=p(y)/Math.PI+.5;o.push(x,1-P)}m(),u()}function u(){for(let y=0;y<o.length;y+=6){let v=o[y+0],x=o[y+2],P=o[y+4],w=Math.max(v,x,P),C=Math.min(v,x,P);w>.9&&C<.1&&(v<.2&&(o[y+0]+=1),x<.2&&(o[y+2]+=1),P<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,v){let x=y*3;v.x=t[x+0],v.y=t[x+1],v.z=t[x+2]}function m(){let y=new T,v=new T,x=new T,P=new T,w=new $,C=new $,R=new $;for(let b=0,M=0;b<r.length;b+=9,M+=6){y.set(r[b+0],r[b+1],r[b+2]),v.set(r[b+3],r[b+4],r[b+5]),x.set(r[b+6],r[b+7],r[b+8]),w.set(o[M+0],o[M+1]),C.set(o[M+2],o[M+3]),R.set(o[M+4],o[M+5]),P.copy(y).add(v).add(x).divideScalar(3);let L=g(P);_(w,M+0,y,L),_(C,M+2,v,L),_(R,M+4,x,L)}}function _(y,v,x,P){P<0&&y.x===1&&(o[v]=y.x-1),x.x===0&&x.z===0&&(o[v]=P/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}},$a=class s extends ai{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},Co=new T,Ro=new T,Rl=new T,Io=new _n,Ka=class extends zt{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let i=Math.pow(10,4),r=Math.cos(Pi*e),o=t.getIndex(),a=t.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let m=0;m<c;m+=3){o?(l[0]=o.getX(m),l[1]=o.getX(m+1),l[2]=o.getX(m+2)):(l[0]=m,l[1]=m+1,l[2]=m+2);let{a:_,b:g,c:p}=Io;if(_.fromBufferAttribute(a,l[0]),g.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),Io.getNormal(Rl),u[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,u[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let y=0;y<3;y++){let v=(y+1)%3,x=u[y],P=u[v],w=Io[h[y]],C=Io[h[v]],R=`${x}_${P}`,b=`${P}_${x}`;b in d&&d[b]?(Rl.dot(d[b].normal)<=r&&(f.push(w.x,w.y,w.z),f.push(C.x,C.y,C.z)),d[b]=null):R in d||(d[R]={index0:l[y],index1:l[v],normal:Rl.clone()})}}for(let m in d)if(d[m]){let{index0:_,index1:g}=d[m];Co.fromBufferAttribute(a,_),Ro.fromBufferAttribute(a,g),f.push(Co.x,Co.y,Co.z),f.push(Ro.x,Ro.y,Ro.z)}this.setAttribute("position",new vt(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},kn=class extends zi{constructor(t){super(t),this.uuid=Ye(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new zi().fromJSON(i))}return this}},Kv={triangulate:function(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=yp(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=ny(s,t,r,e)),s.length>80*e){a=l=s[0],c=h=s[1];for(let m=e;m<i;m+=e)u=s[m],d=s[m+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return Pr(r,o,e,a,c,f,0),o}};function yp(s,t,e,n,i){let r,o;if(i===fy(s,t,e,n)>0)for(r=t;r<e;r+=n)o=Gd(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=Gd(r,s[r],s[r+1],o);return o&&Wc(o,o.next)&&(Ur(o),o=o.next),o}function ki(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Wc(e,e.next)||he(e.prev,e,e.next)===0)){if(Ur(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Pr(s,t,e,n,i,r,o){if(!s)return;!o&&r&&ay(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?jv(s,n,i,r):Qv(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(l.i/e|0),Ur(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=ty(ki(s),t,e),Pr(s,t,e,n,i,r,2)):o===2&&ey(s,t,e,n,i,r):Pr(ki(s),t,e,n,i,r,1);break}}}function Qv(s){let t=s.prev,e=s,n=s.next;if(he(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=i>r?i>o?i:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l,m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&gs(i,a,r,c,o,l,m.x,m.y)&&he(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function jv(s,t,e,n){let i=s.prev,r=s,o=s.next;if(he(i,r,o)>=0)return!1;let a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,m=h<u?h<d?h:d:u<d?u:d,_=a>c?a>l?a:l:c>l?c:l,g=h>u?h>d?h:d:u>d?u:d,p=dh(f,m,t,e,n),y=dh(_,g,t,e,n),v=s.prevZ,x=s.nextZ;for(;v&&v.z>=p&&x&&x.z<=y;){if(v.x>=f&&v.x<=_&&v.y>=m&&v.y<=g&&v!==i&&v!==o&&gs(a,h,c,u,l,d,v.x,v.y)&&he(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=f&&x.x<=_&&x.y>=m&&x.y<=g&&x!==i&&x!==o&&gs(a,h,c,u,l,d,x.x,x.y)&&he(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=_&&v.y>=m&&v.y<=g&&v!==i&&v!==o&&gs(a,h,c,u,l,d,v.x,v.y)&&he(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=y;){if(x.x>=f&&x.x<=_&&x.y>=m&&x.y<=g&&x!==i&&x!==o&&gs(a,h,c,u,l,d,x.x,x.y)&&he(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function ty(s,t,e){let n=s;do{let i=n.prev,r=n.next.next;!Wc(i,r)&&Mp(i,n,n.next,r)&&Lr(i,r)&&Lr(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Ur(n),Ur(n.next),n=s=r),n=n.next}while(n!==s);return ki(n)}function ey(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&hy(o,a)){let c=Sp(o,a);o=ki(o,o.next),c=ki(c,c.next),Pr(o,t,e,n,i,r,0),Pr(c,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function ny(s,t,e,n){let i=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:s.length,l=yp(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(ly(l));for(i.sort(iy),r=0;r<i.length;r++)e=sy(i[r],e);return e}function iy(s,t){return s.x-t.x}function sy(s,t){let e=ry(s,t);if(!e)return t;let n=Sp(e,s);return ki(n,n.next),ki(e,e.next)}function ry(s,t){let e=t,n=-1/0,i,r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===r))return i}e=e.next}while(e!==t);if(!i)return null;let a=i,c=i.x,l=i.y,h=1/0,u;e=i;do r>=e.x&&e.x>=c&&r!==e.x&&gs(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Lr(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&oy(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function oy(s,t){return he(s.prev,s,t.prev)<0&&he(t.next,s,s.next)<0}function ay(s,t,e,n){let i=s;do i.z===0&&(i.z=dh(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,cy(i)}function cy(s){let t,e,n,i,r,o,a,c,l=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,l*=2}while(o>1);return s}function dh(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function ly(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function gs(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function hy(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!uy(s,t)&&(Lr(s,t)&&Lr(t,s)&&dy(s,t)&&(he(s.prev,s,t.prev)||he(s,t.prev,t))||Wc(s,t)&&he(s.prev,s,s.next)>0&&he(t.prev,t,t.next)>0)}function he(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Wc(s,t){return s.x===t.x&&s.y===t.y}function Mp(s,t,e,n){let i=Lo(he(s,t,e)),r=Lo(he(s,t,n)),o=Lo(he(e,n,s)),a=Lo(he(e,n,t));return!!(i!==r&&o!==a||i===0&&Po(s,e,t)||r===0&&Po(s,n,t)||o===0&&Po(e,s,n)||a===0&&Po(e,t,n))}function Po(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Lo(s){return s>0?1:s<0?-1:0}function uy(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Mp(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Lr(s,t){return he(s.prev,s,s.next)<0?he(s,t,s.next)>=0&&he(s,s.prev,t)>=0:he(s,t,s.prev)<0||he(s,s.next,t)<0}function dy(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Sp(s,t){let e=new fh(s.i,s.x,s.y),n=new fh(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Gd(s,t,e,n){let i=new fh(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ur(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function fh(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function fy(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var yn=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];Wd(t),Xd(n,t);let o=t.length;e.forEach(Wd);for(let c=0;c<e.length;c++)i.push(o),o+=e[c].length,Xd(n,e[c]);let a=Kv.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Wd(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Xd(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var Qa=class s extends zt{constructor(t=new kn([new $(.5,.5),new $(-.5,.5),new $(-.5,-.5),new $(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new vt(i,3)),this.setAttribute("uv",new vt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:py,v,x=!1,P,w,C,R;p&&(v=p.getSpacedPoints(h),x=!0,d=!1,P=p.computeFrenetFrames(h,!1),w=new T,C=new T,R=new T),d||(g=0,f=0,m=0,_=0);let b=a.extractPoints(l),M=b.shape,L=b.holes;if(!yn.isClockWise(M)){M=M.reverse();for(let K=0,nt=L.length;K<nt;K++){let I=L[K];yn.isClockWise(I)&&(L[K]=I.reverse())}}let O=yn.triangulateShape(M,L),V=M;for(let K=0,nt=L.length;K<nt;K++){let I=L[K];M=M.concat(I)}function Z(K,nt,I){return nt||console.error("THREE.ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(nt,I)}let H=M.length,et=O.length;function G(K,nt,I){let Ct,j,xt,ot=K.x-nt.x,Pt=K.y-nt.y,gt=I.x-K.x,A=I.y-K.y,S=ot*ot+Pt*Pt,F=ot*A-Pt*gt;if(Math.abs(F)>Number.EPSILON){let X=Math.sqrt(S),Q=Math.sqrt(gt*gt+A*A),q=nt.x-Pt/X,Et=nt.y+ot/X,lt=I.x-A/Q,_t=I.y+gt/Q,qt=((lt-q)*A-(_t-Et)*gt)/(ot*A-Pt*gt);Ct=q+ot*qt-K.x,j=Et+Pt*qt-K.y;let tt=Ct*Ct+j*j;if(tt<=2)return new $(Ct,j);xt=Math.sqrt(tt/2)}else{let X=!1;ot>Number.EPSILON?gt>Number.EPSILON&&(X=!0):ot<-Number.EPSILON?gt<-Number.EPSILON&&(X=!0):Math.sign(Pt)===Math.sign(A)&&(X=!0),X?(Ct=-Pt,j=ot,xt=Math.sqrt(S)):(Ct=ot,j=Pt,xt=Math.sqrt(S/2))}return new $(Ct/xt,j/xt)}let at=[];for(let K=0,nt=V.length,I=nt-1,Ct=K+1;K<nt;K++,I++,Ct++)I===nt&&(I=0),Ct===nt&&(Ct=0),at[K]=G(V[K],V[I],V[Ct]);let mt=[],St,kt=at.concat();for(let K=0,nt=L.length;K<nt;K++){let I=L[K];St=[];for(let Ct=0,j=I.length,xt=j-1,ot=Ct+1;Ct<j;Ct++,xt++,ot++)xt===j&&(xt=0),ot===j&&(ot=0),St[Ct]=G(I[Ct],I[xt],I[ot]);mt.push(St),kt=kt.concat(St)}for(let K=0;K<g;K++){let nt=K/g,I=f*Math.cos(nt*Math.PI/2),Ct=m*Math.sin(nt*Math.PI/2)+_;for(let j=0,xt=V.length;j<xt;j++){let ot=Z(V[j],at[j],Ct);rt(ot.x,ot.y,-I)}for(let j=0,xt=L.length;j<xt;j++){let ot=L[j];St=mt[j];for(let Pt=0,gt=ot.length;Pt<gt;Pt++){let A=Z(ot[Pt],St[Pt],Ct);rt(A.x,A.y,-I)}}}let te=m+_;for(let K=0;K<H;K++){let nt=d?Z(M[K],kt[K],te):M[K];x?(C.copy(P.normals[0]).multiplyScalar(nt.x),w.copy(P.binormals[0]).multiplyScalar(nt.y),R.copy(v[0]).add(C).add(w),rt(R.x,R.y,R.z)):rt(nt.x,nt.y,0)}for(let K=1;K<=h;K++)for(let nt=0;nt<H;nt++){let I=d?Z(M[nt],kt[nt],te):M[nt];x?(C.copy(P.normals[K]).multiplyScalar(I.x),w.copy(P.binormals[K]).multiplyScalar(I.y),R.copy(v[K]).add(C).add(w),rt(R.x,R.y,R.z)):rt(I.x,I.y,u/h*K)}for(let K=g-1;K>=0;K--){let nt=K/g,I=f*Math.cos(nt*Math.PI/2),Ct=m*Math.sin(nt*Math.PI/2)+_;for(let j=0,xt=V.length;j<xt;j++){let ot=Z(V[j],at[j],Ct);rt(ot.x,ot.y,u+I)}for(let j=0,xt=L.length;j<xt;j++){let ot=L[j];St=mt[j];for(let Pt=0,gt=ot.length;Pt<gt;Pt++){let A=Z(ot[Pt],St[Pt],Ct);x?rt(A.x,A.y+v[h-1].y,v[h-1].x+I):rt(A.x,A.y,u+I)}}}Y(),it();function Y(){let K=i.length/3;if(d){let nt=0,I=H*nt;for(let Ct=0;Ct<et;Ct++){let j=O[Ct];It(j[2]+I,j[1]+I,j[0]+I)}nt=h+g*2,I=H*nt;for(let Ct=0;Ct<et;Ct++){let j=O[Ct];It(j[0]+I,j[1]+I,j[2]+I)}}else{for(let nt=0;nt<et;nt++){let I=O[nt];It(I[2],I[1],I[0])}for(let nt=0;nt<et;nt++){let I=O[nt];It(I[0]+H*h,I[1]+H*h,I[2]+H*h)}}n.addGroup(K,i.length/3-K,0)}function it(){let K=i.length/3,nt=0;bt(V,nt),nt+=V.length;for(let I=0,Ct=L.length;I<Ct;I++){let j=L[I];bt(j,nt),nt+=j.length}n.addGroup(K,i.length/3-K,1)}function bt(K,nt){let I=K.length;for(;--I>=0;){let Ct=I,j=I-1;j<0&&(j=K.length-1);for(let xt=0,ot=h+g*2;xt<ot;xt++){let Pt=H*xt,gt=H*(xt+1),A=nt+Ct+Pt,S=nt+j+Pt,F=nt+j+gt,X=nt+Ct+gt;Ft(A,S,F,X)}}}function rt(K,nt,I){c.push(K),c.push(nt),c.push(I)}function It(K,nt,I){Ut(K),Ut(nt),Ut(I);let Ct=i.length/3,j=y.generateTopUV(n,i,Ct-3,Ct-2,Ct-1);Jt(j[0]),Jt(j[1]),Jt(j[2])}function Ft(K,nt,I,Ct){Ut(K),Ut(nt),Ut(Ct),Ut(nt),Ut(I),Ut(Ct);let j=i.length/3,xt=y.generateSideWallUV(n,i,j-6,j-3,j-2,j-1);Jt(xt[0]),Jt(xt[1]),Jt(xt[3]),Jt(xt[1]),Jt(xt[2]),Jt(xt[3])}function Ut(K){i.push(c[K*3+0]),i.push(c[K*3+1]),i.push(c[K*3+2])}function Jt(K){r.push(K.x),r.push(K.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return my(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Xa[i.type]().fromJSON(i)),new s(n,t.options)}},py={generateTopUV:function(s,t,e,n,i){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[i*3],h=t[i*3+1];return[new $(r,o),new $(a,c),new $(l,h)]},generateSideWallUV:function(s,t,e,n,i,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],f=t[i*3+1],m=t[i*3+2],_=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new $(o,1-c),new $(l,1-u),new $(d,1-m),new $(_,1-p)]:[new $(a,1-c),new $(h,1-u),new $(f,1-m),new $(g,1-p)]}};function my(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ja=class s extends ai{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},Dr=class s extends ai{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},tc=class s extends zt{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],c=[],l=[],h=[],u=t,d=(e-t)/i,f=new T,m=new $;for(let _=0;_<=i;_++){for(let g=0;g<=n;g++){let p=r+g/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}u+=d}for(let _=0;_<i;_++){let g=_*(n+1);for(let p=0;p<n;p++){let y=p+g,v=y,x=y+n+1,P=y+n+2,w=y+1;a.push(v,x,w),a.push(x,P,w)}}this.setIndex(a),this.setAttribute("position",new vt(c,3)),this.setAttribute("normal",new vt(l,3)),this.setAttribute("uv",new vt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},ec=class s extends zt{constructor(t=new kn([new $(0,.5),new $(-.5,-.5),new $(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],i=[],r=[],o=[],a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new vt(i,3)),this.setAttribute("normal",new vt(r,3)),this.setAttribute("uv",new vt(o,2));function l(h){let u=i.length/3,d=h.extractPoints(e),f=d.shape,m=d.holes;yn.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){let y=m[g];yn.isClockWise(y)===!0&&(m[g]=y.reverse())}let _=yn.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){let y=m[g];f=f.concat(y)}for(let g=0,p=f.length;g<p;g++){let y=f[g];i.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let g=0,p=_.length;g<p;g++){let y=_[g],v=y[0]+u,x=y[1]+u,P=y[2]+u;n.push(v,x,P),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return gy(e,t)}static fromJSON(t,e){let n=[];for(let i=0,r=t.shapes.length;i<r;i++){let o=e[t.shapes[i]];n.push(o)}return new s(n,t.curveSegments)}};function gy(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){let i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}var Nr=class s extends zt{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new T,d=new T,f=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){let y=[],v=p/n,x=0;p===0&&o===0?x=.5/e:p===n&&c===Math.PI&&(x=-.5/e);for(let P=0;P<=e;P++){let w=P/e;u.x=-t*Math.cos(i+w*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(i+w*r)*Math.sin(o+v*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),g.push(w+x,1-v),y.push(l++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let v=h[p][y+1],x=h[p][y],P=h[p+1][y],w=h[p+1][y+1];(p!==0||o>0)&&f.push(v,x,w),(p!==n-1||c<Math.PI)&&f.push(x,P,w)}this.setIndex(f),this.setAttribute("position",new vt(m,3)),this.setAttribute("normal",new vt(_,3)),this.setAttribute("uv",new vt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},nc=class s extends ai{constructor(t=1,e=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},ic=class s extends zt{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],c=[],l=[],h=new T,u=new T,d=new T;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){let _=m/i*r,g=f/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(_),u.y=(t+e*Math.cos(g))*Math.sin(_),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(m/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){let _=(i+1)*f+m-1,g=(i+1)*(f-1)+m-1,p=(i+1)*(f-1)+m,y=(i+1)*f+m;o.push(_,g,y),o.push(g,p,y)}this.setIndex(o),this.setAttribute("position",new vt(a,3)),this.setAttribute("normal",new vt(c,3)),this.setAttribute("uv",new vt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},sc=class s extends zt{constructor(t=1,e=.4,n=64,i=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:r,q:o},n=Math.floor(n),i=Math.floor(i);let a=[],c=[],l=[],h=[],u=new T,d=new T,f=new T,m=new T,_=new T,g=new T,p=new T;for(let v=0;v<=n;++v){let x=v/n*r*Math.PI*2;y(x,r,o,t,f),y(x+.01,r,o,t,m),g.subVectors(m,f),p.addVectors(m,f),_.crossVectors(g,p),p.crossVectors(_,g),_.normalize(),p.normalize();for(let P=0;P<=i;++P){let w=P/i*Math.PI*2,C=-e*Math.cos(w),R=e*Math.sin(w);u.x=f.x+(C*p.x+R*_.x),u.y=f.y+(C*p.y+R*_.y),u.z=f.z+(C*p.z+R*_.z),c.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),l.push(d.x,d.y,d.z),h.push(v/n),h.push(P/i)}}for(let v=1;v<=n;v++)for(let x=1;x<=i;x++){let P=(i+1)*(v-1)+(x-1),w=(i+1)*v+(x-1),C=(i+1)*v+x,R=(i+1)*(v-1)+x;a.push(P,w,R),a.push(w,C,R)}this.setIndex(a),this.setAttribute("position",new vt(c,3)),this.setAttribute("normal",new vt(l,3)),this.setAttribute("uv",new vt(h,2));function y(v,x,P,w,C){let R=Math.cos(v),b=Math.sin(v),M=P/x*v,L=Math.cos(M);C.x=w*(2+L)*.5*R,C.y=w*(2+L)*b*.5,C.z=w*Math.sin(M)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}},rc=class s extends zt{constructor(t=new Cr(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new T,c=new T,l=new $,h=new T,u=[],d=[],f=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new vt(u,3)),this.setAttribute("normal",new vt(d,3)),this.setAttribute("uv",new vt(f,2));function _(){for(let v=0;v<e;v++)g(v);g(r===!1?e:0),y(),p()}function g(v){h=t.getPointAt(v/e,h);let x=o.normals[v],P=o.binormals[v];for(let w=0;w<=i;w++){let C=w/i*Math.PI*2,R=Math.sin(C),b=-Math.cos(C);c.x=b*x.x+R*P.x,c.y=b*x.y+R*P.y,c.z=b*x.z+R*P.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let v=1;v<=e;v++)for(let x=1;x<=i;x++){let P=(i+1)*(v-1)+(x-1),w=(i+1)*v+(x-1),C=(i+1)*v+x,R=(i+1)*(v-1)+x;m.push(P,w,R),m.push(w,C,R)}}function y(){for(let v=0;v<=e;v++)for(let x=0;x<=i;x++)l.x=v/e,l.y=x/i,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new Xa[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},oc=class extends zt{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,i=new T,r=new T;if(t.index!==null){let o=t.attributes.position,a=t.index,c=t.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){let u=c[l],d=u.start,f=u.count;for(let m=d,_=d+f;m<_;m+=3)for(let g=0;g<3;g++){let p=a.getX(m+g),y=a.getX(m+(g+1)%3);i.fromBufferAttribute(o,p),r.fromBufferAttribute(o,y),qd(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}}else{let o=t.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){let h=3*a+l,u=3*a+(l+1)%3;i.fromBufferAttribute(o,h),r.fromBufferAttribute(o,u),qd(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new vt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function qd(s,t,e){let n=`${s.x},${s.y},${s.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${s.x},${s.y},${s.z}`;return e.has(n)===!0||e.has(i)===!0?!1:(e.add(n),e.add(i),!0)}var Yd=Object.freeze({__proto__:null,BoxGeometry:Ni,CapsuleGeometry:Ya,CircleGeometry:Za,ConeGeometry:Ja,CylinderGeometry:Rs,DodecahedronGeometry:$a,EdgesGeometry:Ka,ExtrudeGeometry:Qa,IcosahedronGeometry:ja,LatheGeometry:Ir,OctahedronGeometry:Dr,PlaneGeometry:ws,PolyhedronGeometry:ai,RingGeometry:tc,ShapeGeometry:ec,SphereGeometry:Nr,TetrahedronGeometry:nc,TorusGeometry:ic,TorusKnotGeometry:sc,TubeGeometry:rc,WireframeGeometry:oc}),ac=class extends Ee{static get type(){return"ShadowMaterial"}constructor(t){super(),this.isShadowMaterial=!0,this.color=new ut(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}},cc=class extends $e{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},Fr=class extends Ee{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ci,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Je,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},lc=class extends Fr{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return fe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ut(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ut(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ut(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}},hc=class extends Ee{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new ut(16777215),this.specular=new ut(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ci,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Je,this.combine=Gr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},uc=class extends Ee{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new ut(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ci,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},dc=class extends Ee{static get type(){return"MeshNormalMaterial"}constructor(t){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ci,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}},fc=class extends Ee{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ci,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Je,this.combine=Gr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},pc=class extends Ee{static get type(){return"MeshMatcapMaterial"}constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.color=new ut(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ci,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this.fog=t.fog,this}},mc=class extends Te{static get type(){return"LineDashedMaterial"}constructor(t){super(),this.isLineDashedMaterial=!0,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};function Ci(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function bp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Ep(s){function t(i,r){return s[i]-s[r]}let e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function ph(s,t,e){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=e[r]*t;for(let c=0;c!==t;++c)i[o++]=s[a+c]}return i}function bu(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=s[i++];while(r!==void 0)}function _y(s,t,e,n,i=30){let r=s.clone();r.name=t;let o=[];for(let c=0;c<r.tracks.length;++c){let l=r.tracks[c],h=l.getValueSize(),u=[],d=[];for(let f=0;f<l.times.length;++f){let m=l.times[f]*i;if(!(m<e||m>=n)){u.push(l.times[f]);for(let _=0;_<h;++_)d.push(l.values[f*h+_])}}u.length!==0&&(l.times=Ci(u,l.times.constructor),l.values=Ci(d,l.values.constructor),o.push(l))}r.tracks=o;let a=1/0;for(let c=0;c<r.tracks.length;++c)a>r.tracks[c].times[0]&&(a=r.tracks[c].times[0]);for(let c=0;c<r.tracks.length;++c)r.tracks[c].shift(-1*a);return r.resetDuration(),r}function xy(s,t=0,e=s,n=30){n<=0&&(n=30);let i=e.tracks.length,r=t/n;for(let o=0;o<i;++o){let a=e.tracks[o],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;let l=s.tracks.find(function(p){return p.name===a.name&&p.ValueTypeName===c});if(l===void 0)continue;let h=0,u=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0,f=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);let m=a.times.length-1,_;if(r<=a.times[0]){let p=h,y=u-h;_=a.values.slice(p,y)}else if(r>=a.times[m]){let p=m*u+h,y=p+u-h;_=a.values.slice(p,y)}else{let p=a.createInterpolant(),y=h,v=u-h;p.evaluate(r),_=p.resultBuffer.slice(y,v)}c==="quaternion"&&new Le().fromArray(_).normalize().conjugate().toArray(_);let g=l.times.length;for(let p=0;p<g;++p){let y=p*f+d;if(c==="quaternion")Le.multiplyQuaternionsFlat(l.values,y,_,0,l.values,y);else{let v=f-d*2;for(let x=0;x<v;++x)l.values[y+x]-=_[x]}}}return s.blendMode=xu,s}var vy={convertArray:Ci,isTypedArray:bp,getKeyframeOrder:Ep,sortedArray:ph,flattenJSON:bu,subclip:_y,makeClipAdditive:xy},Vi=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let o;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break e}o=e.length;break n}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break e}o=n,n=0;break n}break t}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},gc=class extends Vi{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ai,endingEnd:Ai}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ti:r=t,a=2*e-n;break;case ur:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ti:o=t,c=2*n-e;break;case ur:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(i-e),_=m*m,g=_*m,p=-d*g+2*d*_-d*m,y=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*m+1,v=(-1-f)*g+(1.5+f)*_+.5*m,x=f*g-f*_;for(let P=0;P!==a;++P)r[P]=p*o[h+P]+y*o[l+P]+v*o[c+P]+x*o[u+P];return r}},Or=class extends Vi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},_c=class extends Vi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Qe=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ci(e,this.TimeBufferType),this.values=Ci(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ci(t.times,Array),values:Ci(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new _c(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Or(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new gc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case hr:e=this.InterpolantFactoryMethodDiscrete;break;case Sa:e=this.InterpolantFactoryMethodLinear;break;case ko:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return hr;case this.InterpolantFactoryMethodLinear:return Sa;case this.InterpolantFactoryMethodSmooth:return ko}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&bp(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ko,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(i)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let _=e[u+m];if(_!==e[d+m]||_!==e[f+m]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Qe.prototype.TimeBufferType=Float32Array;Qe.prototype.ValueBufferType=Float32Array;Qe.prototype.DefaultInterpolation=Sa;var Xn=class extends Qe{constructor(t,e,n){super(t,e,n)}};Xn.prototype.ValueTypeName="bool";Xn.prototype.ValueBufferType=Array;Xn.prototype.DefaultInterpolation=hr;Xn.prototype.InterpolantFactoryMethodLinear=void 0;Xn.prototype.InterpolantFactoryMethodSmooth=void 0;var Br=class extends Qe{};Br.prototype.ValueTypeName="color";var Hi=class extends Qe{};Hi.prototype.ValueTypeName="number";var xc=class extends Vi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e),l=t*a;for(let h=l+a;l!==h;l+=4)Le.slerpFlat(r,0,o,l-a,o,l,c);return r}},Gi=class extends Qe{InterpolantFactoryMethodLinear(t){return new xc(this.times,this.values,this.getValueSize(),t)}};Gi.prototype.ValueTypeName="quaternion";Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var qn=class extends Qe{constructor(t,e,n){super(t,e,n)}};qn.prototype.ValueTypeName="string";qn.prototype.ValueBufferType=Array;qn.prototype.DefaultInterpolation=hr;qn.prototype.InterpolantFactoryMethodLinear=void 0;qn.prototype.InterpolantFactoryMethodSmooth=void 0;var Wi=class extends Qe{};Wi.prototype.ValueTypeName="vector";var Xi=class{constructor(t="",e=-1,n=[],i=Hc){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Ye(),this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(My(n[o]).scale(i));let r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){let e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(Qe.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){let r=e.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=Ep(c);c=ph(c,1,h),l=ph(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Hi(".morphTargetInfluences["+e[a].name+"]",c,l).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){let l=t[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(l)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,m,_){if(f.length!==0){let g=[],p=[];bu(f,g,p,m),g.length!==0&&_.push(new u(d,g,p))}},i=[],r=t.name||"default",o=t.fps||30,a=t.blendMode,c=t.length||-1,l=t.hierarchy||[];for(let u=0;u<l.length;u++){let d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let _=0;_<d[m].morphTargets.length;_++)f[d[m].morphTargets[_]]=-1;for(let _ in f){let g=[],p=[];for(let y=0;y!==d[m].morphTargets.length;++y){let v=d[m];g.push(v.time),p.push(v.morphTarget===_?1:0)}i.push(new Hi(".morphTargetInfluence["+_+"]",g,p))}c=f.length*o}else{let f=".bones["+e[u].name+"]";n(Wi,f+".position",d,"pos",i),n(Gi,f+".quaternion",d,"rot",i),n(Wi,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){let t=this.tracks,e=0;for(let n=0,i=t.length;n!==i;++n){let r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function yy(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Hi;case"vector":case"vector2":case"vector3":case"vector4":return Wi;case"color":return Br;case"quaternion":return Gi;case"bool":case"boolean":return Xn;case"string":return qn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function My(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=yy(s.type);if(s.times===void 0){let e=[],n=[];bu(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}var Fn={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},zr=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}},wp=new zr,Ue=class{constructor(t){this.manager=t!==void 0?t:wp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Ue.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ln={},mh=class extends Error{constructor(t,e){super(t),this.response=e}},dn=class extends Ue{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=Fn.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Ln[t]!==void 0){Ln[t].push({onLoad:e,onProgress:n,onError:i});return}Ln[t]=[],Ln[t].push({onLoad:e,onProgress:n,onError:i});let o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Ln[t],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0,_=0,g=new ReadableStream({start(p){y();function y(){u.read().then(({done:v,value:x})=>{if(v)p.close();else{_+=x.byteLength;let P=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:f});for(let w=0,C=h.length;w<C;w++){let R=h[w];R.onProgress&&R.onProgress(P)}p.enqueue(x),y()}},v=>{p.error(v)})}}});return new Response(g)}else throw new mh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{Fn.add(t,l);let h=Ln[t];delete Ln[t];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=Ln[t];if(h===void 0)throw this.manager.itemError(t),l;delete Ln[t];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}},gh=class extends Ue{constructor(t){super(t)}load(t,e,n,i){let r=this,o=new dn(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(c){i?i(c):console.error(c),r.manager.itemError(t)}},n,i)}parse(t){let e=[];for(let n=0;n<t.length;n++){let i=Xi.parse(t[n]);e.push(i)}return e}},_h=class extends Ue{constructor(t){super(t)}load(t,e,n,i){let r=this,o=[],a=new Ts,c=new dn(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(r.withCredentials);let l=0;function h(u){c.load(t[u],function(d){let f=r.parse(d,!0);o[u]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},l+=1,l===6&&(f.mipmapCount===1&&(a.minFilter=ve),a.image=o,a.format=f.format,a.needsUpdate=!0,e&&e(a))},n,i)}if(Array.isArray(t))for(let u=0,d=t.length;u<d;++u)h(u);else c.load(t,function(u){let d=r.parse(u,!0);if(d.isCubemap){let f=d.mipmaps.length/d.mipmapCount;for(let m=0;m<f;m++){o[m]={mipmaps:[]};for(let _=0;_<d.mipmapCount;_++)o[m].mipmaps.push(d.mipmaps[m*d.mipmapCount+_]),o[m].format=d.format,o[m].width=d.width,o[m].height=d.height}a.image=o}else a.image.width=d.width,a.image.height=d.height,a.mipmaps=d.mipmaps;d.mipmapCount===1&&(a.minFilter=ve),a.format=d.format,a.needsUpdate=!0,e&&e(a)},n,i);return a}},qi=class extends Ue{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Fn.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;let a=pr("img");function c(){h(),Fn.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),i&&i(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}},xh=class extends Ue{constructor(t){super(t)}load(t,e,n,i){let r=new Fi;r.colorSpace=He;let o=new qi(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function c(l){o.load(t[l],function(h){r.images[l]=h,a++,a===6&&(r.needsUpdate=!0,e&&e(r))},void 0,i)}for(let l=0;l<t.length;++l)c(l);return r}},vh=class extends Ue{constructor(t){super(t)}load(t,e,n,i){let r=this,o=new nn,a=new dn(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(t,function(c){let l;try{l=r.parse(c)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}l.image!==void 0?o.image=l.image:l.data!==void 0&&(o.image.width=l.width,o.image.height=l.height,o.image.data=l.data),o.wrapS=l.wrapS!==void 0?l.wrapS:en,o.wrapT=l.wrapT!==void 0?l.wrapT:en,o.magFilter=l.magFilter!==void 0?l.magFilter:ve,o.minFilter=l.minFilter!==void 0?l.minFilter:ve,o.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(o.colorSpace=l.colorSpace),l.flipY!==void 0&&(o.flipY=l.flipY),l.format!==void 0&&(o.format=l.format),l.type!==void 0&&(o.type=l.type),l.mipmaps!==void 0&&(o.mipmaps=l.mipmaps,o.minFilter=xn),l.mipmapCount===1&&(o.minFilter=ve),l.generateMipmaps!==void 0&&(o.generateMipmaps=l.generateMipmaps),o.needsUpdate=!0,e&&e(o,l)},n,i),o}},yh=class extends Ue{constructor(t){super(t)}load(t,e,n,i){let r=new _e,o=new qi(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}},En=class extends jt{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},vc=class extends En{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Il=new Dt,Zd=new T,Jd=new T,kr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $(512,512),this.map=null,this.mapPass=null,this.matrix=new Dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oi,this._frameExtents=new $(1,1),this._viewportCount=1,this._viewports=[new $t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Zd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zd),Jd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Jd),e.updateMatrixWorld(),Il.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Il),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Il)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Mh=class extends kr{constructor(){super(new xe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=ys*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},yc=class extends En{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Mh}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},$d=new Dt,qs=new T,Pl=new T,Sh=class extends kr{constructor(){super(new xe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $(4,2),this._viewportCount=6,this._viewports=[new $t(2,1,1,1),new $t(0,1,1,1),new $t(3,1,1,1),new $t(1,1,1,1),new $t(3,0,1,1),new $t(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),qs.setFromMatrixPosition(t.matrixWorld),n.position.copy(qs),Pl.copy(n.position),Pl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Pl),n.updateMatrixWorld(),i.makeTranslation(-qs.x,-qs.y,-qs.z),$d.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix($d)}},Mc=class extends En{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Sh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},bh=class extends kr{constructor(){super(new As(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Sc=class extends En{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new bh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},bc=class extends En{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}},Ec=class extends En{constructor(t,e,n=10,i=10){super(t,e),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){let e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}},wc=class{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new T)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){let n=t.x,i=t.y,r=t.z,o=this.coefficients;return e.copy(o[0]).multiplyScalar(.282095),e.addScaledVector(o[1],.488603*i),e.addScaledVector(o[2],.488603*r),e.addScaledVector(o[3],.488603*n),e.addScaledVector(o[4],1.092548*(n*i)),e.addScaledVector(o[5],1.092548*(i*r)),e.addScaledVector(o[6],.315392*(3*r*r-1)),e.addScaledVector(o[7],1.092548*(n*r)),e.addScaledVector(o[8],.546274*(n*n-i*i)),e}getIrradianceAt(t,e){let n=t.x,i=t.y,r=t.z,o=this.coefficients;return e.copy(o[0]).multiplyScalar(.886227),e.addScaledVector(o[1],2*.511664*i),e.addScaledVector(o[2],2*.511664*r),e.addScaledVector(o[3],2*.511664*n),e.addScaledVector(o[4],2*.429043*n*i),e.addScaledVector(o[5],2*.429043*i*r),e.addScaledVector(o[6],.743125*r*r-.247708),e.addScaledVector(o[7],2*.429043*n*r),e.addScaledVector(o[8],.429043*(n*n-i*i)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(t,e+i*3);return this}toArray(t=[],e=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(t,e+i*3);return t}static getBasisAt(t,e){let n=t.x,i=t.y,r=t.z;e[0]=.282095,e[1]=.488603*i,e[2]=.488603*r,e[3]=.488603*n,e[4]=1.092548*n*i,e[5]=1.092548*i*r,e[6]=.315392*(3*r*r-1),e[7]=1.092548*n*r,e[8]=.546274*(n*n-i*i)}},Ac=class extends En{constructor(t=new wc,e=1){super(void 0,e),this.isLightProbe=!0,this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}fromJSON(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this}toJSON(t){let e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}},Tc=class s extends Ue{constructor(t){super(t),this.textures={}}load(t,e,n,i){let r=this,o=new dn(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(c){i?i(c):console.error(c),r.manager.itemError(t)}},n,i)}parse(t){let e=this.textures;function n(r){return e[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),e[r]}let i=this.createMaterialFromType(t.type);if(t.uuid!==void 0&&(i.uuid=t.uuid),t.name!==void 0&&(i.name=t.name),t.color!==void 0&&i.color!==void 0&&i.color.setHex(t.color),t.roughness!==void 0&&(i.roughness=t.roughness),t.metalness!==void 0&&(i.metalness=t.metalness),t.sheen!==void 0&&(i.sheen=t.sheen),t.sheenColor!==void 0&&(i.sheenColor=new ut().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(i.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(t.emissive),t.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(t.specular),t.specularIntensity!==void 0&&(i.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(i.shininess=t.shininess),t.clearcoat!==void 0&&(i.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(i.dispersion=t.dispersion),t.iridescence!==void 0&&(i.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(i.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(i.transmission=t.transmission),t.thickness!==void 0&&(i.thickness=t.thickness),t.attenuationDistance!==void 0&&(i.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(i.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(i.fog=t.fog),t.flatShading!==void 0&&(i.flatShading=t.flatShading),t.blending!==void 0&&(i.blending=t.blending),t.combine!==void 0&&(i.combine=t.combine),t.side!==void 0&&(i.side=t.side),t.shadowSide!==void 0&&(i.shadowSide=t.shadowSide),t.opacity!==void 0&&(i.opacity=t.opacity),t.transparent!==void 0&&(i.transparent=t.transparent),t.alphaTest!==void 0&&(i.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(i.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(i.depthFunc=t.depthFunc),t.depthTest!==void 0&&(i.depthTest=t.depthTest),t.depthWrite!==void 0&&(i.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(i.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(i.blendSrc=t.blendSrc),t.blendDst!==void 0&&(i.blendDst=t.blendDst),t.blendEquation!==void 0&&(i.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(i.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(i.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(i.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(i.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(i.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(i.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(i.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(i.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(i.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(i.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(i.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(i.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(i.rotation=t.rotation),t.linewidth!==void 0&&(i.linewidth=t.linewidth),t.dashSize!==void 0&&(i.dashSize=t.dashSize),t.gapSize!==void 0&&(i.gapSize=t.gapSize),t.scale!==void 0&&(i.scale=t.scale),t.polygonOffset!==void 0&&(i.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(i.dithering=t.dithering),t.alphaToCoverage!==void 0&&(i.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(i.forceSinglePass=t.forceSinglePass),t.visible!==void 0&&(i.visible=t.visible),t.toneMapped!==void 0&&(i.toneMapped=t.toneMapped),t.userData!==void 0&&(i.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?i.vertexColors=t.vertexColors>0:i.vertexColors=t.vertexColors),t.uniforms!==void 0)for(let r in t.uniforms){let o=t.uniforms[r];switch(i.uniforms[r]={},o.type){case"t":i.uniforms[r].value=n(o.value);break;case"c":i.uniforms[r].value=new ut().setHex(o.value);break;case"v2":i.uniforms[r].value=new $().fromArray(o.value);break;case"v3":i.uniforms[r].value=new T().fromArray(o.value);break;case"v4":i.uniforms[r].value=new $t().fromArray(o.value);break;case"m3":i.uniforms[r].value=new Bt().fromArray(o.value);break;case"m4":i.uniforms[r].value=new Dt().fromArray(o.value);break;default:i.uniforms[r].value=o.value}}if(t.defines!==void 0&&(i.defines=t.defines),t.vertexShader!==void 0&&(i.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(i.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(i.glslVersion=t.glslVersion),t.extensions!==void 0)for(let r in t.extensions)i.extensions[r]=t.extensions[r];if(t.lights!==void 0&&(i.lights=t.lights),t.clipping!==void 0&&(i.clipping=t.clipping),t.size!==void 0&&(i.size=t.size),t.sizeAttenuation!==void 0&&(i.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(i.map=n(t.map)),t.matcap!==void 0&&(i.matcap=n(t.matcap)),t.alphaMap!==void 0&&(i.alphaMap=n(t.alphaMap)),t.bumpMap!==void 0&&(i.bumpMap=n(t.bumpMap)),t.bumpScale!==void 0&&(i.bumpScale=t.bumpScale),t.normalMap!==void 0&&(i.normalMap=n(t.normalMap)),t.normalMapType!==void 0&&(i.normalMapType=t.normalMapType),t.normalScale!==void 0){let r=t.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new $().fromArray(r)}return t.displacementMap!==void 0&&(i.displacementMap=n(t.displacementMap)),t.displacementScale!==void 0&&(i.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(i.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(i.roughnessMap=n(t.roughnessMap)),t.metalnessMap!==void 0&&(i.metalnessMap=n(t.metalnessMap)),t.emissiveMap!==void 0&&(i.emissiveMap=n(t.emissiveMap)),t.emissiveIntensity!==void 0&&(i.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(i.specularMap=n(t.specularMap)),t.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(t.specularIntensityMap)),t.specularColorMap!==void 0&&(i.specularColorMap=n(t.specularColorMap)),t.envMap!==void 0&&(i.envMap=n(t.envMap)),t.envMapRotation!==void 0&&i.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(i.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(i.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(i.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(i.lightMap=n(t.lightMap)),t.lightMapIntensity!==void 0&&(i.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(i.aoMap=n(t.aoMap)),t.aoMapIntensity!==void 0&&(i.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(i.gradientMap=n(t.gradientMap)),t.clearcoatMap!==void 0&&(i.clearcoatMap=n(t.clearcoatMap)),t.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(t.clearcoatRoughnessMap)),t.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(t.clearcoatNormalMap)),t.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new $().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(i.iridescenceMap=n(t.iridescenceMap)),t.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(t.iridescenceThicknessMap)),t.transmissionMap!==void 0&&(i.transmissionMap=n(t.transmissionMap)),t.thicknessMap!==void 0&&(i.thicknessMap=n(t.thicknessMap)),t.anisotropyMap!==void 0&&(i.anisotropyMap=n(t.anisotropyMap)),t.sheenColorMap!==void 0&&(i.sheenColorMap=n(t.sheenColorMap)),t.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(t.sheenRoughnessMap)),i}setTextures(t){return this.textures=t,this}createMaterialFromType(t){return s.createMaterialFromType(t)}static createMaterialFromType(t){let e={ShadowMaterial:ac,SpriteMaterial:Sr,RawShaderMaterial:cc,ShaderMaterial:$e,PointsMaterial:Er,MeshPhysicalMaterial:lc,MeshStandardMaterial:Fr,MeshPhongMaterial:hc,MeshToonMaterial:uc,MeshNormalMaterial:dc,MeshLambertMaterial:fc,MeshDepthMaterial:yr,MeshDistanceMaterial:Mr,MeshBasicMaterial:Sn,MeshMatcapMaterial:pc,LineDashedMaterial:mc,LineBasicMaterial:Te,Material:Ee};return new e[t]}},Vr=class{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}},Cc=class extends zt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}},Rc=class extends Ue{constructor(t){super(t)}load(t,e,n,i){let r=this,o=new dn(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(c){i?i(c):console.error(c),r.manager.itemError(t)}},n,i)}parse(t){let e={},n={};function i(f,m){if(e[m]!==void 0)return e[m];let g=f.interleavedBuffers[m],p=r(f,g.buffer),y=ps(g.type,p),v=new Bi(y,g.stride);return v.uuid=g.uuid,e[m]=v,v}function r(f,m){if(n[m]!==void 0)return n[m];let g=f.arrayBuffers[m],p=new Uint32Array(g).buffer;return n[m]=p,p}let o=t.isInstancedBufferGeometry?new Cc:new zt,a=t.data.index;if(a!==void 0){let f=ps(a.type,a.array);o.setIndex(new Qt(f,1))}let c=t.data.attributes;for(let f in c){let m=c[f],_;if(m.isInterleavedBufferAttribute){let g=i(t.data,m.data);_=new oi(g,m.itemSize,m.offset,m.normalized)}else{let g=ps(m.type,m.array),p=m.isInstancedBufferAttribute?Wn:Qt;_=new p(g,m.itemSize,m.normalized)}m.name!==void 0&&(_.name=m.name),m.usage!==void 0&&_.setUsage(m.usage),o.setAttribute(f,_)}let l=t.data.morphAttributes;if(l)for(let f in l){let m=l[f],_=[];for(let g=0,p=m.length;g<p;g++){let y=m[g],v;if(y.isInterleavedBufferAttribute){let x=i(t.data,y.data);v=new oi(x,y.itemSize,y.offset,y.normalized)}else{let x=ps(y.type,y.array);v=new Qt(x,y.itemSize,y.normalized)}y.name!==void 0&&(v.name=y.name),_.push(v)}o.morphAttributes[f]=_}t.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);let u=t.data.groups||t.data.drawcalls||t.data.offsets;if(u!==void 0)for(let f=0,m=u.length;f!==m;++f){let _=u[f];o.addGroup(_.start,_.count,_.materialIndex)}let d=t.data.boundingSphere;if(d!==void 0){let f=new T;d.center!==void 0&&f.fromArray(d.center),o.boundingSphere=new be(f,d.radius)}return t.name&&(o.name=t.name),t.userData&&(o.userData=t.userData),o}},Eh=class extends Ue{constructor(t){super(t)}load(t,e,n,i){let r=this,o=this.path===""?Vr.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||o;let a=new dn(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(c){let l=null;try{l=JSON.parse(c)}catch(u){i!==void 0&&i(u),console.error("THREE:ObjectLoader: Can't parse "+t+".",u.message);return}let h=l.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+t)),console.error("THREE.ObjectLoader: Can't load "+t);return}r.parse(l,e)},n,i)}async loadAsync(t,e){let n=this,i=this.path===""?Vr.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||i;let r=new dn(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);let o=await r.loadAsync(t,e),a=JSON.parse(o),c=a.metadata;if(c===void 0||c.type===void 0||c.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+t);return await n.parseAsync(a)}parse(t,e){let n=this.parseAnimations(t.animations),i=this.parseShapes(t.shapes),r=this.parseGeometries(t.geometries,i),o=this.parseImages(t.images,function(){e!==void 0&&e(l)}),a=this.parseTextures(t.textures,o),c=this.parseMaterials(t.materials,a),l=this.parseObject(t.object,r,c,a,n),h=this.parseSkeletons(t.skeletons,l);if(this.bindSkeletons(l,h),this.bindLightTargets(l),e!==void 0){let u=!1;for(let d in o)if(o[d].data instanceof HTMLImageElement){u=!0;break}u===!1&&e(l)}return l}async parseAsync(t){let e=this.parseAnimations(t.animations),n=this.parseShapes(t.shapes),i=this.parseGeometries(t.geometries,n),r=await this.parseImagesAsync(t.images),o=this.parseTextures(t.textures,r),a=this.parseMaterials(t.materials,o),c=this.parseObject(t.object,i,a,o,e),l=this.parseSkeletons(t.skeletons,c);return this.bindSkeletons(c,l),this.bindLightTargets(c),c}parseShapes(t){let e={};if(t!==void 0)for(let n=0,i=t.length;n<i;n++){let r=new kn().fromJSON(t[n]);e[r.uuid]=r}return e}parseSkeletons(t,e){let n={},i={};if(e.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),t!==void 0)for(let r=0,o=t.length;r<o;r++){let a=new Da().fromJSON(t[r],i);n[a.uuid]=a}return n}parseGeometries(t,e){let n={};if(t!==void 0){let i=new Rc;for(let r=0,o=t.length;r<o;r++){let a,c=t[r];switch(c.type){case"BufferGeometry":case"InstancedBufferGeometry":a=i.parse(c);break;default:c.type in Yd?a=Yd[c.type].fromJSON(c,e):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${c.type}"`)}a.uuid=c.uuid,c.name!==void 0&&(a.name=c.name),c.userData!==void 0&&(a.userData=c.userData),n[c.uuid]=a}}return n}parseMaterials(t,e){let n={},i={};if(t!==void 0){let r=new Tc;r.setTextures(e);for(let o=0,a=t.length;o<a;o++){let c=t[o];n[c.uuid]===void 0&&(n[c.uuid]=r.parse(c)),i[c.uuid]=n[c.uuid]}}return i}parseAnimations(t){let e={};if(t!==void 0)for(let n=0;n<t.length;n++){let i=t[n],r=Xi.parse(i);e[r.uuid]=r}return e}parseImages(t,e){let n=this,i={},r;function o(c){return n.manager.itemStart(c),r.load(c,function(){n.manager.itemEnd(c)},void 0,function(){n.manager.itemError(c),n.manager.itemEnd(c)})}function a(c){if(typeof c=="string"){let l=c,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l)?l:n.resourcePath+l;return o(h)}else return c.data?{data:ps(c.type,c.data),width:c.width,height:c.height}:null}if(t!==void 0&&t.length>0){let c=new zr(e);r=new qi(c),r.setCrossOrigin(this.crossOrigin);for(let l=0,h=t.length;l<h;l++){let u=t[l],d=u.url;if(Array.isArray(d)){let f=[];for(let m=0,_=d.length;m<_;m++){let g=d[m],p=a(g);p!==null&&(p instanceof HTMLImageElement?f.push(p):f.push(new nn(p.data,p.width,p.height)))}i[u.uuid]=new Nn(f)}else{let f=a(u.url);i[u.uuid]=new Nn(f)}}}return i}async parseImagesAsync(t){let e=this,n={},i;async function r(o){if(typeof o=="string"){let a=o,c=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:e.resourcePath+a;return await i.loadAsync(c)}else return o.data?{data:ps(o.type,o.data),width:o.width,height:o.height}:null}if(t!==void 0&&t.length>0){i=new qi(this.manager),i.setCrossOrigin(this.crossOrigin);for(let o=0,a=t.length;o<a;o++){let c=t[o],l=c.url;if(Array.isArray(l)){let h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u],m=await r(f);m!==null&&(m instanceof HTMLImageElement?h.push(m):h.push(new nn(m.data,m.width,m.height)))}n[c.uuid]=new Nn(h)}else{let h=await r(c.url);n[c.uuid]=new Nn(h)}}}return n}parseTextures(t,e){function n(r,o){return typeof r=="number"?r:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",r),o[r])}let i={};if(t!==void 0)for(let r=0,o=t.length;r<o;r++){let a=t[r];a.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',a.uuid),e[a.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",a.image);let c=e[a.image],l=c.data,h;Array.isArray(l)?(h=new Fi,l.length===6&&(h.needsUpdate=!0)):(l&&l.data?h=new nn:h=new _e,l&&(h.needsUpdate=!0)),h.source=c,h.uuid=a.uuid,a.name!==void 0&&(h.name=a.name),a.mapping!==void 0&&(h.mapping=n(a.mapping,Sy)),a.channel!==void 0&&(h.channel=a.channel),a.offset!==void 0&&h.offset.fromArray(a.offset),a.repeat!==void 0&&h.repeat.fromArray(a.repeat),a.center!==void 0&&h.center.fromArray(a.center),a.rotation!==void 0&&(h.rotation=a.rotation),a.wrap!==void 0&&(h.wrapS=n(a.wrap[0],Kd),h.wrapT=n(a.wrap[1],Kd)),a.format!==void 0&&(h.format=a.format),a.internalFormat!==void 0&&(h.internalFormat=a.internalFormat),a.type!==void 0&&(h.type=a.type),a.colorSpace!==void 0&&(h.colorSpace=a.colorSpace),a.minFilter!==void 0&&(h.minFilter=n(a.minFilter,Qd)),a.magFilter!==void 0&&(h.magFilter=n(a.magFilter,Qd)),a.anisotropy!==void 0&&(h.anisotropy=a.anisotropy),a.flipY!==void 0&&(h.flipY=a.flipY),a.generateMipmaps!==void 0&&(h.generateMipmaps=a.generateMipmaps),a.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(h.unpackAlignment=a.unpackAlignment),a.compareFunction!==void 0&&(h.compareFunction=a.compareFunction),a.userData!==void 0&&(h.userData=a.userData),i[a.uuid]=h}return i}parseObject(t,e,n,i,r){let o;function a(d){return e[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",d),e[d]}function c(d){if(d!==void 0){if(Array.isArray(d)){let f=[];for(let m=0,_=d.length;m<_;m++){let g=d[m];n[g]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",g),f.push(n[g])}return f}return n[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",d),n[d]}}function l(d){return i[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",d),i[d]}let h,u;switch(t.type){case"Scene":o=new Ia,t.background!==void 0&&(Number.isInteger(t.background)?o.background=new ut(t.background):o.background=l(t.background)),t.environment!==void 0&&(o.environment=l(t.environment)),t.fog!==void 0&&(t.fog.type==="Fog"?o.fog=new Ra(t.fog.color,t.fog.near,t.fog.far):t.fog.type==="FogExp2"&&(o.fog=new Ca(t.fog.color,t.fog.density)),t.fog.name!==""&&(o.fog.name=t.fog.name)),t.backgroundBlurriness!==void 0&&(o.backgroundBlurriness=t.backgroundBlurriness),t.backgroundIntensity!==void 0&&(o.backgroundIntensity=t.backgroundIntensity),t.backgroundRotation!==void 0&&o.backgroundRotation.fromArray(t.backgroundRotation),t.environmentIntensity!==void 0&&(o.environmentIntensity=t.environmentIntensity),t.environmentRotation!==void 0&&o.environmentRotation.fromArray(t.environmentRotation);break;case"PerspectiveCamera":o=new xe(t.fov,t.aspect,t.near,t.far),t.focus!==void 0&&(o.focus=t.focus),t.zoom!==void 0&&(o.zoom=t.zoom),t.filmGauge!==void 0&&(o.filmGauge=t.filmGauge),t.filmOffset!==void 0&&(o.filmOffset=t.filmOffset),t.view!==void 0&&(o.view=Object.assign({},t.view));break;case"OrthographicCamera":o=new As(t.left,t.right,t.top,t.bottom,t.near,t.far),t.zoom!==void 0&&(o.zoom=t.zoom),t.view!==void 0&&(o.view=Object.assign({},t.view));break;case"AmbientLight":o=new bc(t.color,t.intensity);break;case"DirectionalLight":o=new Sc(t.color,t.intensity),o.target=t.target||"";break;case"PointLight":o=new Mc(t.color,t.intensity,t.distance,t.decay);break;case"RectAreaLight":o=new Ec(t.color,t.intensity,t.width,t.height);break;case"SpotLight":o=new yc(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay),o.target=t.target||"";break;case"HemisphereLight":o=new vc(t.color,t.groundColor,t.intensity);break;case"LightProbe":o=new Ac().fromJSON(t);break;case"SkinnedMesh":h=a(t.geometry),u=c(t.material),o=new Ua(h,u),t.bindMode!==void 0&&(o.bindMode=t.bindMode),t.bindMatrix!==void 0&&o.bindMatrix.fromArray(t.bindMatrix),t.skeleton!==void 0&&(o.skeleton=t.skeleton);break;case"Mesh":h=a(t.geometry),u=c(t.material),o=new pe(h,u);break;case"InstancedMesh":h=a(t.geometry),u=c(t.material);let d=t.count,f=t.instanceMatrix,m=t.instanceColor;o=new Na(h,u,d),o.instanceMatrix=new Wn(new Float32Array(f.array),16),m!==void 0&&(o.instanceColor=new Wn(new Float32Array(m.array),m.itemSize));break;case"BatchedMesh":h=a(t.geometry),u=c(t.material),o=new Fa(t.maxInstanceCount,t.maxVertexCount,t.maxIndexCount,u),o.geometry=h,o.perObjectFrustumCulled=t.perObjectFrustumCulled,o.sortObjects=t.sortObjects,o._drawRanges=t.drawRanges,o._reservedRanges=t.reservedRanges,o._visibility=t.visibility,o._active=t.active,o._bounds=t.bounds.map(_=>{let g=new Ae;g.min.fromArray(_.boxMin),g.max.fromArray(_.boxMax);let p=new be;return p.radius=_.sphereRadius,p.center.fromArray(_.sphereCenter),{boxInitialized:_.boxInitialized,box:g,sphereInitialized:_.sphereInitialized,sphere:p}}),o._maxInstanceCount=t.maxInstanceCount,o._maxVertexCount=t.maxVertexCount,o._maxIndexCount=t.maxIndexCount,o._geometryInitialized=t.geometryInitialized,o._geometryCount=t.geometryCount,o._matricesTexture=l(t.matricesTexture.uuid),t.colorsTexture!==void 0&&(o._colorsTexture=l(t.colorsTexture.uuid));break;case"LOD":o=new La;break;case"Line":o=new bn(a(t.geometry),c(t.material));break;case"LineLoop":o=new za(a(t.geometry),c(t.material));break;case"LineSegments":o=new rn(a(t.geometry),c(t.material));break;case"PointCloud":case"Points":o=new ka(a(t.geometry),c(t.material));break;case"Sprite":o=new Pa(c(t.material));break;case"Group":o=new ii;break;case"Bone":o=new br;break;default:o=new jt}if(o.uuid=t.uuid,t.name!==void 0&&(o.name=t.name),t.matrix!==void 0?(o.matrix.fromArray(t.matrix),t.matrixAutoUpdate!==void 0&&(o.matrixAutoUpdate=t.matrixAutoUpdate),o.matrixAutoUpdate&&o.matrix.decompose(o.position,o.quaternion,o.scale)):(t.position!==void 0&&o.position.fromArray(t.position),t.rotation!==void 0&&o.rotation.fromArray(t.rotation),t.quaternion!==void 0&&o.quaternion.fromArray(t.quaternion),t.scale!==void 0&&o.scale.fromArray(t.scale)),t.up!==void 0&&o.up.fromArray(t.up),t.castShadow!==void 0&&(o.castShadow=t.castShadow),t.receiveShadow!==void 0&&(o.receiveShadow=t.receiveShadow),t.shadow&&(t.shadow.intensity!==void 0&&(o.shadow.intensity=t.shadow.intensity),t.shadow.bias!==void 0&&(o.shadow.bias=t.shadow.bias),t.shadow.normalBias!==void 0&&(o.shadow.normalBias=t.shadow.normalBias),t.shadow.radius!==void 0&&(o.shadow.radius=t.shadow.radius),t.shadow.mapSize!==void 0&&o.shadow.mapSize.fromArray(t.shadow.mapSize),t.shadow.camera!==void 0&&(o.shadow.camera=this.parseObject(t.shadow.camera))),t.visible!==void 0&&(o.visible=t.visible),t.frustumCulled!==void 0&&(o.frustumCulled=t.frustumCulled),t.renderOrder!==void 0&&(o.renderOrder=t.renderOrder),t.userData!==void 0&&(o.userData=t.userData),t.layers!==void 0&&(o.layers.mask=t.layers),t.children!==void 0){let d=t.children;for(let f=0;f<d.length;f++)o.add(this.parseObject(d[f],e,n,i,r))}if(t.animations!==void 0){let d=t.animations;for(let f=0;f<d.length;f++){let m=d[f];o.animations.push(r[m])}}if(t.type==="LOD"){t.autoUpdate!==void 0&&(o.autoUpdate=t.autoUpdate);let d=t.levels;for(let f=0;f<d.length;f++){let m=d[f],_=o.getObjectByProperty("uuid",m.object);_!==void 0&&o.addLevel(_,m.distance,m.hysteresis)}}return o}bindSkeletons(t,e){Object.keys(e).length!==0&&t.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){let i=e[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(t){t.traverse(function(e){if(e.isDirectionalLight||e.isSpotLight){let n=e.target,i=t.getObjectByProperty("uuid",n);i!==void 0?e.target=i:e.target=new jt}})}},Sy={UVMapping:Nc,CubeReflectionMapping:Hn,CubeRefractionMapping:si,EquirectangularReflectionMapping:or,EquirectangularRefractionMapping:ar,CubeUVReflectionMapping:Is},Kd={RepeatWrapping:cr,ClampToEdgeWrapping:en,MirroredRepeatWrapping:lr},Qd={NearestFilter:we,NearestMipmapNearestFilter:cu,NearestMipmapLinearFilter:fs,LinearFilter:ve,LinearMipmapNearestFilter:$s,LinearMipmapLinearFilter:xn},wh=class extends Ue{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Fn.get(t);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(l=>{e&&e(l),r.manager.itemEnd(t)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(t,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Fn.add(t,l),e&&e(l),r.manager.itemEnd(t),l}).catch(function(l){i&&i(l),Fn.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});Fn.add(t,c),r.manager.itemStart(t)}},Uo,Hr=class{static getContext(){return Uo===void 0&&(Uo=new(window.AudioContext||window.webkitAudioContext)),Uo}static setContext(t){Uo=t}},Ah=class extends Ue{constructor(t){super(t)}load(t,e,n,i){let r=this,o=new dn(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(c){try{let l=c.slice(0);Hr.getContext().decodeAudioData(l,function(u){e(u)}).catch(a)}catch(l){a(l)}},n,i);function a(c){i?i(c):console.error(c),r.manager.itemError(t)}}},jd=new Dt,tf=new Dt,xi=new Dt,Th=class{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new xe,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new xe,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(t){let e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep,xi.copy(t.projectionMatrix);let i=e.eyeSep/2,r=i*e.near/e.focus,o=e.near*Math.tan(Pi*e.fov*.5)/e.zoom,a,c;tf.elements[12]=-i,jd.elements[12]=i,a=-o*e.aspect+r,c=o*e.aspect+r,xi.elements[0]=2*e.near/(c-a),xi.elements[8]=(c+a)/(c-a),this.cameraL.projectionMatrix.copy(xi),a=-o*e.aspect-r,c=o*e.aspect-r,xi.elements[0]=2*e.near/(c-a),xi.elements[8]=(c+a)/(c-a),this.cameraR.projectionMatrix.copy(xi)}this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(tf),this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(jd)}},Ic=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ef(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=ef();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function ef(){return performance.now()}var vi=new T,nf=new Le,by=new T,yi=new T,Ch=class extends jt{constructor(){super(),this.type="AudioListener",this.context=Hr.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Ic}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t);let e=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(vi,nf,by),yi.set(0,0,-1).applyQuaternion(nf),e.positionX){let i=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(vi.x,i),e.positionY.linearRampToValueAtTime(vi.y,i),e.positionZ.linearRampToValueAtTime(vi.z,i),e.forwardX.linearRampToValueAtTime(yi.x,i),e.forwardY.linearRampToValueAtTime(yi.y,i),e.forwardZ.linearRampToValueAtTime(yi.z,i),e.upX.linearRampToValueAtTime(n.x,i),e.upY.linearRampToValueAtTime(n.y,i),e.upZ.linearRampToValueAtTime(n.z,i)}else e.setPosition(vi.x,vi.y,vi.z),e.setOrientation(yi.x,yi.y,yi.z,n.x,n.y,n.z)}},Pc=class extends jt{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;let e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(t=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+t),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}},Mi=new T,sf=new Le,Ey=new T,Si=new T,Rh=class extends Pc{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,e,n){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=n,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Mi,sf,Ey),Si.set(0,0,1).applyQuaternion(sf);let e=this.panner;if(e.positionX){let n=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(Mi.x,n),e.positionY.linearRampToValueAtTime(Mi.y,n),e.positionZ.linearRampToValueAtTime(Mi.z,n),e.orientationX.linearRampToValueAtTime(Si.x,n),e.orientationY.linearRampToValueAtTime(Si.y,n),e.orientationZ.linearRampToValueAtTime(Si.z,n)}else e.setPosition(Mi.x,Mi.y,Mi.z),e.setOrientation(Si.x,Si.y,Si.z)}},Ih=class{constructor(t,e=2048){this.analyser=t.context.createAnalyser(),this.analyser.fftSize=e,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let t=0,e=this.getFrequencyData();for(let n=0;n<e.length;n++)t+=e[n];return t/e.length}},Lc=class{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,r,o;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){let n=this.buffer,i=this.valueSize,r=t*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=e}else{o+=e;let a=e/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(t){let e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){let e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=e*this._origIndex;this._mixBufferRegion(n,i,c,1-r,e)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let c=e,l=e+e;c!==l;++c)if(n[c]!==n[c+e]){a.setValue(n,i);break}}saveOriginalState(){let t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,o=i;r!==o;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){let t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)t[e+o]=t[n+o]}_slerp(t,e,n,i){Le.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,r){let o=this._workIndex*r;Le.multiplyQuaternionsFlat(t,o,t,e,t,n),Le.slerpFlat(t,e,t,e,t,o,i)}_lerp(t,e,n,i,r){let o=1-i;for(let a=0;a!==r;++a){let c=e+a;t[c]=t[c]*o+t[n+a]*i}}_lerpAdditive(t,e,n,i,r){for(let o=0;o!==r;++o){let a=e+o;t[a]=t[a]+t[n+o]*i}}},Eu="\\[\\]\\.:\\/",wy=new RegExp("["+Eu+"]","g"),wu="[^"+Eu+"]",Ay="[^"+Eu.replace("\\.","")+"]",Ty=/((?:WC+[\/:])*)/.source.replace("WC",wu),Cy=/(WCOD+)?/.source.replace("WCOD",Ay),Ry=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wu),Iy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wu),Py=new RegExp("^"+Ty+Cy+Ry+Iy+"$"),Ly=["material","materials","bones","map"],Ph=class{constructor(t,e,n){let i=n||re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},re=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(wy,"")}static parseTrackName(t){let e=Py.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Ly.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[i];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};re.Composite=Ph;re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};re.prototype.GetterByBindingType=[re.prototype._getValue_direct,re.prototype._getValue_array,re.prototype._getValue_arrayElement,re.prototype._getValue_toArray];re.prototype.SetterByBindingTypeAndVersioning=[[re.prototype._setValue_direct,re.prototype._setValue_direct_setNeedsUpdate,re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[re.prototype._setValue_array,re.prototype._setValue_array_setNeedsUpdate,re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[re.prototype._setValue_arrayElement,re.prototype._setValue_arrayElement_setNeedsUpdate,re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[re.prototype._setValue_fromArray,re.prototype._setValue_fromArray_setNeedsUpdate,re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Lh=class{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Ye(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let t={};this._indicesByUUID=t;for(let n=0,i=arguments.length;n!==i;++n)t[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}add(){let t=this._objects,e=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,o=r.length,a,c=t.length,l=this.nCachedObjects_;for(let h=0,u=arguments.length;h!==u;++h){let d=arguments[h],f=d.uuid,m=e[f];if(m===void 0){m=c++,e[f]=m,t.push(d);for(let _=0,g=o;_!==g;++_)r[_].push(new re(d,n[_],i[_]))}else if(m<l){a=t[m];let _=--l,g=t[_];e[g.uuid]=m,t[m]=g,e[f]=_,t[_]=d;for(let p=0,y=o;p!==y;++p){let v=r[p],x=v[_],P=v[m];v[m]=x,P===void 0&&(P=new re(d,n[p],i[p])),v[_]=P}}else t[m]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l}remove(){let t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){let c=arguments[o],l=c.uuid,h=e[l];if(h!==void 0&&h>=r){let u=r++,d=t[u];e[d.uuid]=h,t[h]=d,e[l]=u,t[u]=c;for(let f=0,m=i;f!==m;++f){let _=n[f],g=_[u],p=_[h];_[h]=g,_[u]=p}}}this.nCachedObjects_=r}uncache(){let t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_,o=t.length;for(let a=0,c=arguments.length;a!==c;++a){let l=arguments[a],h=l.uuid,u=e[h];if(u!==void 0)if(delete e[h],u<r){let d=--r,f=t[d],m=--o,_=t[m];e[f.uuid]=u,t[u]=f,e[_.uuid]=d,t[d]=_,t.pop();for(let g=0,p=i;g!==p;++g){let y=n[g],v=y[d],x=y[m];y[u]=v,y[d]=x,y.pop()}}else{let d=--o,f=t[d];d>0&&(e[f.uuid]=u),t[u]=f,t.pop();for(let m=0,_=i;m!==_;++m){let g=n[m];g[u]=g[d],g.pop()}}}this.nCachedObjects_=r}subscribe_(t,e){let n=this._bindingsIndicesByPath,i=n[t],r=this._bindings;if(i!==void 0)return r[i];let o=this._paths,a=this._parsedPaths,c=this._objects,l=c.length,h=this.nCachedObjects_,u=new Array(l);i=r.length,n[t]=i,o.push(t),a.push(e),r.push(u);for(let d=h,f=c.length;d!==f;++d){let m=c[d];u[d]=new re(m,t,e)}return u}unsubscribe_(t){let e=this._bindingsIndicesByPath,n=e[t];if(n!==void 0){let i=this._paths,r=this._parsedPaths,o=this._bindings,a=o.length-1,c=o[a],l=t[a];e[l]=n,o[n]=c,o.pop(),r[n]=r[a],r.pop(),i[n]=i[a],i.pop()}}},Uc=class{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;let r=e.tracks,o=r.length,a=new Array(o),c={endingStart:Ai,endingEnd:Ai};for(let l=0;l!==o;++l){let h=r[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Yf,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){let i=this._clip.duration,r=t._clip.duration,o=r/i,a=i/r;t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){let t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){let i=this._mixer,r=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=t/o,l[1]=e/o,this}stopWarping(){let t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}let r=this._startTime;if(r!==null){let c=(t-r)*n;c<0||n===0?e=0:(this._startTime=null,e=n*c)}e*=this._updateTimeScale(t);let o=this._updateTime(e),a=this._updateWeight(t);if(a>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case xu:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case Hc:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(i,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){let e=this._clip.duration,n=this.loop,i=this.time+t,r=this._loopCount,o=n===Zf;if(t===0)return r===-1?i:o&&(r&1)===1?e-i:i;if(n===qf){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=e||i<0){let a=Math.floor(i/e);i-=e*a,r+=Math.abs(a);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){let l=t<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return e-i}return i}_setEndings(t,e,n){let i=this._interpolantSettings;n?(i.endingStart=Ti,i.endingEnd=Ti):(t?i.endingStart=this.zeroSlopeAtStart?Ti:Ai:i.endingStart=ur,e?i.endingEnd=this.zeroSlopeAtEnd?Ti:Ai:i.endingEnd=ur)}_scheduleFading(t,e,n){let i=this._mixer,r=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=e,a[1]=r+t,c[1]=n,this}},Uy=new Float32Array(1),Uh=class extends sn{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){let n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,o=t._propertyBindings,a=t._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){let d=i[u],f=d.name,m=h[f];if(m!==void 0)++m.referenceCount,o[u]=m;else{if(m=o[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,f));continue}let _=e&&e._propertyBindings[u].binding.parsedPath;m=new Lc(re.create(n,f,_),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,f),o[u]=m}a[u].resultBuffer=m.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){let n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){let e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){let i=this._actions,r=this._actionsByClip,o=r[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=o;else{let a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){let e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;let r=t._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],h=t._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),t._byClipCacheIndex=null;let u=a.actionByRoot,d=(t._localRoot||this._root).uuid;delete u[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){let e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){let e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){let i=this._bindingsByRootAndName,r=this._bindings,o=i[e];o===void 0&&(o={},i[e]=o),o[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){let e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],c=e[e.length-1],l=t._cacheIndex;c._cacheIndex=l,e[l]=c,e.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(t){let e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){let e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){let t=this._controlInterpolants,e=this._nActiveControlInterpolants++,n=t[e];return n===void 0&&(n=new Or(new Float32Array(2),new Float32Array(2),1,Uy),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){let e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){let i=e||this._root,r=i.uuid,o=typeof t=="string"?Xi.findByName(i,t):t,a=o!==null?o.uuid:t,c=this._actionsByClip[a],l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Hc),c!==void 0){let u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;let h=new Uc(this,o,e,n);return this._bindAction(h,l),this._addInactiveAction(h,a,r),h}existingAction(t,e){let n=e||this._root,i=n.uuid,r=typeof t=="string"?Xi.findByName(n,t):t,o=r?r.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;let e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),o=this._accuIndex^=1;for(let l=0;l!==n;++l)e[l]._update(i,t,r,o);let a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){let e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){let l=o[a];this._deactivateAction(l);let h=l._cacheIndex,u=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(t){let e=t.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,c=a[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){let n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}},Dh=class s{constructor(t){this.value=t}clone(){return new s(this.value.clone===void 0?this.value:this.value.clone())}},Dy=0,Nh=class extends sn{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:Dy++}),this.name="",this.usage=dr,this.uniforms=[]}add(t){return this.uniforms.push(t),this}remove(t){let e=this.uniforms.indexOf(t);return e!==-1&&this.uniforms.splice(e,1),this}setName(t){return this.name=t,this}setUsage(t){return this.usage=t,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(t){this.name=t.name,this.usage=t.usage;let e=t.uniforms;this.uniforms.length=0;for(let n=0,i=e.length;n<i;n++){let r=Array.isArray(e[n])?e[n]:[e[n]];for(let o=0;o<r.length;o++)this.uniforms.push(r[o].clone())}return this}clone(){return new this.constructor().copy(this)}},Fh=class extends Bi{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}},Oh=class{constructor(t,e,n,i,r){this.isGLBufferAttribute=!0,this.name="",this.buffer=t,this.type=e,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0}set needsUpdate(t){t===!0&&this.version++}setBuffer(t){return this.buffer=t,this}setType(t,e){return this.type=t,this.elementSize=e,this}setItemSize(t){return this.itemSize=t,this}setCount(t){return this.count=t,this}},rf=new Dt,Bh=class{constructor(t,e,n=0,i=1/0){this.ray=new ri(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Ss,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return rf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(rf),this}intersectObject(t,e=!0,n=[]){return zh(t,this,n,e),n.sort(of),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)zh(t[i],this,n,e);return n.sort(of),n}};function of(s,t){return s.distance-t.distance}function zh(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)zh(r[o],t,e,!0)}}var kh=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(fe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},Vh=class{constructor(t=1,e=0,n=0){return this.radius=t,this.theta=e,this.y=n,this}set(t,e,n){return this.radius=t,this.theta=e,this.y=n,this}copy(t){return this.radius=t.radius,this.theta=t.theta,this.y=t.y,this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+n*n),this.theta=Math.atan2(t,n),this.y=e,this}clone(){return new this.constructor().copy(this)}},Hh=class s{constructor(t,e,n,i){s.prototype.isMatrix2=!0,this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}},af=new $,Gh=class{constructor(t=new $(1/0,1/0),e=new $(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=af.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,af).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},cf=new T,Do=new T,Wh=class{constructor(t=new T,e=new T){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){cf.subVectors(t,this.start),Do.subVectors(this.end,this.start);let n=Do.dot(Do),r=Do.dot(cf)/n;return e&&(r=fe(r,0,1)),r}closestPointToPoint(t,e,n){let i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},lf=new T,Xh=class extends jt{constructor(t,e){super(),this.light=t,this.matrixAutoUpdate=!1,this.color=e,this.type="SpotLightHelper";let n=new zt,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,c=32;o<c;o++,a++){let l=o/c*Math.PI*2,h=a/c*Math.PI*2;i.push(Math.cos(l),Math.sin(l),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new vt(i,3));let r=new Te({fog:!1,toneMapped:!1});this.cone=new rn(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);let t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle);this.cone.scale.set(e,e,t),lf.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(lf),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}},ei=new T,No=new Dt,Ll=new Dt,qh=class extends rn{constructor(t){let e=Ap(t),n=new zt,i=[],r=[],o=new ut(0,0,1),a=new ut(0,1,0);for(let l=0;l<e.length;l++){let h=e[l];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(o.r,o.g,o.b),r.push(a.r,a.g,a.b))}n.setAttribute("position",new vt(i,3)),n.setAttribute("color",new vt(r,3));let c=new Te({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,c),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(t){let e=this.bones,n=this.geometry,i=n.getAttribute("position");Ll.copy(this.root.matrixWorld).invert();for(let r=0,o=0;r<e.length;r++){let a=e[r];a.parent&&a.parent.isBone&&(No.multiplyMatrices(Ll,a.matrixWorld),ei.setFromMatrixPosition(No),i.setXYZ(o,ei.x,ei.y,ei.z),No.multiplyMatrices(Ll,a.parent.matrixWorld),ei.setFromMatrixPosition(No),i.setXYZ(o+1,ei.x,ei.y,ei.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}dispose(){this.geometry.dispose(),this.material.dispose()}};function Ap(s){let t=[];s.isBone===!0&&t.push(s);for(let e=0;e<s.children.length;e++)t.push.apply(t,Ap(s.children[e]));return t}var Yh=class extends pe{constructor(t,e,n){let i=new Nr(e,4,2),r=new Sn({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=t,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}},Ny=new T,hf=new ut,uf=new ut,Zh=class extends jt{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";let i=new Dr(e);i.rotateY(Math.PI*.5),this.material=new Sn({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);let r=i.getAttribute("position"),o=new Float32Array(r.count*3);i.setAttribute("color",new Qt(o,3)),this.add(new pe(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){let t=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{let e=t.geometry.getAttribute("color");hf.copy(this.light.color),uf.copy(this.light.groundColor);for(let n=0,i=e.count;n<i;n++){let r=n<i/2?hf:uf;e.setXYZ(n,r.r,r.g,r.b)}e.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),t.lookAt(Ny.setFromMatrixPosition(this.light.matrixWorld).negate())}},Jh=class extends rn{constructor(t=10,e=10,n=4473924,i=8947848){n=new ut(n),i=new ut(i);let r=e/2,o=t/e,a=t/2,c=[],l=[];for(let d=0,f=0,m=-a;d<=e;d++,m+=o){c.push(-a,0,m,a,0,m),c.push(m,0,-a,m,0,a);let _=d===r?n:i;_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3}let h=new zt;h.setAttribute("position",new vt(c,3)),h.setAttribute("color",new vt(l,3));let u=new Te({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},$h=class extends rn{constructor(t=10,e=16,n=8,i=64,r=4473924,o=8947848){r=new ut(r),o=new ut(o);let a=[],c=[];if(e>1)for(let u=0;u<e;u++){let d=u/e*(Math.PI*2),f=Math.sin(d)*t,m=Math.cos(d)*t;a.push(0,0,0),a.push(f,0,m);let _=u&1?r:o;c.push(_.r,_.g,_.b),c.push(_.r,_.g,_.b)}for(let u=0;u<n;u++){let d=u&1?r:o,f=t-t/n*u;for(let m=0;m<i;m++){let _=m/i*(Math.PI*2),g=Math.sin(_)*f,p=Math.cos(_)*f;a.push(g,0,p),c.push(d.r,d.g,d.b),_=(m+1)/i*(Math.PI*2),g=Math.sin(_)*f,p=Math.cos(_)*f,a.push(g,0,p),c.push(d.r,d.g,d.b)}}let l=new zt;l.setAttribute("position",new vt(a,3)),l.setAttribute("color",new vt(c,3));let h=new Te({vertexColors:!0,toneMapped:!1});super(l,h),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},df=new T,Fo=new T,ff=new T,Kh=class extends jt{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",e===void 0&&(e=1);let i=new zt;i.setAttribute("position",new vt([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));let r=new Te({fog:!1,toneMapped:!1});this.lightPlane=new bn(i,r),this.add(this.lightPlane),i=new zt,i.setAttribute("position",new vt([0,0,0,0,0,1],3)),this.targetLine=new bn(i,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),df.setFromMatrixPosition(this.light.matrixWorld),Fo.setFromMatrixPosition(this.light.target.matrixWorld),ff.subVectors(Fo,df),this.lightPlane.lookAt(Fo),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Fo),this.targetLine.scale.z=ff.length()}},Oo=new T,de=new Es,Qh=class extends rn{constructor(t){let e=new zt,n=new Te({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],o={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(m,_){c(m),c(_)}function c(m){i.push(0,0,0),r.push(0,0,0),o[m]===void 0&&(o[m]=[]),o[m].push(i.length/3-1)}e.setAttribute("position",new vt(i,3)),e.setAttribute("color",new vt(r,3)),super(e,n),this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();let l=new ut(16755200),h=new ut(16711680),u=new ut(43775),d=new ut(16777215),f=new ut(3355443);this.setColors(l,h,u,d,f)}setColors(t,e,n,i,r){let a=this.geometry.getAttribute("color");a.setXYZ(0,t.r,t.g,t.b),a.setXYZ(1,t.r,t.g,t.b),a.setXYZ(2,t.r,t.g,t.b),a.setXYZ(3,t.r,t.g,t.b),a.setXYZ(4,t.r,t.g,t.b),a.setXYZ(5,t.r,t.g,t.b),a.setXYZ(6,t.r,t.g,t.b),a.setXYZ(7,t.r,t.g,t.b),a.setXYZ(8,t.r,t.g,t.b),a.setXYZ(9,t.r,t.g,t.b),a.setXYZ(10,t.r,t.g,t.b),a.setXYZ(11,t.r,t.g,t.b),a.setXYZ(12,t.r,t.g,t.b),a.setXYZ(13,t.r,t.g,t.b),a.setXYZ(14,t.r,t.g,t.b),a.setXYZ(15,t.r,t.g,t.b),a.setXYZ(16,t.r,t.g,t.b),a.setXYZ(17,t.r,t.g,t.b),a.setXYZ(18,t.r,t.g,t.b),a.setXYZ(19,t.r,t.g,t.b),a.setXYZ(20,t.r,t.g,t.b),a.setXYZ(21,t.r,t.g,t.b),a.setXYZ(22,t.r,t.g,t.b),a.setXYZ(23,t.r,t.g,t.b),a.setXYZ(24,e.r,e.g,e.b),a.setXYZ(25,e.r,e.g,e.b),a.setXYZ(26,e.r,e.g,e.b),a.setXYZ(27,e.r,e.g,e.b),a.setXYZ(28,e.r,e.g,e.b),a.setXYZ(29,e.r,e.g,e.b),a.setXYZ(30,e.r,e.g,e.b),a.setXYZ(31,e.r,e.g,e.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,i.r,i.g,i.b),a.setXYZ(39,i.r,i.g,i.b),a.setXYZ(40,r.r,r.g,r.b),a.setXYZ(41,r.r,r.g,r.b),a.setXYZ(42,r.r,r.g,r.b),a.setXYZ(43,r.r,r.g,r.b),a.setXYZ(44,r.r,r.g,r.b),a.setXYZ(45,r.r,r.g,r.b),a.setXYZ(46,r.r,r.g,r.b),a.setXYZ(47,r.r,r.g,r.b),a.setXYZ(48,r.r,r.g,r.b),a.setXYZ(49,r.r,r.g,r.b),a.needsUpdate=!0}update(){let t=this.geometry,e=this.pointMap,n=1,i=1;de.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),me("c",e,t,de,0,0,-1),me("t",e,t,de,0,0,1),me("n1",e,t,de,-n,-i,-1),me("n2",e,t,de,n,-i,-1),me("n3",e,t,de,-n,i,-1),me("n4",e,t,de,n,i,-1),me("f1",e,t,de,-n,-i,1),me("f2",e,t,de,n,-i,1),me("f3",e,t,de,-n,i,1),me("f4",e,t,de,n,i,1),me("u1",e,t,de,n*.7,i*1.1,-1),me("u2",e,t,de,-n*.7,i*1.1,-1),me("u3",e,t,de,0,i*2,-1),me("cf1",e,t,de,-n,0,1),me("cf2",e,t,de,n,0,1),me("cf3",e,t,de,0,-i,1),me("cf4",e,t,de,0,i,1),me("cn1",e,t,de,-n,0,-1),me("cn2",e,t,de,n,0,-1),me("cn3",e,t,de,0,-i,-1),me("cn4",e,t,de,0,i,-1),t.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}};function me(s,t,e,n,i,r,o){Oo.set(i,r,o).unproject(n);let a=t[s];if(a!==void 0){let c=e.getAttribute("position");for(let l=0,h=a.length;l<h;l++)c.setXYZ(a[l],Oo.x,Oo.y,Oo.z)}}var Bo=new Ae,jh=class extends rn{constructor(t,e=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),r=new zt;r.setIndex(new Qt(n,1)),r.setAttribute("position",new Qt(i,3)),super(r,new Te({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(t){if(t!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Bo.setFromObject(this.object),Bo.isEmpty())return;let e=Bo.min,n=Bo.max,i=this.geometry.attributes.position,r=i.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=e.x,r[4]=n.y,r[5]=n.z,r[6]=e.x,r[7]=e.y,r[8]=n.z,r[9]=n.x,r[10]=e.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=e.z,r[15]=e.x,r[16]=n.y,r[17]=e.z,r[18]=e.x,r[19]=e.y,r[20]=e.z,r[21]=n.x,r[22]=e.y,r[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}},tu=class extends rn{constructor(t,e=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new zt;r.setIndex(new Qt(n,1)),r.setAttribute("position",new vt(i,3)),super(r,new Te({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){let e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){this.geometry.dispose(),this.material.dispose()}},eu=class extends bn{constructor(t,e=1,n=16776960){let i=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new zt;o.setAttribute("position",new vt(r,3)),o.computeBoundingSphere(),super(o,new Te({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=t,this.size=e;let a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],c=new zt;c.setAttribute("position",new vt(a,3)),c.computeBoundingSphere(),this.add(new pe(c,new Sn({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(t){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(t)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}},pf=new T,zo,Ul,nu=class extends jt{constructor(t=new T(0,0,1),e=new T(0,0,0),n=1,i=16776960,r=n*.2,o=r*.2){super(),this.type="ArrowHelper",zo===void 0&&(zo=new zt,zo.setAttribute("position",new vt([0,0,0,0,1,0],3)),Ul=new Rs(0,.5,1,5,1),Ul.translate(0,-.5,0)),this.position.copy(e),this.line=new bn(zo,new Te({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new pe(Ul,new Sn({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,o)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{pf.set(t.z,0,-t.x).normalize();let e=Math.acos(t.y);this.quaternion.setFromAxisAngle(pf,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},iu=class extends rn{constructor(t=1){let e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new zt;i.setAttribute("position",new vt(e,3)),i.setAttribute("color",new vt(n,3));let r=new Te({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(t,e,n){let i=new ut,r=this.geometry.attributes.color.array;return i.set(t),i.toArray(r,0),i.toArray(r,3),i.set(e),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}},su=class{constructor(){this.type="ShapePath",this.color=new ut,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new zi,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,r,o){return this.currentPath.bezierCurveTo(t,e,n,i,r,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(p){let y=[];for(let v=0,x=p.length;v<x;v++){let P=p[v],w=new kn;w.curves=P.curves,y.push(w)}return y}function n(p,y){let v=y.length,x=!1;for(let P=v-1,w=0;w<v;P=w++){let C=y[P],R=y[w],b=R.x-C.x,M=R.y-C.y;if(Math.abs(M)>Number.EPSILON){if(M<0&&(C=y[w],b=-b,R=y[P],M=-M),p.y<C.y||p.y>R.y)continue;if(p.y===C.y){if(p.x===C.x)return!0}else{let L=M*(p.x-C.x)-b*(p.y-C.y);if(L===0)return!0;if(L<0)continue;x=!x}}else{if(p.y!==C.y)continue;if(R.x<=p.x&&p.x<=C.x||C.x<=p.x&&p.x<=R.x)return!0}}return x}let i=yn.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,c,l=[];if(r.length===1)return a=r[0],c=new kn,c.curves=a.curves,l.push(c),l;let h=!i(r[0].getPoints());h=t?!h:h;let u=[],d=[],f=[],m=0,_;d[m]=void 0,f[m]=[];for(let p=0,y=r.length;p<y;p++)a=r[p],_=a.getPoints(),o=i(_),o=t?!o:o,o?(!h&&d[m]&&m++,d[m]={s:new kn,p:_},d[m].s.curves=a.curves,h&&m++,f[m]=[]):f[m].push({h:a,p:_[0]});if(!d[0])return e(r);if(d.length>1){let p=!1,y=0;for(let v=0,x=d.length;v<x;v++)u[v]=[];for(let v=0,x=d.length;v<x;v++){let P=f[v];for(let w=0;w<P.length;w++){let C=P[w],R=!0;for(let b=0;b<d.length;b++)n(C.p,d[b].p)&&(v!==b&&y++,R?(R=!1,u[b].push(C)):p=!0);R&&u[v].push(C)}}y>0&&p===!1&&(f=u)}let g;for(let p=0,y=d.length;p<y;p++){c=d[p].s,l.push(c),g=f[p];for(let v=0,x=g.length;v<x;v++)c.holes.push(g[v].h)}return l}},ru=class extends sn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}},ou=class extends Ze{constructor(t=1,e=1,n=1,i={}){console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'),super(t,e,{...i,count:n}),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dc);function Cp(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,c=new zt,l=0;for(let h=0;h<s.length;++h){let u=s[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0,u=[];for(let d=0;d<s.length;++d){let f=s[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=s[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Tp(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let _=0;_<o[h].length;++_)f.push(o[h][_][d]);let m=Tp(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}return c}function Tp(s){let t,e,n,i=-1,r=0;for(let l=0;l<s.length;++l){let h=s[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Qt(o,e,n),c=0;for(let l=0;l<s.length;++l){let h=s[l];if(h.isInterleavedBufferAttribute){let u=c/e;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<e;m++){let _=h.getComponent(d,m);a.setComponent(d+u,m,_)}}else o.set(h.array,c);c+=h.count*e}return i!==void 0&&(a.gpuType=i),a}return Op(Fy);})();


/*
 CNATION TACTICS: EDITABLE GAME CODE BELOW
 Version 0.6.37
*/
(()=>{
const THREE=CNATION3D;const {mergeGeometries}=CNATION3D;
// cnation TACTICS 0.6.37. All art and sounds are procedural. No external assets.
const $=s=>document.querySelector(s), clamp=(v,a,b)=>Math.max(a,Math.min(b,v)), copy=o=>JSON.parse(JSON.stringify(o)), sleep=ms=>new Promise(r=>setTimeout(r,ms/(save?.settings.speed||1))), dist=(a,b)=>Math.abs(a.x-b.x)+Math.abs(a.z-b.z), key=(x,z)=>`${x},${z}`;
const HEROES=[
{id:'kyle',name:'카일',icon:'⚔',job:['검사','기사','성기사'],branch:['용병','소드마스터'],color:0x438fac,hair:0x855537,hp:108,mp:26,atk:25,def:16,mag:10,res:12,spd:12,move:4,jump:1,crit:.05,eva:.03,range:1,join:0,skills:['flame','break','windblade','valor','arcaslash'],passive:['강인함: HP +10%','검의 의지: 치명타 +10%']},
{id:'ria',name:'리아',icon:'✦',job:['마도사','현자','아르카 메이지'],color:0xb998d0,hair:0xe4e4ee,hp:74,mp:55,atk:10,def:8,mag:30,res:22,spd:11,move:3,jump:1,crit:.05,eva:.04,range:2,join:0,skills:['fire','ice','thunder','storm','meteor'],passive:['에테르 순환: 매 턴 MP +4','마력 공명: 마법 피해 +15%']},
{id:'bran',name:'브란',icon:'⬟',job:['전사','수호기사','가디언'],color:0xb88752,hair:0x66492e,hp:150,mp:30,atk:24,def:26,mag:9,res:15,spd:8,move:3,jump:1,crit:.04,eva:.01,range:1,join:1,skills:['bash','taunt','guard','quake','fortress'],passive:['강철 갑옷: DEF +15%','불굴: 최대 HP +20%']},
{id:'sera',name:'세라',icon:'➶',job:['궁수','레인저','호크아이'],color:0x7baf75,hair:0xe2bc69,hp:88,mp:35,atk:26,def:11,mag:13,res:13,spd:16,move:4,jump:2,crit:.12,eva:.08,range:4,minRange:2,join:2,skills:['pierce','poison','volley','windstep','hawk'],passive:['고지 사격: 고지 피해 추가 +15%','정밀 사격: 명중 +10%']},
{id:'luna',name:'루나',icon:'✧',job:['사제','성직자','세인트'],color:0xe9d9a0,hair:0xcf8d85,hp:82,mp:62,atk:12,def:12,mag:26,res:25,spd:10,move:3,jump:1,crit:.04,eva:.04,range:2,join:3,skills:['heal','purify','blessing','holy','miracle'],passive:['자애: 회복량 +15%','축복의 샘: 매 턴 MP +5']},
{id:'nero',name:'네로',icon:'◈',job:['도적','어쌔신','섀도우'],color:0x616c99,hair:0x33394d,hp:90,mp:36,atk:28,def:10,mag:15,res:14,spd:22,move:6,jump:2,crit:.18,eva:.17,range:1,join:4,skills:['backstab','sleep','silence','shadowstep','eclipse'],passive:['암습: 후방 피해 추가 +25%','잔상: 회피 +10%']}
];
const SKILLS={
flame:{name:'화염검',mp:7,type:'physical',power:1.3,range:1,area:0,element:'fire',status:'burn',chance:.6},
break:{name:'갑옷 가르기',mp:9,type:'physical',power:1.4,range:1,debuff:'def'},
windblade:{name:'바람의 칼날',mp:12,type:'physical',power:1.25,range:3,area:1,element:'wind'},
valor:{name:'용기의 맹세',mp:10,type:'buff',range:0,area:2,buff:'atk'},
arcaslash:{name:'아르카 참격',mp:22,type:'physical',power:2.2,range:3,area:1,heightRange:99,element:'light'},
fire:{name:'파이어',mp:8,type:'magic',power:1.25,range:4,area:1,heightRange:1,element:'fire',status:'burn',chance:.3},
ice:{name:'프로스트',mp:10,type:'magic',power:1.15,range:4,area:1,heightRange:2,element:'ice',status:'freeze',chance:.45},
thunder:{name:'썬더',mp:13,type:'magic',power:1.6,range:5,area:0,heightRange:99,element:'thunder',status:'stun',chance:.4},
storm:{name:'파이어 스톰',mp:20,type:'magic',power:1.35,range:4,area:2,shape:'square',heightRange:1,element:'fire'},
meteor:{name:'메테오',mp:32,type:'magic',power:2.2,range:6,area:2,heightRange:99,element:'fire'},
bash:{name:'실드 배시',mp:6,type:'physical',power:1.1,range:1,status:'stun',chance:.6},
taunt:{name:'도발',mp:8,type:'taunt',range:0,area:3},
guard:{name:'수호의 진',mp:12,type:'buff',range:0,area:2,buff:'def'},
quake:{name:'대지 충격',mp:16,type:'physical',power:1.4,range:1,area:1,heightRange:2},
fortress:{name:'철벽의 성채',mp:22,type:'buff',range:0,area:5,buff:'fortress'},
pierce:{name:'관통 사격',mp:7,type:'physical',power:1.5,range:5,minRange:2,ignore:.5},
poison:{name:'독화살',mp:8,type:'physical',power:1.1,range:4,status:'poison',chance:1},
volley:{name:'화살비',mp:14,type:'physical',power:1.1,range:5,area:1,heightRange:99},
windstep:{name:'바람 걸음',mp:9,type:'buff',range:0,area:1,buff:'speed',element:'wind'},
hawk:{name:'매의 심판',mp:25,type:'physical',power:2.4,range:7,heightRange:99,ignore:.7},
heal:{name:'힐',mp:7,type:'heal',power:1.8,range:4,element:'light'},
purify:{name:'정화',mp:6,type:'cleanse',range:4,area:1,element:'light'},
blessing:{name:'빛의 축복',mp:12,type:'buff',range:3,area:1,buff:'atk',element:'light'},
holy:{name:'홀리',mp:14,type:'magic',power:1.5,range:4,area:1,heightRange:2,element:'light'},
miracle:{name:'생명의 기적',mp:30,type:'heal',power:2.5,range:5,area:3,heightRange:99,cleanse:true,element:'light'},
backstab:{name:'그림자 찌르기',mp:7,type:'physical',power:1.5,range:1,ignore:.3},
sleep:{name:'수면 단검',mp:9,type:'physical',power:1,range:2,status:'sleep',chance:.7},
silence:{name:'침묵의 표식',mp:10,type:'magic',power:1.2,range:3,status:'silence',chance:1,element:'dark'},
shadowstep:{name:'잔상',mp:9,type:'buff',range:0,area:0,buff:'eva',element:'dark'},
eclipse:{name:'월식',mp:25,type:'physical',power:2.1,range:2,area:1,heightRange:99,element:'dark',status:'poison',chance:1}
};
const ELEMENT={fire:'불',water:'물',ice:'물·냉기',thunder:'번개',wind:'바람',light:'빛',dark:'암흑'}, STATUS={poison:'독',burn:'화상',freeze:'빙결',silence:'침묵',sleep:'수면',stun:'기절',atk:'공격↑',def:'방어↑',speed:'이동↑',eva:'회피↑',fortress:'철벽',defdown:'방어↓',taunt:'도발'};
const elementFamily=e=>e==='ice'?'water':e;
function magicAffinity(attack,target){const a=elementFamily(attack),b=elementFamily(target),advantage={water:'fire',fire:'wind',wind:'water'};return !a||!b||!advantage[a]||!advantage[b]?1:advantage[a]===b?1.5:advantage[b]===a?0.5:1;}
const UNLOCK=[1,4,8,14,20];
const CHAPTERS=[
['PROLOGUE','깨어난 빛','국경 마을 에린',['유적의 문','잠든 소녀','마을로 돌아가는 길'],[['카일','이런 곳에 사람이… 괜찮아? 내 목소리 들려?'],['리아','리아… 내 이름은 리아. 그 외에는 아무것도 기억나지 않아.'],['카일','뒤에서 뭔가 움직여. 내 곁에 있어. 함께 빠져나가자.']]],
['CHAPTER 01','국경의 불꽃','에린 남문',['불타는 파수대','남문의 방패','국경을 넘어서'],[['브란','제국군이 마을을 포위했다. 퇴로는 내가 열겠다.'],['리아','저 병기들… 나를 찾고 있는 것 같아.'],['카일','누구에게도 넘기지 않아. 모두 살아서 나간다.']]],
['CHAPTER 02','도망자','회색 산맥',['산길의 매복','바람의 궁수','흔들리는 다리'],[['세라','그 길은 막혔어. 살아서 산을 넘고 싶다면 따라와.'],['카일','우릴 왜 도와주는 거지?'],['세라','제국이 태운 마을이 너희 마을뿐인 줄 알아?']]],
['CHAPTER 03','고대의 숲','엘렌 숲',['정령의 속삭임','오염된 샘','숲의 심장'],[['루나','정령들이 울고 있어요. 에테르의 흐름이 뒤틀렸어요.'],['리아','이 숲의 노래… 어디선가 들었어.'],['루나','당신을 두려워하는 게 아니에요. 기다리고 있었던 거예요.']]],
['CHAPTER 04','왕도의 그림자','왕도 레온',['지붕 위의 추적','봉인된 기록','왕의 침묵'],[['네로','왕궁 기록에 네 이름이 있더라. 백 년 전 문서에.'],['리아','내가… 백 년 전에?'],['네로','답을 원하면 지하 서고로 와. 경비병들은 알아서 피하고.']]],
['CHAPTER 05','두 왕국','벨른 평원',['갈라진 깃발','연합의 방어선','새벽의 진군'],[['브란','두 왕국이 등을 돌린 사이 제국은 코어를 깨우고 있다.'],['세라','왕들이 못 정하면 우리가 길을 열면 돼.'],['카일','사람들을 지키자. 어느 깃발 아래에 있든.']]],
['CHAPTER 06','아르카 유적','아르카 외곽',['강철의 기억','에테르 수로','봉인의 문'],[['리아','나는 병기가 아니야. 병기를 멈추기 위한 열쇠였어.'],['루나','그렇다면 이번에도 멈출 수 있어요.'],['카일','과거가 널 정하게 두지 마. 지금의 선택은 네 거야.']]],
['CHAPTER 07','배신자','검은 첨탑',['부서진 맹세','거짓된 명령','첨탑의 진실'],[['네로','연합군의 좌표를 넘긴 건 왕의 고문이었어.'],['브란','우리를 미끼로 썼다는 건가.'],['리아','코어가 모든 전장의 에테르를 흡수하고 있어. 전쟁 자체가 함정이야.']]],
['CHAPTER 08','제국 수도','북부 제국 아스켈',['제국의 성문','황혼의 광장','왕좌 너머'],[['세라','성문이 열렸어. 이젠 물러설 곳이 없어.'],['카일','우린 제국을 무너뜨리러 온 게 아니야. 전쟁을 끝내러 왔어.'],['리아','코어의 목소리가 가까워지고 있어. 서둘러야 해.']]],
['FINAL','마지막 아르카','코어의 심층',['기억의 회랑','여섯 개의 빛','마지막 아르카'],[['리아','다시 나를 봉인하면 모든 걸 멈출 수 있어.'],['카일','그건 백 년 전의 답이야. 이번에는 혼자가 아니잖아.'],['리아','응. 이번에는… 모두 함께 돌아가자.']]]
];
const BOSS_NAMES=['','제국의 집행관','산맥의 폭군','타락한 수호목','그림자 재상','전쟁의 골렘','아르카 감시자','검은 대공','황제의 잔영'];
const BOSS_PROFILES={
 1:{model:'knight',color:0x925d61,element:'fire',wave:'집행의 화염',status:'burn',summon:3,radius:1,power:1.3,finisher:'붉은 판결'},
 2:{model:'golem',color:0x819cae,element:'ice',wave:'빙벽 붕괴',status:'freeze',summon:2,radius:2,power:1.2,finisher:'설산의 격돌'},
 3:{model:'treant',color:0x61876b,element:'wind',wave:'독성 포자',status:'poison',summon:8,radius:2,power:1.15,finisher:'오염된 뿌리'},
 4:{model:'ghost',color:0x786888,element:'dark',wave:'침묵의 장막',status:'silence',summon:5,radius:1,power:1.45,finisher:'그림자 칙령'},
 5:{model:'golem',color:0x8d8580,element:'thunder',wave:'전쟁 포격',status:'stun',summon:3,radius:2,power:1.35,finisher:'철의 폭격'},
 6:{model:'sentinel',color:0x759fa1,element:'thunder',wave:'감시 광선',status:'silence',summon:6,radius:1,power:1.55,finisher:'과부하 방출'},
 7:{model:'dragon',color:0x514e71,element:'dark',wave:'암흑 숨결',status:'poison',summon:8,radius:2,power:1.4,finisher:'검은 날개의 추락'},
 8:{model:'knight',color:0xc3a77b,element:'light',wave:'왕권의 섬광',status:'stun',summon:4,radius:1,power:1.65,finisher:'황제의 선고'},
 9:{model:'arcacore',color:0xa9c7bd,element:'light',wave:'아르카 공명',status:'stun',summon:9,radius:2,power:1.7,finisher:'코어 폭주'}
};
const SIDE_MISSIONS=[
 [{name:'유적의 잔향',goal:'defeat',focus:0},{name:'사라진 보급대',goal:'reach',focus:1}],
 [{name:'잿더미의 약속',goal:'survive',focus:3},{name:'남문의 잔불',goal:'reach',focus:1}],
 [{name:'바람길 정찰',goal:'reach',focus:2},{name:'협곡의 피난민',goal:'survive',focus:4}],
 [{name:'오염된 뿌리',goal:'defeat',focus:8},{name:'숲의 샘을 지켜라',goal:'survive',focus:0}],
 [{name:'그림자 문서',goal:'reach',focus:5},{name:'밤의 연락망',goal:'defeat',focus:4}],
 [{name:'갈라진 전선',goal:'survive',focus:3}],
 [{name:'무너진 수로',goal:'reach',focus:6}],
 [{name:'배신자의 흔적',goal:'defeat',focus:5}],
 [{name:'수도의 피난길',goal:'survive',focus:3}],
 [{name:'마지막 에테르',goal:'reach',focus:9}]
];
const STAGE_DIALOGUES={
 c0s0:[['카일','이런 곳에 사람이… 괜찮아? 내 목소리 들려?'],['리아','리아… 내 이름은 리아. 그 외에는 아무것도 기억나지 않아.'],['카일','문이 열렸어. 움직이는 병기를 막고 함께 나가자.']],
 c0s1:[['리아','안쪽에 잠든 기록이 있어. 누군가 내 이름을 부르는 것 같아.'],['카일','기억을 찾더라도 무리하지 마. 내가 앞에서 길을 열게.']],
 c0s2:[['카일','에린으로 돌아가는 길에 병기들이 몰렸어. 마을까지 끌고 갈 수는 없어.'],['리아','여기서 막자. 내가 배운 마법을 시험해 볼게.']],
 c0q0:[['리아','유적 주변의 에테르 조각이 몬스터를 불러 모으고 있어.'],['카일','조각을 모으는 사람들을 위해 주변을 정리하자.']],
 c0q1:[['카일','보급대가 지나간 흔적이 여기서 끊겼어.'],['리아','저편의 신호까지 가 보면 살아남은 사람을 찾을 수 있을 거야.']],
 c1s0:[['브란','파수대가 불타고 있다. 내가 방패를 들 테니 퇴로를 확보해.'],['카일','우리가 버티는 동안 주민들을 먼저 보내자.']],
 c1s1:[['브란','남문을 지키는 병사들이 아직 후퇴하지 못했다.'],['리아','조금만 더 버티면 모두 빠져나갈 수 있어.']],
 c1s2:[['카일','국경 검문소까지 왔어. 여기만 지나면 제국의 추격을 늦출 수 있어.'],['브란','길을 뚫고 끝까지 함께 간다.']],
 c1q0:[['브란','불길 속에 남은 사람들의 약속을 지켜야 한다.'],['카일','증원군이 오기 전까지 이 자리를 사수하자.']],
 c1q1:[['리아','남문 봉화가 아직 꺼지지 않았어.'],['브란','봉화대에 도착하면 흩어진 병사들이 길을 찾을 수 있다.']],
 c1b:[['집행관','리아를 넘겨라. 제국의 명령은 철회되지 않는다.'],['카일','사람을 물건처럼 부르는 명령이라면 여기서 끝내겠어.']],
 c2s0:[['세라','산길에 매복이 있어. 바람이 멎은 곳을 조심해.'],['카일','우리가 먼저 자리를 잡고 포위를 끊자.']],
 c2s1:[['세라','산등성이에서 제국 정찰병이 신호를 보내고 있어.'],['리아','신호를 끊으면 추격대가 길을 잃을 거야.']],
 c2s2:[['세라','다리가 흔들려. 반대편 표식에 먼저 닿아야 해.'],['카일','뒤는 내가 막을게. 모두 차례대로 건너.']],
 c2q0:[['세라','바람길 표식이 지워졌어. 정찰 지점까지 가서 다시 세워야 해.'],['리아','높은 곳을 지키는 적부터 살펴보자.']],
 c2q1:[['세라','피난민들이 협곡 아래에 숨어 있어.'],['카일','추격대가 지나갈 때까지 이 입구를 지키자.']],
 c2b:[['폭군','크르르… 산을 넘는 자는 모두 내 먹이다.'],['세라','놈이 고지를 차지했어. 얼음 공격을 피하며 틈을 찾아.']],
 c3s0:[['루나','숲의 정령들이 같은 말을 반복해요. 뿌리 아래에 독이 스며들었다고.'],['리아','흐름을 따라가면 오염의 근원을 찾을 수 있어.']],
 c3s1:[['루나','샘물이 어두워졌어요. 이대로면 마을까지 퍼져요.'],['브란','주변의 적을 몰아내고 정화할 시간을 벌자.']],
 c3s2:[['리아','숲의 심장에서 코어와 닮은 맥박이 느껴져.'],['루나','두려워도 들어가야 해요. 정령들이 우리를 기다려요.']],
 c3q0:[['루나','썩은 뿌리가 길마다 솟아나고 있어요.'],['카일','오염이 번지기 전에 뿌리 주변의 적을 없애자.']],
 c3q1:[['루나','샘을 정화하는 동안 저는 움직일 수 없어요.'],['브란','그럼 우리가 여기서 버틴다. 한 발도 넘겨주지 마.']],
 c3b:[['수호목','숲을 해친 자여… 뿌리 속으로 돌아가라.'],['루나','오염 때문에 우리를 구별하지 못해요. 쓰러뜨린 뒤 정화해야 해요.']],
 c4s0:[['네로','왕궁 지붕에 감시자가 깔렸어. 아래로 내려가면 포위당한다.'],['세라','그럼 위에서 먼저 길을 확보하자.']],
 c4s1:[['네로','봉인된 기록은 서고 안쪽에 있어. 왕의 허가를 기다릴 시간은 없어.'],['리아','내 이름이 적힌 페이지를 직접 확인할게.']],
 c4s2:[['카일','왕은 리아의 기록을 알고도 숨겼어. 이유를 들어야겠어.'],['네로','침묵시키려는 호위병부터 지나가야 해.']],
 c4q0:[['네로','서고의 사본이 비밀 통로로 옮겨지고 있어.'],['리아','기록이 사라지기 전에 끝 지점까지 가자.']],
 c4q1:[['네로','연락책이 모두 끊겼어. 그림자 재상의 부하가 움직인 거야.'],['세라','놈들의 신호망을 여기서 끊자.']],
 c4b:[['재상','진실은 왕국을 무너뜨린다. 너희에게 보여 줄 수 없어.'],['네로','그 말로 사람을 가두는 시대는 끝났어.']],
 c5s0:[['브란','양쪽 군대가 서로를 적으로 보고 있다.'],['카일','코어가 진짜 위협이라는 걸 보여 줄 틈을 만들자.']],
 c5s1:[['루나','연합 진지가 무너지고 있어요. 부상자들이 뒤에 남아 있어요.'],['브란','후퇴가 끝날 때까지 전선을 지킨다.']],
 c5s2:[['세라','새벽에 병기 행렬이 움직여. 지금 길을 열어야 해.'],['리아','코어로 향하는 수송로를 끊으면 시간을 벌 수 있어.']],
 c5q0:[['브란','갈라진 전선 사이에 민간인이 갇혔다.'],['카일','누구의 깃발인지 묻지 말고 구조가 끝날 때까지 버티자.']],
 c5b:[['골렘','전쟁 명령 수신. 전장을 소거한다.'],['리아','저 장갑은 정면에서 버티기 어려워. 빈틈이 생기는 순간을 노려.']],
 c6s0:[['리아','유적 벽에 백 년 전 전쟁의 기록이 남아 있어.'],['카일','기억을 되찾는 동안 병기가 다가오지 못하게 하자.']],
 c6s1:[['루나','에테르 수로가 넘치고 있어요. 다리를 건너 제어 장치에 닿아야 해요.'],['네로','물길을 피해 가장 짧은 길을 찾을게.']],
 c6s2:[['리아','봉인의 문 너머에 코어의 목소리가 있어.'],['카일','문을 열기 전에 경비 병기부터 멈추자.']],
 c6q0:[['네로','수로의 조절판이 무너졌어. 반대편 장치까지 갈 길은 하나야.'],['루나','흐름이 커지기 전에 도착해야 해요.']],
 c6b:[['감시자','인가되지 않은 접근. 정화 절차를 시작한다.'],['리아','번개 충전이 보이면 흩어져. 패턴을 읽으면 멈출 수 있어.']],
 c7s0:[['브란','우리가 믿었던 명령이 거짓이었다. 하지만 남은 병사들은 몰라.'],['카일','그들을 모두 적으로 만들기 전에 길을 열자.']],
 c7s1:[['네로','좌표를 넘긴 흔적은 첨탑 위층에 남아 있어.'],['세라','위에서 내려오는 공격을 피하며 올라가자.']],
 c7s2:[['리아','코어가 전장의 에테르를 흡수하고 있었어.'],['카일','그 사실을 가지고 반드시 살아서 나가야 해.']],
 c7q0:[['네로','배신자의 전령이 증거를 태우려 해.'],['브란','도망치기 전에 이곳의 병력을 제압하자.']],
 c7b:[['대공','진실을 알아도 이미 늦었다. 전쟁은 코어의 양식이다.'],['네로','늦었는지는 네가 정하지 않아.']],
 c8s0:[['세라','제국 성문 안쪽에 피난길이 있어. 공격만 하면 주민도 갇혀.'],['카일','문을 열고 병기만 막는다.']],
 c8s1:[['리아','광장의 에테르가 한곳으로 모이고 있어.'],['루나','사람들을 보내는 동안 이 자리를 지켜요.']],
 c8s2:[['카일','왕좌 뒤에 코어로 가는 통로가 있다.'],['브란','마지막 문 앞까지 함께 간다.']],
 c8q0:[['세라','수도 주민들이 아직 광장을 벗어나지 못했어.'],['루나','피난 행렬이 지나갈 때까지 방어선을 유지해요.']],
 c8b:[['잔영','제국의 의지는 영원하다. 누구도 왕좌를 넘지 못한다.'],['카일','왕좌가 아니라 전쟁을 끝내러 왔다.']],
 c9s0:[['리아','회랑마다 내가 잊은 기억이 남아 있어.'],['카일','기억 속에 갇히지 마. 지금 우리는 함께 있어.']],
 c9s1:[['루나','여섯 사람의 에테르가 하나의 길을 만들고 있어요.'],['브란','길이 닫히기 전에 코어를 향해 나아가자.']],
 c9s2:[['리아','나를 다시 봉인하면 멈출 수 있어. 하지만 그건 백 년 전의 답이야.'],['카일','이번에는 모두 함께 돌아간다. 코어를 부수자.']],
 c9q0:[['리아','마지막 에테르 결정이 회랑 끝에서 빛나고 있어.'],['네로','병기보다 먼저 거기에 닿아 길을 고정하자.']]
};
const STAGES=[];let prior=null;
for(let c=0;c<10;c++){
 for(let n=0;n<3;n++){let s={id:`c${c}s${n}`,chapter:c,n,name:CHAPTERS[c][3][n],level:1+c*3+n,kind:'story',prev:prior,goal:n===1&&c%3===1?'survive':n===2&&c%3===2?'reach':'defeat',seed:c*173+n*41+19};if(c===9&&n===2)s.goal='boss';STAGES.push(s);prior=s.id;}
  for(let n=0;n<SIDE_MISSIONS[c].length;n++)STAGES.push({id:`c${c}q${n}`,chapter:c,n,...SIDE_MISSIONS[c][n],level:2+c*3+n,kind:'side',prev:`c${c}s${Math.min(n,1)}`,seed:c*91+n*73+703});
 if(c>0&&c<9){const s={id:`c${c}b`,chapter:c,n:3,name:BOSS_NAMES[c],level:c*3+3,kind:'boss',prev:prior,goal:'boss',seed:c*181+321};STAGES.push(s);prior=s.id;}
}
const MONSTERS=[
{name:'이끼 슬라임',model:'slime',color:0x8cc87d,hp:44,atk:14,def:7,mag:9,res:8,range:1,move:3,element:'wind'},
{name:'고블린',model:'goblin',color:0xb4ab62,hp:63,atk:19,def:9,mag:7,res:7,range:1,move:4},
{name:'서리 늑대',model:'wolf',color:0xafc9d3,hp:60,atk:21,def:9,mag:8,res:10,range:1,move:5,element:'water'},
{name:'제국 보병',model:'knight',color:0x9d7370,hp:78,atk:22,def:16,mag:8,res:10,range:1,move:3},
{name:'제국 석궁병',model:'archer',color:0x807b95,hp:56,atk:23,def:9,mag:8,res:10,range:4,minRange:2,move:3},
{name:'에테르 망령',model:'ghost',color:0xaaa5df,hp:54,atk:14,def:7,mag:24,res:20,range:3,move:3,magic:true,element:'wind',immunity:'physical'},
{name:'수호 골렘',model:'golem',color:0x8e9e93,hp:115,atk:26,def:22,mag:14,res:8,range:1,move:2,immunity:'magic'},
 {name:'화염 정령',model:'flameSpirit',color:0xe4a26c,hp:61,atk:15,def:7,mag:26,res:22,range:3,move:3,magic:true,element:'fire'},
{name:'독거미',model:'spider',color:0x9a76ad,hp:57,atk:20,def:11,mag:12,res:12,range:1,move:5,status:'poison'},
{name:'아르카 비룡',model:'dragon',color:0x6da9a4,hp:110,atk:28,def:17,mag:25,res:20,range:2,move:4,element:'wind'},
{name:'붉은 진흙 슬라임',model:'slime',color:0xb98255,hp:57,atk:17,def:11,mag:8,res:8,range:1,move:3,element:'fire'},
{name:'모래 약탈자',model:'goblin',color:0xc3975f,hp:69,atk:23,def:10,mag:8,res:9,range:1,move:4},
{name:'회오리 매',model:'dragon',color:0x9cbea9,hp:54,atk:22,def:8,mag:19,res:13,range:2,move:5,element:'wind'},
{name:'늪지 사냥꾼',model:'spider',color:0x62866d,hp:65,atk:21,def:12,mag:12,res:13,range:1,move:4,status:'poison',element:'water'},
{name:'잿불 정령',model:'flameSpirit',color:0xd9684b,hp:72,atk:16,def:8,mag:29,res:21,range:3,move:3,magic:true,element:'fire'},
{name:'강철 척후병',model:'knight',color:0x6b8290,hp:83,atk:25,def:18,mag:9,res:11,range:1,move:4},
{name:'사막 궁수',model:'archer',color:0xc49d68,hp:61,atk:26,def:9,mag:9,res:10,range:4,minRange:2,move:3},
{name:'물안개 유령',model:'ghost',color:0x83bac4,hp:61,atk:14,def:8,mag:26,res:20,range:3,move:3,magic:true,element:'water',immunity:'physical'},
{name:'사암 골렘',model:'golem',color:0xc4a478,hp:126,atk:29,def:23,mag:12,res:8,range:1,move:2,immunity:'magic'},
{name:'가시 덩굴병',model:'treant',color:0x79965a,hp:91,atk:25,def:15,mag:16,res:15,range:2,move:2,element:'wind'},
{name:'황혼의 추적자',model:'wolf',color:0x78687e,hp:78,atk:30,def:11,mag:13,res:14,range:1,move:5},
{name:'화염 포격병',model:'archer',color:0xab6656,hp:73,atk:24,def:12,mag:29,res:17,range:4,minRange:2,move:3,magic:true,element:'fire'},
{name:'심연의 파수꾼',model:'sentinel',color:0x587b88,hp:102,atk:29,def:20,mag:23,res:19,range:2,move:3,element:'water'},
{name:'검은 숲 정령',model:'treant',color:0x526c62,hp:94,atk:23,def:16,mag:27,res:18,range:3,move:2,magic:true,element:'wind'}
];
// Integrated encyclopedia, field loot, and equipment. Included inside the game closure.
const TIERS=['Normal','Rare','Epic','Legendary'], SLOT_NAMES=['무기','방어구','악세서리'];
const GEAR=[];
for(let slot=0;slot<3;slot++)for(let tier=0;tier<4;tier++)GEAR.push({id:`gear-${slot}-${tier}`,slot,tier,name:[['여행자의 검','에테르 검','별빛의 검','아르카의 검'],['가죽 갑옷','수호 갑옷','정령의 갑옷','아르카의 갑옷'],['여행자의 부적','에테르 부적','별빛의 부적','아르카의 부적']][slot][tier],bonus:slot===0?{atk:[6,15,27,40][tier],mag:[5,13,24,36][tier]}:slot===1?{def:[5,12,22,34][tier],res:[4,10,19,30][tier]}:{maxHp:[12,30,55,85][tier],crit:[.01,.03,.05,.08][tier],move:tier===3?1:0}});
const PICKUP_NAMES={gold:'골드',weapon:'무기',armor:'방어구',accessory:'악세서리',potion:'회복약'};
const CONSUMABLES={hpSmall:{name:'소형 체력 회복약',stat:'hp',ratio:.25,price:75},hpMedium:{name:'중형 체력 회복약',stat:'hp',ratio:.45,price:150},hpLarge:{name:'대형 체력 회복약',stat:'hp',ratio:.75,price:300},mpSmall:{name:'소형 마력 회복약',stat:'mp',ratio:.3,price:100},mpLarge:{name:'대형 마력 회복약',stat:'mp',ratio:.65,price:230}};
const GEAR_PRICES=[270,975,2700,5700],GEAR_SELL=[65,230,630,1300];
const mapWidth=b=>b.width||b.size,mapHeight=b=>b.height||b.size;
const gearTierForChapter=ch=>Math.min(3,Math.floor((ch+1)/3));
function validInventory(a){return Array.isArray(a)&&a.length<=1000&&new Set(a.map(v=>v.uid)).size===a.length&&a.every(v=>v&&/^loot-[0-9]+$/.test(v.uid)&&GEAR.some(g=>g.id===v.gearId));}
function validLoot(a,b){return Array.isArray(b.tiles)&&Array.isArray(a)&&a.length<=12&&new Set(a.map(v=>key(v.x,v.z))).size===a.length&&a.every(v=>v&&Object.hasOwn(PICKUP_NAMES,v.type)&&Number.isInteger(v.x)&&Number.isInteger(v.z)&&v.x>=0&&v.z>=0&&v.x<mapWidth(b)&&v.z<mapHeight(b)&&b.tiles[v.z*mapWidth(b)+v.x]?.terrain!=='water'&&typeof v.collected==='boolean'&&Number.isInteger(v.amount)&&v.amount>=1&&v.amount<=1000&&(v.gearId===null||GEAR.some(g=>g.id===v.gearId&&g.slot===['weapon','armor','accessory'].indexOf(v.type)))&&(v.type!=='potion'||!v.consumableId||Object.hasOwn(CONSUMABLES,v.consumableId)));}
function migrateLegacyGear(p,inventory,seq){p.equipped??=[null,null,null];for(let slot=0;slot<3;slot++)if((p.equip?.[slot]||0)>0&&!p.equipped[slot]&&inventory.length<1000){const uid=`loot-${++seq.value}`;inventory.push({uid,gearId:`gear-${slot}-${Math.min(3,p.equip[slot])}`});p.equipped[slot]=uid;}p.equip=[0,0,0];}
function pickupLandingTiles(b,count=2){
 const reached=new Set(),living=b.units.filter(u=>u.team==='ally'&&u.hp>0);
 for(const ally of living.length?living:b.units.filter(u=>u.team==='ally')){
  const first=b.tiles[ally.z*mapWidth(b)+ally.x],seen=new Set([key(ally.x,ally.z)]),queue=[first];
  for(let i=0;i<queue.length;i++){
   const t=queue[i];
   for(const [x,z] of [[t.x+1,t.z],[t.x-1,t.z],[t.x,t.z+1],[t.x,t.z-1]]){
    if(x<0||z<0||x>=mapWidth(b)||z>=mapHeight(b))continue;
    const next=b.tiles[z*mapWidth(b)+x],k=key(x,z),cost=next.terrain==='swamp'?3:['forest','scrub','sand'].includes(next.terrain)?2:1;
    if(seen.has(k)||next.terrain==='water'||Math.abs(next.height-t.height)>ally.jump||cost>ally.move)continue;
    seen.add(k);queue.push(next);
   }
  }
  for(const k of seen)reached.add(k);
 }
 const available=b.tiles.filter(t=>reached.has(key(t.x,t.z))&&t.terrain!=='water'&&t.terrain!=='swamp'&&!b.units.some(u=>u.x===t.x&&u.z===t.z));
 const open=available.filter(t=>!['forest','scrub','sand'].includes(t.terrain));
 return open.length>=count?open:available;
}
function repairPickups(b){
 if(!b.pickups?.length)return;
 const candidates=pickupLandingTiles(b,b.pickups.length),safe=new Set(candidates.map(t=>key(t.x,t.z))),used=new Set(b.pickups.map(v=>key(v.x,v.z)));
 for(const item of b.pickups.filter(v=>!v.collected&&!safe.has(key(v.x,v.z)))){
  const old=key(item.x,item.z),spot=candidates.filter(t=>!used.has(key(t.x,t.z))).sort((a,c)=>dist(a,item)-dist(c,item))[0];
  if(!spot)continue;
  used.delete(old);item.x=spot.x;item.z=spot.z;used.add(key(item.x,item.z));
 }
}
function normalizeSave(s){s.skippedSides??=[];s.consumables??={hpSmall:0,hpMedium:s.potions||0,hpLarge:0,mpSmall:0,mpLarge:0};for(const side of STAGES.filter(v=>v.kind==='side'&&!s.completed.includes(v.id))){const next=`c${side.chapter}s${side.n+1}`;if((s.completed.includes(next)||s.battle?.stageId===next||s.retry?.stageId===next)&&!s.skippedSides.includes(side.id))s.skippedSides.push(side.id);}s.inventory??=[];s.lootSeq=Math.max(Number.isSafeInteger(s.lootSeq)?s.lootSeq:0,...s.inventory.map(v=>Number(v.uid.slice(5))));const seq={value:s.lootSeq};for(const p of s.party)migrateLegacyGear(p,s.inventory,seq);s.lootSeq=seq.value;if(s.retry){s.retryGold??=s.gold;s.retryInventory??=copy(s.inventory);s.retryConsumables??={hpSmall:0,hpMedium:s.retryPotions??s.potions??0,hpLarge:0,mpSmall:0,mpLarge:0};s.retryLootSeq=Math.max(Number.isSafeInteger(s.retryLootSeq)?s.retryLootSeq:0,...s.retryInventory.map(v=>Number(v.uid.slice(5))));const retrySeq={value:s.retryLootSeq};for(const p of s.retryParty||[])migrateLegacyGear(p,s.retryInventory,retrySeq);s.retryLootSeq=retrySeq.value;}for(const b of [s.battle,s.retry])if(b){if(s.completed.includes(b.stageId)){b.pickups=[];if(b.mapRules)b.mapRules.itemCount=0;}else if(!b.pickups)b.pickups=makePickups(b,STAGES.find(v=>v.id===b.stageId));else repairPickups(b);}return s;}
function makePickups(b,stage){const count=b.mapRules?.itemCount??0;if(!count)return [];const origin=b.units.find(u=>u.team==='ally')||{x:1,z:1},candidates=pickupLandingTiles(b,count),rand=seeded(((b.mapSeed??stage.seed)^4099)>>>0),near=candidates.slice().sort((a,b)=>dist(a,origin)-dist(b,origin))[0],out=[],tier=gearTierForChapter(stage.chapter),types=b.mapRules?.lootKind==='gold'?['gold']:b.mapRules?.lootKind==='item'?shuffled(['weapon','armor','accessory','potion'],rand).slice(0,1):shuffled(['gold','weapon','armor','accessory','potion'],rand).slice(0,count);for(const [i,type]of types.entries()){const pool=candidates.filter(t=>!out.some(v=>v.x===t.x&&v.z===t.z)).sort((a,b)=>dist(a,origin)-dist(b,origin)),spread=pool.filter(t=>out.every(v=>dist(t,v)>=2)),choices=spread.length?spread:pool,t=i===0?near:choices[Math.floor(rand()*choices.length)];if(!t)continue;const consumableId=type==='potion'?Object.keys(CONSUMABLES)[Math.floor(rand()*Object.keys(CONSUMABLES).length)]:null;out.push({id:`field-${i}`,type,x:t.x,z:t.z,collected:false,amount:type==='gold'?50+stage.level*7:1,gearId:['weapon','armor','accessory'].includes(type)?`gear-${['weapon','armor','accessory'].indexOf(type)}-${tier}`:null,consumableId});}return out;}
function collectPickup(u){if(u.team!=='ally')return;const item=battle.pickups?.find(v=>!v.collected&&v.x===u.x&&v.z===u.z);if(!item)return;if(item.gearId&&save.inventory.length>=1000){toast('보관함이 가득 찼습니다. 야영지에서 장비를 판매해 주세요.');return;}item.collected=true;let message;if(item.type==='gold'){save.gold+=item.amount;message=`골드 +${item.amount} G`;}else if(item.type==='potion'){const id=item.consumableId||'hpMedium';save.consumables[id]=(save.consumables[id]||0)+item.amount;message=`${CONSUMABLES[id].name} +${item.amount}`;}else{const gear=GEAR.find(g=>g.id===item.gearId);save.inventory.push({uid:`loot-${++save.lootSeq}`,gearId:gear.id});message=`${gear.name} 획득 · ${TIERS[gear.tier]}`;}log(`${u.name}: ${message}`);toast(message);floating(u,message,'#ffe2a0');sfx('heal');refreshLoot();}

const SAVE_KEY='cnation-tactics-save-v1';
function validUnitExtras(u){return typeof u.name==='string'&&/^[가-힣A-Za-z0-9 ·_-]{1,40}$/.test(u.name)&&/^[A-Za-z0-9_-]{1,60}$/.test(u.id)&&Number.isFinite(u.mag)&&Number.isFinite(u.res)&&Number.isFinite(u.maxMp)&&u.maxMp>=0&&u.mp>=0&&u.mp<=u.maxMp&&Number.isInteger(u.dir)&&u.dir>=0&&u.dir<=3&&Number.isFinite(u.move)&&u.move>=0&&u.move<=12&&Object.keys(u.status).every(k=>STATUS[k]&&Number.isFinite(u.status[k]))&&(u.team==='enemy'||(u.icon===HEROES.find(h=>h.id===u.heroId)?.icon&&Array.isArray(u.skills)&&u.skills.every(k=>SKILLS[k])));}

// Temporary development mode. Remove this block and set ENABLE_CUSTOM_MODE=false for release.
const ENABLE_CUSTOM_MODE=true, CUSTOM_SAVE_KEY='cnation-tactics-custom-save-v1';
let customMode=false,storyBackup=null,customSelection={chapter:0,stageId:'c0s0',level:0,difficulty:'normal',party:'chapter'};
function activeSaveKey(){return customMode?CUSTOM_SAVE_KEY:SAVE_KEY;}
function validCustomConfig(c){return c&&Number.isInteger(c.chapter)&&c.chapter>=0&&c.chapter<CHAPTERS.length&&STAGES.some(t=>t.id===c.stageId&&t.chapter===c.chapter)&&Number.isInteger(c.level)&&c.level>=0&&c.level<=50&&['story','normal','tactical'].includes(c.difficulty)&&['chapter','all'].includes(c.party);}
function customSessionExists(){try{const s=JSON.parse(localStorage.getItem(CUSTOM_SAVE_KEY));return s&&validSave(s)&&validCustomConfig(s.customConfig);}catch{return false;}}
function showCustomSetup(back=customMode?showMenu:closeSheet){if(!ENABLE_CUSTOM_MODE||busy)return;const chapter=customSelection.chapter,stages=STAGES.filter(s=>s.chapter===chapter),stage=stages.find(s=>s.id===customSelection.stageId)||stages[0];customSelection.stageId=stage.id;showSheet('커스텀 게임 · 테스트용',`<p class="footnote">스토리 해금 없이 원하는 전투를 실행합니다. 커스텀 기록은 스토리 저장과 별도로 저장됩니다.</p><div class="settings-row"><label for="customChapter">챕터</label><select id="customChapter">${CHAPTERS.map((c,i)=>`<option value="${i}" ${i===chapter?'selected':''}>${i===0?'서막':i===9?'최종장':i+'장'} · ${c[1]}</option>`).join('')}</select></div><label for="customStage">전투 선택</label><select id="customStage" class="custom-wide">${stages.map(s=>`<option value="${s.id}" ${s.id===stage.id?'selected':''}>${s.kind==='boss'?'[보스]':s.kind==='side'?'[선택]':'[스토리]'} ${s.name} · Lv.${s.level}</option>`).join('')}</select><div class="settings-row"><label for="customLevel">파티 레벨</label><select id="customLevel"><option value="0" ${!customSelection.level?'selected':''}>추천 레벨 자동</option>${Array.from({length:50},(_,i)=>i+1).map(l=>`<option value="${l}" ${l===customSelection.level?'selected':''}>Lv.${l}</option>`).join('')}</select></div><div class="settings-row"><label for="customParty">출전 파티</label><select id="customParty"><option value="chapter" ${customSelection.party==='chapter'?'selected':''}>해당 챕터 합류 인원</option><option value="all" ${customSelection.party==='all'?'selected':''}>6명 모두</option></select></div><div class="settings-row"><label for="customDifficulty">난이도</label><select id="customDifficulty">${['story','normal','tactical'].map(d=>`<option value="${d}" ${customSelection.difficulty===d?'selected':''}>${d.toUpperCase()}</option>`).join('')}</select></div><div class="codex-card"><b>${stage.name}</b><p class="footnote">${goalText(stage)}<br>전장 ${battleRules(stage).width}×${battleRules(stage).height} · 추천 Lv.${stage.level}<br>적 ${battleRules(stage).enemyCount}명 · 전장 보상 20/60/20% · 높이 0~${battleRules(stage).maxHeight}<br>새 전투마다 무작위 맵 · 재도전은 같은 맵<br>적정 전직·장비를 자동 적용합니다. Lv.10 1차, Lv.20 2차 전직.</p></div><button class="primary" id="beginCustom">선택한 전투 시작</button>${!customMode&&customSessionExists()?'<button class="secondary" id="resumeCustom">이전 커스텀 전투 이어하기</button>':''}${customMode?'<button class="secondary" id="customTitle">커스텀 종료 · 타이틀로</button>':''}<p class="footnote">새 전투를 시작하면 이전 커스텀 기록을 교체합니다. 일반 스토리 기록에는 영향을 주지 않습니다.</p>`,()=>{$('#customChapter').onchange=e=>{customSelection.chapter=+e.target.value;customSelection.stageId=STAGES.find(s=>s.chapter===customSelection.chapter).id;showCustomSetup(back);};$('#customStage').onchange=e=>{customSelection.stageId=e.target.value;showCustomSetup(back);};$('#customLevel').onchange=e=>customSelection.level=+e.target.value;$('#customParty').onchange=e=>customSelection.party=e.target.value;$('#customDifficulty').onchange=e=>customSelection.difficulty=e.target.value;$('#beginCustom').onclick=beginCustom;$('#resumeCustom')?.addEventListener('click',resumeCustom);$('#customTitle')?.addEventListener('click',exitCustom);},{back});}
function enterCustom(){if(customMode)return;if(!isTitle)persist();storyBackup=copy(save);customMode=true;}
function beginCustom(){const stage=STAGES.find(s=>s.id===customSelection.stageId);if(!stage)return;unlockAudio();enterCustom();const settings=copy(save.settings);save=fresh(customSelection.difficulty);save.settings=settings;save.customConfig=copy(customSelection);const level=customSelection.level||stage.level;for(const p of save.party){p.level=level;p.classLevel=level>=20?2:level>=10?1:0;p.equip=[0,0,0];for(let slot=0;slot<3;slot++){const uid=`loot-${++save.lootSeq}`;save.inventory.push({uid,gearId:`gear-${slot}-${gearTierForChapter(stage.chapter)}`});p.equipped[slot]=uid;}}save.gold=10000;for(const id of Object.keys(CONSUMABLES))save.consumables[id]=20;save.chapter=stage.chapter;startBattle(stage);toast('커스텀 전투 · 스토리 저장과 별도');}
function resumeCustom(){try{const s=JSON.parse(localStorage.getItem(CUSTOM_SAVE_KEY));if(!s||!validSave(s)||!validCustomConfig(s.customConfig))throw Error('이어갈 커스텀 기록이 없습니다.');enterCustom();save=normalizeSave(s);customSelection=copy(s.customConfig);continueJourney();}catch(e){toast(e.message);}}
function exitCustom(){if(busy)return;persist();customMode=false;save=storyBackup||fresh();storyBackup=null;const record=readStorySave();if(record.kind==='valid')save=record.data;renderer.setPixelRatio(Math.min(devicePixelRatio,save.settings.quality===0?1:1.75));$('#sound').textContent=save.settings.sound?'♪':'♩';closeSheet();isTitle=true;preview=null;skill=null;mode='move';selected='kyle';battle=makeBattle(STAGES[0]);buildScene();refreshUI();refreshTitleSaveState();playBgm('title');}
function showCustomResult(){playBgm(battle.phase==='victory'?'victory':'sad');const win=battle.phase==='victory',r=battle.reward;showSheet(win?'CUSTOM VICTORY':'CUSTOM DEFEAT',`<div class="result"><h3>${getStage().name}</h3><p>${battle.round}턴 · ${win?'승리':'패배'}</p>${win?`<p>${r.gold} G · EXP ${r.xp} (커스텀 기록에만 적용)</p>`:''}<p class="footnote">스토리 진행과 보유 자원은 그대로 유지됩니다.</p><button class="primary" id="customRetry">같은 전투 재도전</button><button class="secondary" id="customChoose">다른 전투 선택</button><button class="secondary" id="customExit">타이틀로</button></div>`,()=>{$('#customRetry').onclick=retryBattle;$('#customChoose').onclick=()=>showCustomSetup(showCustomResult);$('#customExit').onclick=exitCustom;},{noClose:true});}

function fresh(difficulty='normal'){return {version:1,inventory:[],lootSeq:0,difficulty,completed:[],skippedSides:[],gold:300,potions:0,consumables:{hpSmall:2,hpMedium:1,hpLarge:0,mpSmall:1,mpLarge:0},party:HEROES.map(h=>({id:h.id,level:1,xp:0,classLevel:0,branch:0,equip:[0,0,0],equipped:[null,null,null]})),settings:{speed:1,sound:true,quality:1},battle:null,retry:null,chapter:0};}
let save=fresh(),battle=null,selected=null,mode='move',skill=null,preview=null,busy=false,isTitle=true,currentChapter=0,toastTimer,modalBack=null;
const initialStoryRecord=readStorySave();if(initialStoryRecord.kind==='valid')save=initialStoryRecord.data;
function validConsumables(v){return v&&Object.keys(CONSUMABLES).every(k=>Number.isSafeInteger(v[k])&&v[k]>=0&&v[k]<=9999);}
function validSave(s){return s&&s.version===1&&(!s.inventory||validInventory(s.inventory))&&(!s.retryInventory||validInventory(s.retryInventory))&&(!s.lootSeq||Number.isSafeInteger(s.lootSeq)&&s.lootSeq>=0)&&(!s.consumables||validConsumables(s.consumables))&&(!s.retryConsumables||validConsumables(s.retryConsumables))&&s.party&&s.party.every(p=>!p.equipped||(Array.isArray(p.equipped)&&p.equipped.length===3&&p.equipped.every((uid,i)=>uid===null||s.inventory?.some(r=>r.uid===uid&&GEAR.find(g=>g.id===r.gearId)?.slot===i))))&&new Set(s.party.flatMap(p=>p.equipped||[]).filter(Boolean)).size===s.party.flatMap(p=>p.equipped||[]).filter(Boolean).length&&['story','normal','tactical'].includes(s.difficulty)&&Array.isArray(s.completed)&&s.completed.every(v=>STAGES.some(t=>t.id===v))&&(!s.skippedSides||Array.isArray(s.skippedSides)&&new Set(s.skippedSides).size===s.skippedSides.length&&s.skippedSides.every(v=>STAGES.some(t=>t.id===v&&t.kind==='side')))&&Number.isFinite(s.gold)&&s.gold>=0&&Number.isFinite(s.potions)&&s.potions>=0&&s.settings&&[1,1.5,2].includes(s.settings.speed)&&Array.isArray(s.party)&&s.party.length===6&&s.party.every((p,i)=>p.id===HEROES[i].id&&Number.isInteger(p.level)&&p.level>=1&&p.level<=50&&Number.isFinite(p.xp)&&p.xp>=0&&[0,1,2].includes(p.classLevel)&&[0,1].includes(p.branch)&&Array.isArray(p.equip)&&p.equip.length===3&&p.equip.every(e=>Number.isInteger(e)&&e>=0&&e<=3))&&(!s.battle||validBattle(s.battle))&&(!s.retry||validBattle(s.retry));}
function validBattle(b){const w=mapWidth(b),h=mapHeight(b);return b&&(!b.pickups||validLoot(b.pickups,b))&&STAGES.some(s=>s.id===b.stageId)&&['player','enemy','victory','defeat'].includes(b.phase)&&Number.isInteger(b.size)&&b.size>=8&&b.size<=16&&Number.isInteger(w)&&w>=8&&w<=16&&Number.isInteger(h)&&h>=8&&h<=16&&Number.isInteger(b.round)&&b.round>=1&&b.round<=999&&Array.isArray(b.tiles)&&b.tiles.length===w*h&&b.tiles.every((t,i)=>Number.isInteger(t.x)&&Number.isInteger(t.z)&&t.x===i%w&&t.z===Math.floor(i/w)&&Number.isFinite(t.height)&&t.height>=0&&t.height<=5&&['grass','forest','swamp','water','stone','bridge','dirt','desert','scrub','sand'].includes(t.terrain))&&b.goal&&Number.isInteger(b.goal.x)&&Number.isInteger(b.goal.z)&&b.goal.x>=0&&b.goal.z>=0&&b.goal.x<w&&b.goal.z<h&&Array.isArray(b.danger)&&b.danger.every(t=>Number.isInteger(t.x)&&Number.isInteger(t.z)&&t.x>=0&&t.z>=0&&t.x<w&&t.z<h)&&Array.isArray(b.log)&&b.log.length<=100&&b.log.every(l=>typeof l==='string'&&l.length<300)&&Number.isFinite(b.rng)&&Array.isArray(b.units)&&b.units.length<=40&&b.units.every(u=>validUnitExtras(u)&&Number.isInteger(u.x)&&Number.isInteger(u.z)&&u.x>=0&&u.z>=0&&u.x<w&&u.z<h&&Number.isFinite(u.hp)&&Number.isFinite(u.maxHp)&&u.maxHp>0&&u.hp>=0&&u.hp<=u.maxHp&&Number.isFinite(u.mp)&&Number.isFinite(u.atk)&&Number.isFinite(u.def)&&u.status&&['ally','enemy'].includes(u.team)&&typeof u.id==='string'&&(u.team==='enemy'||HEROES.some(h=>h.id===u.heroId)));}
function readStorySave(){let raw;try{raw=localStorage.getItem(SAVE_KEY);}catch{return {kind:'unavailable'};}if(raw===null)return {kind:'empty'};try{const data=JSON.parse(raw);return validSave(data)?{kind:'valid',data:normalizeSave(data)}:{kind:'invalid',raw};}catch{return {kind:'invalid',raw};}}
function persist(){if(isTitle)return;save.battle=battle?copy(battle):null;try{localStorage.setItem(activeSaveKey(),JSON.stringify(save));}catch{toast('저장 공간이 부족합니다. 메뉴에서 저장 파일을 내보내 주세요.');}}
function toast(msg){$('#toast').textContent=msg;$('#toast').classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('show'),2600);}
let audioCtx,bgm,playingBgm='';
// Temporary original arrangements using the user's 12 scene roles and BPMs.
const BGM_SCORES={"1":{"root":62,"scale":[0,2,4,5,7,9,11],"lead":"brass","pad":"strings","bass":"soft","rhythm":"heart","chords":[0,5,3,4],"melody":[0,null,2,null,4,null,5,4,4,null,2,null,3,null,1,null,0,null,2,3,4,null,3,2,1,null,4,2,1,null,0,null]},"2":{"root":67,"scale":[0,2,4,5,7,9,11],"lead":"whistle","pad":"lute","bass":"pluck","rhythm":"folk","chords":[0,3,4,0],"melody":[0,2,4,2,3,4,5,null,4,2,1,0,1,2,3,null,4,5,7,5,4,3,2,1,0,2,3,1,2,1,0,null]},"3":{"root":60,"scale":[0,2,4,5,7,9,11],"lead":"musicbox","pad":"warm","bass":"soft","rhythm":"none","chords":[0,5,1,4],"melody":[4,null,2,null,0,null,1,2,3,null,2,null,1,null,0,null,2,null,4,null,5,4,3,2,1,null,2,null,0,null,null,null]},"4":{"root":69,"scale":[0,2,3,5,7,9,10],"lead":"strings","pad":"brass","bass":"pluck","rhythm":"march","chords":[0,3,5,4],"melody":[0,0,4,4,2,3,4,5,4,2,3,1,2,0,1,2,3,3,5,4,7,5,4,3,2,4,3,1,2,1,0,null]},"5":{"root":64,"scale":[0,2,3,5,7,8,10],"lead":"brass","pad":"strings","bass":"heavy","rhythm":"war","chords":[0,5,3,4],"melody":[0,null,0,4,2,null,1,0,3,null,3,5,4,3,2,null,5,null,4,2,3,null,2,1,4,4,3,2,1,null,0,null]},"6":{"root":60,"scale":[0,2,3,5,7,8,10],"lead":"strings","pad":"organ","bass":"heavy","rhythm":"storm","chords":[0,5,1,4],"melody":[0,4,2,4,1,4,3,4,5,4,3,2,1,2,3,4,7,4,5,4,3,4,2,4,1,3,2,0,1,2,0,null]},"7":{"root":62,"scale":[0,1,3,5,7,8,10],"lead":"gong","pad":"dark","bass":"sub","rhythm":"titan","chords":[0,1,5,0],"melody":[0,null,null,null,1,null,0,null,-3,null,null,null,1,null,null,null,0,null,4,null,1,null,0,null,-3,null,1,null,0,null,null,null]},"8":{"root":59,"scale":[0,2,3,5,7,8,10],"lead":"flute","pad":"warm","bass":"soft","rhythm":"none","chords":[0,5,3,4],"melody":[0,null,2,null,4,null,5,4,4,null,2,null,3,null,1,null,0,null,null,null,2,null,1,null,-1,null,1,null,0,null,null,null]},"9":{"root":66,"scale":[0,2,3,5,7,9,10],"lead":"glass","pad":"dark","bass":"soft","rhythm":"clock","chords":[0,2,5,1],"melody":[0,null,4,null,1,null,5,null,2,null,6,null,3,null,4,null,7,null,5,null,2,4,1,3,0,null,6,null,4,null,null,null]},"10":{"root":70,"scale":[0,2,4,5,7,9,11],"lead":"brass","pad":"brass","bass":"heavy","rhythm":"fanfare","chords":[0,3,4,0],"melody":[0,0,0,null,2,2,2,null,4,null,5,null,7,null,4,null,3,4,5,4,2,null,1,null,4,2,3,1,0,null,null,null]},"11":{"root":62,"scale":[0,2,3,5,7,8,10],"lead":"brass","pad":"choir","bass":"heavy","rhythm":"final","chords":[0,5,3,4],"melody":[0,0,2,2,4,4,5,4,4,3,2,1,3,4,1,null,0,2,4,7,5,4,3,2,1,2,3,4,2,1,0,null]},"12":{"root":62,"scale":[0,2,4,5,7,9,11],"lead":"harp","pad":"warm","bass":"soft","rhythm":"none","chords":[0,5,3,0],"melody":[0,null,2,null,4,null,5,4,4,null,2,null,3,null,1,null,0,null,2,null,3,4,5,null,4,null,2,null,0,null,null,null]}};

// BGM has its own half-volume bus; existing effects keep their original gains.
class TacticsSoundtrackEngine {
 constructor(context=null){
  this.ctx=context;this.masterGain=null;this.filterNode=null;this.currentTimer=null;this.currentTrackId=null;this.isPlaying=false;this.volume=.375;this.revision=0;this.nodes=new Set();this.nextCycleTime=0;this.cycleIndex=0;this.noiseBuffer=null;
  this.P={};const names=['C','C#','D','Eb','E','F','F#','G','Ab','A','Bb','B'];for(let octave=2;octave<=5;octave++)names.forEach((name,i)=>{this.P[name+octave]=Math.round(440*2**(((octave+1)*12+i-69)/12)*100)/100;});Object.assign(this.P,{C6:1046.5,D6:1174.66,E6:1318.51});
  this.manifest={"1":{"id":1,"title":"Echoes of Arca","role":"Main Title Theme","version":"C","bpm":76,"scale":"D Major / Minor (Core Leitmotif)"},"2":{"id":2,"title":"Roads Beyond the Kingdom","role":"World Map Theme","version":"C","bpm":110,"scale":"G Major (Adventure Folk)"},"3":{"id":3,"title":"A Quiet Day in Town","role":"Town Theme","version":"C","bpm":88,"scale":"C Major / Rustic Folk"},"4":{"id":4,"title":"Blades of the Young","role":"Battle Theme 1 (Early Encounters)","version":"A","bpm":130,"scale":"A Minor / Dorian (Forward Momentum)"},"5":{"id":5,"title":"March of the Broken Banner","role":"Battle Theme 2 (Mid-game War)","version":"C","bpm":122,"scale":"E Minor (Martial Tension)"},"6":{"id":6,"title":"When Kingdoms Fall","role":"Battle Theme 3 (Late-game Climax)","version":"C","bpm":146,"scale":"C Minor / Diminished (Desperation)"},"7":{"id":7,"title":"Awakened Colossus","role":"Boss Battle Theme","version":"C","bpm":112,"scale":"D Phrygian / Heavy Titan"},"8":{"id":8,"title":"Memories We Left Behind","role":"Sad Theme","version":"C","bpm":64,"scale":"B Minor (Title Leitmotif Minor Variant)"},"9":{"id":9,"title":"Whispers Beneath the Ruins","role":"Mystery / Ancient Ruins Theme","version":"C","bpm":80,"scale":"F# Dorian / Whole-Tone (Mystic Glitch)"},"10":{"id":10,"title":"Raise the Banner","role":"Victory Fanfare","version":"C","bpm":120,"scale":"Bb Major (Triumphant Fanfare)"},"11":{"id":11,"title":"The Last Arca","role":"Final Battle Theme","version":"C","bpm":138,"scale":"D Minor to D Major (Epic Climax Leitmotif)"},"12":{"id":12,"title":"Where Our Journey Ends","role":"Ending & Credits Theme","version":"C","bpm":72,"scale":"D Major (Full Resolution Leitmotif)"}};
 }
 async init(){
  if(!this.ctx){const AudioClass=window.AudioContext||window.webkitAudioContext;this.ctx=new AudioClass();}
  if(!this.masterGain){this.masterGain=this.ctx.createGain();this.masterGain.gain.setValueAtTime(this.volume,this.ctx.currentTime);this.filterNode=this.ctx.createBiquadFilter();this.filterNode.type='lowpass';this.filterNode.frequency.setValueAtTime(9500,this.ctx.currentTime);this.filterNode.connect(this.masterGain);this.masterGain.connect(this.ctx.destination);}
  if(!this.noiseBuffer){this.noiseBuffer=this.ctx.createBuffer(1,Math.ceil(this.ctx.sampleRate*.2),this.ctx.sampleRate);const data=this.noiseBuffer.getChannelData(0);for(let i=0;i<data.length;i++)data[i]=Math.sin(i*78.233+17.11)*Math.sin(i*12.9898+3.7);}
  if(this.ctx.state==='suspended')await this.ctx.resume();
 }
 setVolume(vol){this.volume=Math.max(0,Math.min(1,vol));if(this.masterGain)this.masterGain.gain.setValueAtTime(this.volume,this.ctx.currentTime);}
 stop(){
  this.revision++;if(this.currentTimer!==null)clearTimeout(this.currentTimer);this.currentTimer=null;this.isPlaying=false;this.currentTrackId=null;
  // Cancel all future notes too; stopping only a timer leaves the old song audible.
  for(const {osc,g,filter}of this.nodes){try{osc.stop(this.ctx.currentTime);}catch{}osc.disconnect();g.disconnect();filter?.disconnect();}this.nodes.clear();
 }
 async play(trackId){
  if(!this.manifest[trackId]){this.stop();return;}
  this.stop();const revision=this.revision;await this.init();if(revision!==this.revision)return;
  this.isPlaying=true;this.currentTrackId=trackId;this.cycleIndex=0;this.nextCycleTime=this.ctx.currentTime+.05;this.loopCycle(trackId);
 }
 loopCycle(trackId){
  if(!this.isPlaying||this.currentTrackId!==trackId)return;
  const track=this.manifest[trackId],score=BGM_SCORES[trackId],now=Math.max(this.ctx.currentTime+.05,this.nextCycleTime),b=60/track.bpm,totalBeats=16;
  const scale=trackId===11&&this.cycleIndex%2?[0,2,4,5,7,9,11]:score.scale;
  const frequency=(degree,octave=0)=>{const index=((degree%7)+7)%7,midi=score.root+scale[index]+12*(Math.floor(degree/7)+octave);return 440*2**((midi-69)/12);};
  score.melody.forEach((degree,i)=>{if(degree!==null)this.voice(score.lead,now+i*.5*b,frequency(degree),b*(score.lead==='flute'||score.lead==='brass'?.8:.43),.12);});
  for(let bar=0;bar<4;bar++){
   const degree=score.chords[bar],time=now+bar*4*b;
   for(const tone of [0,2,4])this.voice(score.pad,time,frequency(degree+tone,-1),b*3.8,.018);
   for(let beat=0;beat<4;beat++)this.voice(score.bass,time+beat*b,frequency(degree+(beat===2?4:0),-2),b*.72,score.bass==='sub'?.065:.045);
  }
  for(let beat=0;beat<16;beat++){
   const time=now+beat*b,pattern=score.rhythm;
   if(pattern==='none')continue;
   if(['heart','titan'].includes(pattern)){if(beat%4===0||beat%4===2)this.drum(pattern==='titan'?'timpani':'kick',time,.05);}
   else if(pattern==='clock'){this.drum('tick',time,.008);if(beat%4===0)this.voice('glass',time,frequency(4,1),b*.35,.018);}
   else{if(beat%4===0||(['war','storm','final','fanfare'].includes(pattern)&&beat%4===2))this.drum('timpani',time,.05);if(beat%2===1)this.drum('snare',time,.023);this.drum('hat',time+b*.5,.007);if(['storm','final'].includes(pattern))this.drum('hat',time+b*.25,.005);}
  }
  this.cycleIndex++;this.nextCycleTime=now+b*totalBeats;
  this.currentTimer=setTimeout(()=>{this.currentTimer=null;if(trackId===10)this.isPlaying=false;else this.loopCycle(trackId);},Math.max(0,(this.nextCycleTime-this.ctx.currentTime-.08)*1000));
 }
 voice(kind,time,freq,dur,gain){
  if(['glass','musicbox','harp','gong'].includes(kind)){
   this.tone('sine',time,freq,dur*(kind==='gong'?2:1.4),gain,.004);
   this.tone('sine',time,freq*(kind==='harp'?2:2.76),dur*.65,gain*.23,.004);
   if(kind==='gong')this.tone('sine',time,freq*4.15,dur*.45,gain*.13,.004);
  }else if(['strings','brass','organ','choir','dark'].includes(kind)){
   this.tone(kind==='strings'||kind==='brass'?'sawtooth':'triangle',time,freq,dur,gain,kind==='brass'?.035:.08,kind==='brass'?1400:kind==='strings'?1800:1000);
   if(kind==='choir'||kind==='organ')this.tone('sine',time,freq*2,dur,gain*.25,.08);
  }else this.tone(['pluck','lute','warm'].includes(kind)?'triangle':'sine',time,freq,dur,gain,['pluck','lute'].includes(kind)?.004:.045);
 }
 tone(type,time,freq,dur,gain,attack=.04,cutoff=0){
  const osc=this.ctx.createOscillator(),g=this.ctx.createGain(),filter=cutoff?this.ctx.createBiquadFilter():null,node={osc,g,filter};this.nodes.add(node);
  osc.type=type;osc.frequency.setValueAtTime(freq,time);g.gain.setValueAtTime(.0001,time);g.gain.linearRampToValueAtTime(gain,time+Math.min(attack,dur*.2));g.gain.exponentialRampToValueAtTime(.0001,time+dur);
  if(filter){filter.type='lowpass';filter.frequency.setValueAtTime(cutoff,time);osc.connect(filter);filter.connect(g);}else osc.connect(g);g.connect(this.filterNode);
  osc.onended=()=>{this.nodes.delete(node);osc.disconnect();g.disconnect();filter?.disconnect();};osc.start(time);osc.stop(time+dur);
 }
 drum(kind,time,gain){
  if(kind==='kick'||kind==='timpani'){
   const osc=this.ctx.createOscillator(),g=this.ctx.createGain(),node={osc,g};this.nodes.add(node);osc.type=kind==='kick'?'sine':'triangle';osc.frequency.setValueAtTime(kind==='kick'?120:95,time);osc.frequency.exponentialRampToValueAtTime(kind==='kick'?42:60,time+.16);g.gain.setValueAtTime(gain,time);g.gain.exponentialRampToValueAtTime(.0001,time+.2);osc.connect(g);g.connect(this.filterNode);osc.onended=()=>{this.nodes.delete(node);osc.disconnect();g.disconnect();};osc.start(time);osc.stop(time+.21);return;
  }
  const osc=this.ctx.createBufferSource(),g=this.ctx.createGain(),filter=this.ctx.createBiquadFilter(),node={osc,g,filter};this.nodes.add(node);osc.buffer=this.noiseBuffer;filter.type=kind==='snare'?'bandpass':'highpass';filter.frequency.setValueAtTime(kind==='snare'?1800:kind==='tick'?6500:5000,time);const dur=kind==='snare'?.12:.035;g.gain.setValueAtTime(gain,time);g.gain.exponentialRampToValueAtTime(.0001,time+dur);osc.connect(filter);filter.connect(g);g.connect(this.filterNode);osc.onended=()=>{this.nodes.delete(node);osc.disconnect();g.disconnect();filter.disconnect();};osc.start(time);osc.stop(time+dur);
 }
}

let soundtrack=null,activeBgmKey='',bgmError='',bgmGeneration=0;
function bgmTrackFor(type,stage=getStage()){
 if(type==='battle')return stage?.id==='c9s2'?11:(stage?.chapter??0)<=2?4:(stage?.chapter??0)<=6?5:6;
 if(type==='boss')return stage?.id==='c9s2'?11:7;
 return {title:1,world:2,town:3,sad:8,mystery:9,victory:10,ending:12}[type]||1;
}
function stopBgmPlayback(){bgmGeneration++;soundtrack?.stop();bgm?.pause();bgm=null;activeBgmKey='';}
function syncBgm(){
 if(!playingBgm||!audioCtx||!save.settings.sound||document.hidden){stopBgmPlayback();return;}
 const id=bgmTrackFor(playingBgm),url=window.TACTICS_BGM?.[id]||window.TACTICS_BGM?.[playingBgm],key=url?'file:'+url:'web:'+id;
 if(activeBgmKey===key)return;
 stopBgmPlayback();const generation=bgmGeneration;activeBgmKey=key;bgmError='';
 if(url){bgm=new Audio(url);bgm.loop=id!==10;bgm.volume=.15;bgm.play().catch(e=>{if(activeBgmKey===key&&bgmGeneration===generation){activeBgmKey='';bgmError=e.message;}});return;}
 soundtrack??=new TacticsSoundtrackEngine(audioCtx);soundtrack.setVolume(.375);soundtrack.play(id).catch(e=>{if(activeBgmKey===key&&bgmGeneration===generation){activeBgmKey='';bgmError=e.message;}});
}

function unlockAudio(){if(!audioCtx)try{audioCtx=new (window.AudioContext||window.webkitAudioContext)();}catch{}audioCtx?.resume().then(()=>syncBgm()).catch(()=>{});}
function spellSound(element,impact=false){if(!save.settings.sound)return;unlockAudio();if(!audioCtx)return;const ctx=audioCtx,t=ctx.currentTime,d=impact?.65:.55,noise=['fire','thunder','wind','ice'].includes(element),g=ctx.createGain();g.gain.setValueAtTime(.001,t);g.gain.linearRampToValueAtTime(impact?.12:.065,t+.04);g.gain.exponentialRampToValueAtTime(.001,t+d);g.connect(ctx.destination);if(noise){const buffer=ctx.createBuffer(1,Math.floor(ctx.sampleRate*d),ctx.sampleRate),a=buffer.getChannelData(0);for(let i=0;i<a.length;i++)a[i]=(Math.random()*2-1);const src=ctx.createBufferSource(),filter=ctx.createBiquadFilter();src.buffer=buffer;filter.type=element==='thunder'?'lowpass':'bandpass';filter.frequency.setValueAtTime(element==='thunder'?impact?2600:600:element==='fire'?impact?1100:450:element==='ice'?4000:1700,t);filter.frequency.exponentialRampToValueAtTime(120,t+d);src.connect(filter);filter.connect(g);src.start(t);src.stop(t+d);}const frequencies={fire:impact?[95,48]:[180,360],thunder:impact?[70,35]:[420,840],ice:[1200,1600],wind:[280,460],light:[523,659,784],dark:[90,135]}[element]||[330,660];for(const f of frequencies){const o=ctx.createOscillator(),v=ctx.createGain();o.type=element==='thunder'?'sawtooth':element==='dark'?'triangle':'sine';o.frequency.setValueAtTime(f,t);o.frequency.exponentialRampToValueAtTime(impact?f*.45:f*1.8,t+d);v.gain.value=.18;o.connect(v);v.connect(g);o.start(t);o.stop(t+d);}}
function sfx(type='tap'){if(!save.settings.sound)return;unlockAudio();if(!audioCtx)return;const notes={tap:[600,850],move:[220,320],swing:[350,170],hit:[190,95,48],magic:[320,640,960],heal:[440,554,659],death:[220,110,55],win:[392,494,587,784],lose:[220,196,146],turn:[440,660]}[type]||[600];notes.forEach((f,i)=>{const o=audioCtx.createOscillator(),g=audioCtx.createGain(),t=audioCtx.currentTime+i*.05;o.type=type==='hit'?'triangle':type==='swing'?'sawtooth':'sine';o.frequency.setValueAtTime(f,t);o.frequency.exponentialRampToValueAtTime(f*(type==='swing'?.4:.6),t+.15);g.gain.setValueAtTime(type==='hit'?.12:type==='swing'?.026:.065,t);g.gain.exponentialRampToValueAtTime(.001,t+.21);o.connect(g);g.connect(audioCtx.destination);o.start(t);o.stop(t+.22);});if(type==='hit'){const duration=.12,size=Math.floor(audioCtx.sampleRate*duration),buffer=audioCtx.createBuffer(1,size,audioCtx.sampleRate),samples=buffer.getChannelData(0);for(let i=0;i<size;i++)samples[i]=Math.random()*2-1;const source=audioCtx.createBufferSource(),filter=audioCtx.createBiquadFilter(),gain=audioCtx.createGain(),t=audioCtx.currentTime;source.buffer=buffer;filter.type='lowpass';filter.frequency.setValueAtTime(1800,t);filter.frequency.exponentialRampToValueAtTime(220,t+duration);gain.gain.setValueAtTime(.095,t);gain.gain.exponentialRampToValueAtTime(.001,t+duration);source.connect(filter);filter.connect(gain);gain.connect(audioCtx.destination);source.start(t);source.stop(t+duration);}}
function playBgm(type){playingBgm=type;syncBgm();}
function seeded(seed){return ()=>{seed|=0;seed=seed+0x6D2B79F5|0;let t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return ((t^t>>>14)>>>0)/4294967296;};}
const getStage=()=>STAGES.find(s=>s.id===battle?.stageId), heroRecord=id=>save.party.find(p=>p.id===id), heroDef=id=>HEROES.find(h=>h.id===id), alive=team=>battle.units.filter(u=>u.hp>0&&(!team||u.team===team)), tile=(x,z)=>battle?.tiles[z*mapWidth(battle)+x], occ=(x,z)=>battle.units.find(u=>u.hp>0&&u.x===x&&u.z===z), unit=()=>battle?.units.find(u=>u.id===selected), isSkippedSide=s=>s.kind==='side'&&!save.completed.includes(s.id)&&(save.skippedSides.includes(s.id)||save.completed.includes(`c${s.chapter}s${s.n+1}`)), isUnlocked=s=>(!s.prev||save.completed.includes(s.prev))&&!isSkippedSide(s);
function heroStats(p){const h=heroDef(p.id),l=p.level-1,c=p.classLevel,e=p.equip;let o={...h,level:p.level,classLevel:c,branch:p.branch,equip:e,equipped:p.equipped,maxHp:Math.round((h.hp+l*7+c*16)*(p.id==='kyle'&&c>=1?1.1:p.id==='bran'&&c>=2?1.2:1)),maxMp:h.mp+l*2+c*8,atk:h.atk+l*3+c*5,def:h.def+l*1.8+c*4,mag:h.mag+l*3+c*5,res:h.res+l*1.7+c*3,move:h.move,crit:h.crit+(p.id==='kyle'&&c>=2?.1:0),eva:h.eva+(p.id==='nero'&&c>=2?.1:0)};if(p.id==='bran'&&c>=1)o.def*=1.15;if(p.id==='kyle'&&p.branch&&c>0){o.atk+=5;o.def-=3;}for(let i=0;i<3;i++){const r=equippedRecord(p,i),g=GEAR.find(g=>g.id===r?.gearId);if(g)for(const [k,v]of Object.entries(g.bonus))o[k]=(o[k]||0)+v;}return o;}
function className(u){const h=heroDef(u.heroId||u.id);return h?(u.branch&&h.branch&&u.classLevel>0?h.branch[u.classLevel-1]:h.job[u.classLevel||0]):u.name;}
function addXP(id,amount){let p=heroRecord(id);if(!p)return; p.xp+=amount;let raised=false;while(p.level<50&&p.xp>=80+p.level*18){p.xp-=80+p.level*18;p.level++;raised=true;}if(p.level===50)p.xp=0;if(raised){log(`${heroDef(id).name} 레벨 ${p.level}!`);toast(`${heroDef(id).name} Lv.${p.level} 달성`);const u=battle?.units.find(u=>u.heroId===id);if(u){const hp=u.hp,mp=u.mp,old=u.maxHp;Object.assign(u,heroStats(p),{id:u.id,heroId:id,team:'ally'});u.hp=Math.min(u.maxHp,hp+(u.maxHp-old));u.mp=Math.min(u.maxMp,mp);}}}
function log(text){if(battle){battle.log??=[];battle.log.push(text);if(battle.log.length>80)battle.log.shift();}}
function battleRules(stage){const size=stage.chapter<2?10:stage.chapter<7?12:14,shape=stage.chapter<2?[12,8]:stage.chapter<7?[10,14]:[12,16],rectangular=(stage.chapter*3+stage.n+(stage.kind==='side'?1:0))%2===1,width=rectangular?shape[0]:size,height=rectangular?shape[1]:size,ochre=(stage.chapter+stage.n+(stage.kind==='side'?1:0))%2===1,area=width*height;return {size:Math.max(width,height),width,height,theme:ochre?'ochre':'green',forestCount:ochre?0:Math.round(area*.1),swampCount:ochre?0:Math.round(area*.04),scrubCount:ochre?Math.round(area*.09):0,sandCount:ochre?Math.round(area*.07):0,desertCount:ochre?Math.round(area*.05):0,rockCount:Math.round(Math.sqrt(area)),itemCount:0,maxHeight:stage.chapter<2?3:4,maxStep:1,enemyCount:Math.min(12,5+Math.floor(stage.chapter*.7)+(stage.goal==='boss'?1:0))+(save.difficulty==='story'?-1:save.difficulty==='tactical'?1:0),enemySpacing:3,partyDistance:5,river:stage.chapter===2||stage.chapter===6};}
function newMapSeed(){if(globalThis.crypto?.getRandomValues)return crypto.getRandomValues(new Uint32Array(1))[0];return (Date.now()^Math.floor(Math.random()*0xffffffff))>>>0;}
function shuffled(a,rand){const out=a.slice();for(let i=out.length-1;i>0;i--){const j=Math.floor(rand()*(i+1));[out[i],out[j]]=[out[j],out[i]];}return out;}
const MONSTER_POOLS=[[0,1,2,10,11,12],[1,3,4,10,11,15],[2,11,12,16,18,20],[0,8,13,19,20,22],[3,4,5,15,17,20],[11,15,16,18,20,21],[6,7,17,18,21,22],[5,15,17,20,21,22],[3,4,7,15,20,21],[6,7,9,17,21,22]];
function makeBattle(stage,mapSeed=newMapSeed()){const rules=battleRules(stage),rand=seeded((mapSeed^stage.seed)>>>0),size=rules.size,width=rules.width,height=rules.height,tiles=[],units=[],phaseX=rand()*Math.PI*2,phaseZ=rand()*Math.PI*2,frequency=.24+rand()*.13,baseTerrain=rules.theme==='ochre'?'dirt':'grass';const lootRoll=seeded(((mapSeed^stage.seed^0x51f2a9)>>>0))();rules.lootKind=save.completed.includes(stage.id)?'none':lootRoll<.2?'item':lootRoll<.8?'gold':'none';rules.itemCount=rules.lootKind==='none'?0:1;
for(let z=0;z<height;z++)for(let x=0;x<width;x++){const wave=Math.round((Math.sin(x*frequency+phaseX)+Math.sin(z*frequency+phaseZ)+2)*rules.maxHeight/4);tiles.push({x,z,height:Math.min(wave,Math.floor((x+z)/3)),terrain:baseTerrain});}
if(rules.river){const vertical=rand()<.5,line=3+Math.floor(rand()*((vertical?width:height)-6)),length=vertical?height:width,bridges=new Set([2,Math.floor(length/2),length-3]);for(const t of tiles)if((vertical?t.x:t.z)===line)t.terrain=bridges.has(vertical?t.z:t.x)?'bridge':'water';}
const spots=[[width-2,height-2],[width-3,height-2],[width-2,height-3],[width-3,height-3],[width-1,height-3],[width-3,height-1]];
HEROES.filter(h=>customMode&&save.customConfig?.party==='all'||h.join<=stage.chapter).forEach((h,i)=>{const p=heroRecord(h.id),st=heroStats(p),[x,z]=spots[i];units.push({...st,id:h.id,heroId:h.id,team:'ally',x,z,hp:st.maxHp,mp:st.maxMp,status:{},dir:1,moved:false,acted:false});});
const candidates=shuffled(tiles.filter(t=>t.terrain!=='water'&&t.x+t.z<=(width+height)*.48&&units.every(u=>dist(t,u)>=rules.partyDistance)),rand),enemySpots=[];
for(let i=0;i<rules.enemyCount;i++){const options=candidates.filter(t=>enemySpots.every(p=>dist(t,p)>=rules.enemySpacing));if(!options.length)throw Error('적 배치 공간이 부족합니다.');let t;if(!i&&stage.goal==='boss'){t=options.slice().sort((a,b)=>a.x+a.z-b.x-b.z)[0];}else{const scored=options.map(t=>({t,score:(enemySpots.length?Math.min(...enemySpots.map(p=>dist(t,p))):0)+rand()*2})).sort((a,b)=>b.score-a.score);t=scored[Math.floor(rand()*Math.min(4,scored.length))].t;}enemySpots.push(t);}
// Leaders start behind the regular monsters, farthest from the party.
const partySpots=units.filter(u=>u.team==='ally'),rearSlots=stage.goal==='boss'?[0,1]:[0];
for(const slot of rearSlots){if(slot>=enemySpots.length)continue;let farthest=slot;for(let i=slot+1;i<enemySpots.length;i++)if(Math.min(...partySpots.map(a=>dist(enemySpots[i],a)))>Math.min(...partySpots.map(a=>dist(enemySpots[farthest],a))))farthest=i;[enemySpots[slot],enemySpots[farthest]]=[enemySpots[farthest],enemySpots[slot]];}
const factor=save.difficulty==='story'?.8:save.difficulty==='tactical'?1.1:1;
const pool=MONSTER_POOLS[stage.chapter],offset=(stage.n*2+(stage.kind==='side'?1:0)+(stage.kind==='boss'?3:0))%pool.length,species=[pool[offset],pool[(offset+1)%pool.length],pool[(offset+2+Math.floor(rand()*2))%pool.length]];if(stage.kind==='side'&&Number.isInteger(stage.focus))species[0]=stage.focus;
for(let i=0;i<enemySpots.length;i++){const isBoss=stage.goal==='boss'&&i===0,isElite=!isBoss&&i===(stage.goal==='boss'?1:0),profile=isBoss?BOSS_PROFILES[stage.chapter]:null,type=isBoss?(stage.chapter*2)%MONSTERS.length:species[(i-(stage.goal==='boss'?1:0))%species.length],m=MONSTERS[type],l=stage.level-1,{x,z}=enemySpots[i],mult=isBoss?2.3:isElite?2.1:.8,hp=Math.round((m.hp+l*5)*factor*mult);units.push({...m,id:`enemy${i}`,team:'enemy',x,z,level:stage.level,maxHp:hp,hp,maxMp:100,mp:100,atk:Math.round((m.atk+l*2.9+10)*factor*(isBoss?1.15:isElite?1.12:1)),mag:Math.round((m.mag+l*2.9+10)*factor*(isElite?1.12:1)),def:m.def+l*1.3,res:m.res+l*1.2,spd:10,move:m.move,jump:2,crit:.05,eva:.02,statusAttack:isBoss?undefined:m.status,status:{},dir:3,moved:false,acted:false,boss:isBoss,elite:isElite,bossId:isBoss?stage.chapter:undefined,name:isBoss?(BOSS_NAMES[stage.chapter]||'아르카 코어'):isElite?`정예 ${m.name}`:m.name,model:profile?.model||m.model,color:profile?.color||m.color,element:profile?.element||m.element,immunity:profile?.model==='golem'?'magic':profile?.model==='ghost'?'physical':m.immunity,range:isBoss?1:m.range,minRange:isBoss?1:m.minRange,magic:isBoss?false:m.magic});}
const goal={x:0,z:0},available=shuffled(tiles.filter(t=>t.terrain===baseTerrain&&!units.some(u=>u.x===t.x&&u.z===t.z)&&!(t.x===goal.x&&t.z===goal.z)),rand);let cursor=0;
for(let i=0;i<rules.forestCount;i++)available[cursor++].terrain='forest';
for(let i=0;i<rules.swampCount;i++)available[cursor++].terrain='swamp';
for(let i=0;i<rules.scrubCount;i++)available[cursor++].terrain='scrub';
for(let i=0;i<rules.sandCount;i++)available[cursor++].terrain='sand';
for(let i=0;i<rules.desertCount;i++)available[cursor++].terrain='desert';
for(let i=0;i<rules.rockCount;i++)available[cursor++].decor='rock';
for(const u of units){const opponents=units.filter(v=>v.team!==u.team),center={x:opponents.reduce((sum,v)=>sum+v.x,0)/opponents.length,z:opponents.reduce((sum,v)=>sum+v.z,0)/opponents.length};u.dir=facing(u,center);}
const result={stageId:stage.id,size,width,height,tiles,units,phase:'player',round:1,log:['전투 시작. 이동할 칸을 두 번 탭하면 이동합니다.'],rewarded:false,goal,danger:[],rng:(mapSeed^stage.seed)>>>0,mapSeed,mapRules:rules};result.pickups=rules.itemCount===0?[]:makePickups(result,stage);return result;}

function random(){let a=battle.rng+=0x6D2B79F5;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return ((t^t>>>14)>>>0)/4294967296;}
function canControl(){return battle&&battle.phase==='player'&&!busy&&!isTitle;}
function moveCost(a,b,u){if(!b||b.terrain==='water'||Math.abs(a.height-b.height)>u.jump)return Infinity;const o=occ(b.x,b.z);if(o&&o.id!==u.id)return Infinity;return b.terrain==='swamp'?3:['forest','scrub','sand'].includes(b.terrain)?2:1;}
function neighbors(t){return [[t.x+1,t.z],[t.x-1,t.z],[t.x,t.z+1],[t.x,t.z-1]].filter(([x,z])=>x>=0&&z>=0&&x<mapWidth(battle)&&z<mapHeight(battle)).map(([x,z])=>tile(x,z));}
function movement(u,limit=Math.max(0,u.move+(u.status.speed?2:0)-(u.status.freeze?2:0))){const cost=new Map([[key(u.x,u.z),0]]),queue=[tile(u.x,u.z)];while(queue.length){queue.sort((a,b)=>cost.get(key(a.x,a.z))-cost.get(key(b.x,b.z)));const a=queue.shift();for(const b of neighbors(a)){const k=key(b.x,b.z),v=cost.get(key(a.x,a.z))+moveCost(a,b,u);if(v<=limit&&v<(cost.get(k)??Infinity)){cost.set(k,v);queue.push(b);}}}return cost;}
// A* uses terrain costs and height constraints, independently of range coloring.
function pathfind(u,dest){const start=tile(u.x,u.z),open=[start],g=new Map([[key(start.x,start.z),0]]),came=new Map();while(open.length){open.sort((a,b)=>(g.get(key(a.x,a.z))+dist(a,dest))-(g.get(key(b.x,b.z))+dist(b,dest)));const a=open.shift(),ak=key(a.x,a.z);if(a===dest){let p=[a],k=ak;while(came.has(k)){const t=came.get(k);p.unshift(t);k=key(t.x,t.z);}return p;}for(const b of neighbors(a)){const k=key(b.x,b.z),v=g.get(ak)+moveCost(a,b,u);if(v<(g.get(k)??Infinity)){g.set(k,v);came.set(k,a);if(!open.includes(b))open.push(b);}}}return [];}
function basic(u){return {name:'기본 공격',mp:0,type:u.magic?'magic':'physical',power:1,range:u.range||1,minRange:u.minRange||1,heightRange:u.range>1?4:1,element:u.magic?u.element:null,status:u.team==='enemy'?u.statusAttack:null};}
function inRange(u,t,s){const d=dist(u,t);return d<=(s.range||0)&&d>=(s.minRange??0)&&Math.abs(tile(u.x,u.z).height-t.height)<=(s.heightRange??(s.range<=1?1:3));}
function areaTiles(center,s){return battle.tiles.filter(t=>(s.shape==='square'?Math.max(Math.abs(t.x-center.x),Math.abs(t.z-center.z)):dist(t,center))<=(s.area||0)&&Math.abs(t.height-center.height)<=(s.heightRange??2));}
function targets(u,t,s){const ids=new Set(areaTiles(t,s).map(t=>key(t.x,t.z))),friendly=['heal','cleanse','buff'].includes(s.type);return alive().filter(v=>ids.has(key(v.x,v.z))&&(friendly?v.team===u.team:v.team!==u.team));}
function facing(a,b){const dx=b.x-a.x,dz=b.z-a.z;return Math.abs(dx)>Math.abs(dz)?(dx>0?1:3):(dz>0?2:0);}
function sideBonus(a,b){const d=facing(b,a);return d===b.dir?0:(d+2)%4===b.dir?.2:.1;}
function estimate(a,b,s){if(s.type==='heal')return {damage:Math.round((a.mag*s.power+15)*(a.heroId==='luna'&&a.classLevel>=1?1.15:1)),hit:1,bonus:0};let atk=s.type==='magic'?a.mag:a.atk,def=s.type==='magic'?b.res:b.def;if(a.status.atk)atk*=1.25;if(b.status.def)def*=1.35;if(b.status.defdown)def*=.7;if(b.status.fortress)def*=1.8;const height=tile(a.x,a.z).height-tile(b.x,b.z).height,bonus=s.type==='physical'?sideBonus(a,b):0;let dmg=Math.max(1,atk*(s.power||1)-def*.5*(1-(s.ignore||0)));if(a.team==='enemy'&&b.team==='ally')dmg=Math.max(dmg,b.maxHp*(a.boss?.24:a.elite?.21:.18));dmg*=1+bonus+Math.max(0,height)*.08+(a.heroId==='sera'&&a.classLevel>=1&&height>0?.15:0)+(a.heroId==='nero'&&a.classLevel>=1&&bonus===.2?.25:0);if(s.type==='magic'){if(a.heroId==='ria'&&a.classLevel>=2)dmg*=1.15;dmg*=magicAffinity(s.element,b.element);}if(b.status.fortress)dmg*=.7;if(a.team==='enemy'&&b.team==='ally')dmg=Math.min(dmg,b.maxHp*(a.boss?.36:a.elite?.31:.255));if(b.immunity===s.type)dmg*=.1;return {damage:Math.max(1,Math.round(dmg)),hit:clamp(.94+bonus+(s.type==='magic'?.06:0)-(b.eva||0)-(b.status.eva?.2:0)+(a.heroId==='sera'&&a.classLevel>=2?.1:0),.55,1),bonus};}
// Rendering: instanced tiles and merged vertex-colored figures keep draw calls low.
const canvas=$('#canvas'),viewport=$('#viewport');
let renderer;
try{renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:true,powerPreference:'high-performance'});}catch(e){$('#title').innerHTML='<div class="sheet"><h2>3D 화면을 열 수 없어요</h2><p>WebGL이 지원되는 Safari 또는 Chrome에서 다시 열어 주세요.</p></div>';throw e;}
renderer.setPixelRatio(Math.min(devicePixelRatio,save.settings.quality===0?1:1.75));renderer.outputColorSpace=THREE.SRGBColorSpace;
const scene=new THREE.Scene(),camera=new THREE.OrthographicCamera(-8,8,8,-8,.1,120);scene.add(new THREE.HemisphereLight(0xe4f0ce,0x203844,2.4));const sunlight=new THREE.DirectionalLight(0xffedc7,3);sunlight.position.set(-5,12,6);scene.add(sunlight);
let terrainGroup=new THREE.Group(),unitGroup=new THREE.Group(),highlightGroup=new THREE.Group(),fxGroup=new THREE.Group(),waterSurface=null;scene.add(terrainGroup,unitGroup,highlightGroup,fxGroup);
const models=new Map(),tileMeshes=[],labelEls=new Map(),raycaster=new THREE.Raycaster(),pointer=new THREE.Vector2(),clock=new THREE.Clock();let angle=Math.PI/4,targetAngle=Math.PI/4,zoom=1,pan=new THREE.Vector3(),camLook=new THREE.Vector3(),camFocus=null,lastFrame=0,animId,particles=[],impactShake=0;
function maxBattleZoom(){return battle?.size>=14?3.6:battle?.size>=12?3.1:2.6;}
const sharedMat=new THREE.MeshToonMaterial({vertexColors:true});
const geo={box:new THREE.BoxGeometry(1,1,1),ball:new THREE.SphereGeometry(1,8,6),cone:new THREE.ConeGeometry(1,1,7),cyl:new THREE.CylinderGeometry(1,1,1,7),rock:new THREE.DodecahedronGeometry(1,0)};
const lootGroup=new THREE.Group();scene.add(lootGroup);
function gearParts(g){const metals=[0x9ca8a1,0x6c9fbd,0xad8cce,0xe2c57a],gems=[0x73a389,0x76d2d9,0xd39dec,0xffe8a1],metal=metals[g.tier],gem=gems[g.tier],trim=g.tier>1?0xd9c587:0x846f58;
if(g.slot===0){const p=[['cyl',[0,.2,0],[.07,.35,.07],0x604c3f],['ball',[0,.06,0],[.1,.1,.1],trim],['box',[0,.4,0],[.42,.08,.13],trim],['box',[0,.75,0],[.14,.66,.1],metal],['cone',[0,1.13,0],[.14,.27,.11],metal],['rock',[0,.42,.1],[.085,.09,.05],gem]];if(g.tier>=1)for(const x of [-.22,.22])p.push(['cone',[x,.45,0],[.07,.16,.07],metal]);if(g.tier>=2)p.push(['box',[0,.77,.065],[.045,.47,.025],gem]);if(g.tier===3)p.push(['rock',[0,1.29,0],[.1,.12,.09],gem]);return p;}
if(g.slot===1){const p=[['box',[0,.63,0],[.53,.68,.34],metal],['box',[0,.78,.2],[.36,.3,.07],trim],['cone',[0,.25,0],[.42,.32,.28],metal],['rock',[0,.73,.27],[.13,.17,.06],gem]];for(const x of [-.38,.38]){p.push(['box',[x,.86,0],[.27,.22,.36],trim],['box',[x,.42,0],[.15,.34,.27],metal]);if(g.tier>=2)p.push(['cone',[x,1.08,0],[.1,.25,.1],gem]);}if(g.tier===3)p.push(['cone',[0,1.18,-.05],[.18,.35,.17],trim]);return p;}
const p=[['cyl',[0,.45,0],[.37,.07,.37],trim],['cyl',[0,.52,0],[.27,.06,.27],metal],['rock',[0,.64,0],[.17,.25,.16],gem],['ball',[0,.67,.13],[.08,.11,.045],0xffefbd]];if(g.tier>=1)for(const x of [-.29,.29])p.push(['rock',[x,.55,0],[.1,.14,.11],gem]);if(g.tier>=2)p.push(['cone',[0,.94,0],[.12,.24,.12],gem]);if(g.tier===3)for(const x of [-.4,.4])p.push(['cone',[x,.8,0],[.09,.3,.09],trim]);return p;}
function pickupParts(v){if(v.gearId){const g=GEAR.find(g=>g.id===v.gearId);if(g)return gearParts(g);}const mp=v.consumableId?.startsWith('mp'),large=v.consumableId?.endsWith('Large'),scale=large?1.15:1;return v.type==='gold'?[['cyl',[0,.13,0],[.2,.09,.2],0xecc365],['cyl',[0,.22,0],[.16,.09,.16],0xffdf87]]:v.type==='potion'?[['cyl',[0,.2,0],[.13*scale,.28*scale,.13*scale],mp?0x8caee6:0xa9e9d0],['box',[0,.38*scale,0],[.13,.08,.13],0xe7bd70],['ball',[0,.2,.135*scale],[.05,.07,.03],mp?0xd2e0ff:0xe8fff1]]:[['box',[0,.18,0],[.42,.3,.3],0x809cca],['box',[0,.35,0],[.44,.09,.32],0xd6b675]];}
function refreshLoot(){disposeGroup(lootGroup);for(const v of battle?.pickups||[]){if(v.collected)continue;const p=toWorld(tile(v.x,v.z)),g=GEAR.find(g=>g.id===v.gearId),accent=g?[0xc8d8ca,0x72d9e1,0xc79aee,0xffdc8a][g.tier]:v.type==='potion'?v.consumableId?.startsWith('mp')?0x9fc3fa:0x9fe6b6:0xffd57a,display=new THREE.Group();display.position.copy(p);lootGroup.add(display);
 const base=new THREE.Mesh(new THREE.CylinderGeometry(.37,.39,.055,8),new THREE.MeshBasicMaterial({color:0x163d43}));base.position.y=.035;display.add(base);
 const seal=new THREE.Mesh(new THREE.RingGeometry(.26,.32,24),new THREE.MeshBasicMaterial({color:accent,transparent:true,opacity:.85,side:THREE.DoubleSide,depthWrite:false}));seal.rotation.x=-Math.PI/2;seal.position.y=.069;display.add(seal);
 const item=new THREE.Mesh(bake(pickupParts(v)),sharedMat),bounds=new THREE.Box3().setFromObject(item),size=bounds.getSize(new THREE.Vector3()),center=bounds.getCenter(new THREE.Vector3()),scale=Math.min(.72,.59/Math.max(size.x,size.y,size.z));item.scale.setScalar(scale);item.position.set(-center.x*scale,.43-center.y*scale,-center.z*scale);display.add(item);
 const caseGeometry=new THREE.BoxGeometry(.72,.78,.72),glass=new THREE.Mesh(caseGeometry,new THREE.MeshBasicMaterial({color:0xb9e2e1,transparent:true,opacity:.13,depthWrite:false,side:THREE.DoubleSide}));glass.position.y=.45;glass.renderOrder=2;display.add(glass);
 const edges=new THREE.LineSegments(new THREE.EdgesGeometry(caseGeometry),new THREE.LineBasicMaterial({color:accent,transparent:true,opacity:.8,depthWrite:false}));edges.position.y=.45;edges.renderOrder=3;display.add(edges);
 const beacon=new THREE.Mesh(new THREE.OctahedronGeometry(.075),new THREE.MeshBasicMaterial({color:accent,transparent:true,opacity:.92,depthWrite:false}));beacon.position.y=.92;beacon.renderOrder=4;display.add(beacon);
}}
const portraitCache=new Map();
function portraitHTML(v,isItem=false){const k=JSON.stringify(isItem?['item',v.type,v.gearId,v.consumableId]:['unit',v.heroId,v.model,v.color,v.hair,v.classLevel,v.boss,v.equipped]);let src=portraitCache.get(k);if(!src){const m=isItem?new THREE.Group():figure(v);if(isItem)m.add(new THREE.Mesh(bake(pickupParts(v)),sharedMat));else{for(const child of [...m.children])if(child!==m.userData.body){m.remove(child);child.geometry.dispose();child.material.dispose();}}const ps=new THREE.Scene();ps.add(m,new THREE.HemisphereLight(0xe4f0ce,0x203844,2.4));const light=new THREE.DirectionalLight(0xffedc7,3);light.position.set(-5,12,6);ps.add(light);const bounds=new THREE.Box3().setFromObject(m),center=bounds.getCenter(new THREE.Vector3()),radius=bounds.getBoundingSphere(new THREE.Sphere()).radius*1.08,aspect=96/104,pc=new THREE.OrthographicCamera(-radius*aspect,radius*aspect,radius,-radius,.1,30);pc.position.copy(center).add(new THREE.Vector3(2.2,1.2,4));pc.lookAt(center);const rt=new THREE.WebGLRenderTarget(96,104,{samples:4}),pixels=new Uint8Array(96*104*4),oldTarget=renderer.getRenderTarget(),oldColor=renderer.getClearColor(new THREE.Color()),oldAlpha=renderer.getClearAlpha();rt.texture.colorSpace=THREE.SRGBColorSpace;try{renderer.setRenderTarget(rt);renderer.setClearColor(0,0);renderer.clear();renderer.render(ps,pc);renderer.readRenderTargetPixels(rt,0,0,96,104,pixels);const cv=document.createElement('canvas');cv.width=96;cv.height=104;const ctx=cv.getContext('2d'),data=ctx.createImageData(96,104);for(let y=0;y<104;y++)data.data.set(pixels.subarray((103-y)*96*4,(104-y)*96*4),y*96*4);ctx.putImageData(data,0,0);src=cv.toDataURL('image/png');if(portraitCache.size>=80)portraitCache.delete(portraitCache.keys().next().value);portraitCache.set(k,src);}finally{renderer.setRenderTarget(oldTarget);renderer.setClearColor(oldColor,oldAlpha);rt.dispose();disposeGroup(m);}}return `<img class="model-portrait" src="${src}" alt="${escapeHTML(v.name||GEAR.find(g=>g.id===v.gearId)?.name||PICKUP_NAMES[v.type]||'모델')} 실제 모습" width="48" height="52">`;}
function gearBonusText(g){return Object.entries(g.bonus).filter(([,v])=>v).map(([k,v])=>`${{maxHp:'HP',crit:'치명타',move:'MOVE'}[k]||k.toUpperCase()} +${k==='crit'?`${Math.round(v*100)}%`:v}`).join(' · ');}
function equippedRecord(p,slot){return save.inventory.find(v=>v.uid===p.equipped?.[slot]);}
function gearModelHTML(g){return portraitHTML({name:g.name,type:['weapon','armor','accessory'][g.slot],gearId:g.id},true);}
function equipmentBoard(p){const h=heroDef(p.id);return `<div class="equip-stage">
  ${[0,1].map(slot=>{const g=GEAR.find(v=>v.id===equippedRecord(p,slot)?.gearId);return `<button class="equip-slot slot-${slot}" data-equip-slot="${slot}"><span>${SLOT_NAMES[slot]}</span>${g?gearModelHTML(g):'<span class="equip-empty">＋</span>'}<strong>${g?g.name:'미장착'}</strong></button>`;}).join('')}
  <canvas id="equipmentHero" aria-label="${h.name} 장비 착용 모습"></canvas>
  ${(()=>{const g=GEAR.find(v=>v.id===equippedRecord(p,2)?.gearId);return `<button class="equip-slot slot-2" data-equip-slot="2"><span>악세서리</span>${g?gearModelHTML(g):'<span class="equip-empty">＋</span>'}<strong>${g?g.name:'미장착'}</strong></button>`;})()}
</div>`;}
function showInventory(back=showWorld,id='kyle',slotFilter=null){
 if(!battle||!['player','enemy'].includes(battle.phase))playBgm('town');
 const p=heroRecord(id),locked=!!battle&&['player','enemy'].includes(battle.phase),used=new Map();
 save.party.forEach(h=>h.equipped?.forEach(uid=>{if(uid)used.set(uid,h.id);}));
 const listed=save.inventory.filter(r=>slotFilter===null||GEAR.find(g=>g.id===r.gearId)?.slot===slotFilter);
 showSheet('장비 보관함',`
  <p class="footnote">장비는 전장에서 줍거나 상점에서 구입합니다. 같은 부위의 새 장비를 착용하면 기존 장비는 보관함에 남습니다.</p>
  <div class="chaptertabs">${HEROES.filter(h=>h.join<=unlockedChapter()).map(h=>`<button data-bag-hero="${h.id}" class="${id===h.id?'on':''}">${h.name}</button>`).join('')}</div>
  <h3>${heroDef(id).name} · ${save.gold.toLocaleString()} G</h3>
  ${equipmentBoard(p)}
  <div class="chaptertabs equip-filters"><button data-filter="all" class="${slotFilter===null?'on':''}">전체</button>${SLOT_NAMES.map((n,i)=>`<button data-filter="${i}" class="${slotFilter===i?'on':''}">${n}</button>`).join('')}</div>
  <h3>보유 장비 ${save.inventory.length} / 1000</h3>
  ${listed.length?listed.map(r=>{const g=GEAR.find(g=>g.id===r.gearId),owner=used.get(r.uid);return `<div class="gear-row"><div class="gear-thumb">${gearModelHTML(g)}</div><div class="gear-copy"><b>${g.name}</b> <span class="badge">${TIERS[g.tier]}</span><small>${SLOT_NAMES[g.slot]} · ${gearBonusText(g)}${owner?` · ${heroDef(owner).name} 착용 중`:''}</small><div class="row"><button class="secondary" data-wear="${r.uid}" ${locked||owner?'disabled':''}>${owner?'착용 중':'장착'}</button>${owner===id?`<button class="secondary" data-unwear="${r.uid}" ${locked?'disabled':''}>장착 해제</button>`:''}<button class="secondary" data-sell="${r.uid}" ${locked||owner?'disabled':''}>${GEAR_SELL[g.tier]} G 판매</button></div></div></div>`;}).join(''):'<p>해당 부위의 보유 장비가 없습니다. 전장이나 상점을 확인하세요.</p>'}
  ${locked?'<p class="footnote">전투 중에는 장착·해제·판매할 수 없습니다.</p>':''}`,()=>{
   modelPreview({...heroStats(p),heroId:id},'#equipmentHero');
   $('#sheet').querySelectorAll('[data-bag-hero]').forEach(b=>b.onclick=()=>showInventory(back,b.dataset.bagHero,slotFilter));
   $('#sheet').querySelectorAll('[data-equip-slot]').forEach(b=>b.onclick=()=>showInventory(back,id));
   $('#sheet').querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>showInventory(back,id,b.dataset.filter==='all'?null:+b.dataset.filter));
   $('#sheet').querySelectorAll('[data-wear]').forEach(b=>b.onclick=()=>{if(locked)return;const r=save.inventory.find(v=>v.uid===b.dataset.wear);if(!r||used.has(r.uid))return;const g=GEAR.find(g=>g.id===r.gearId);p.equipped[g.slot]=r.uid;persist();sfx();showInventory(back,id,slotFilter);});
   $('#sheet').querySelectorAll('[data-unwear]').forEach(b=>b.onclick=()=>{if(locked)return;const r=save.inventory.find(v=>v.uid===b.dataset.unwear),g=GEAR.find(g=>g.id===r?.gearId);if(!g||p.equipped[g.slot]!==r.uid)return;p.equipped[g.slot]=null;persist();sfx();showInventory(back,id,slotFilter);});
   $('#sheet').querySelectorAll('[data-sell]').forEach(b=>b.onclick=()=>{if(locked)return;const r=save.inventory.find(v=>v.uid===b.dataset.sell);if(!r||used.has(r.uid))return;const g=GEAR.find(g=>g.id===r.gearId);showSheet('장비를 판매할까요?',`<p>${g.name}을 판매하면 ${GEAR_SELL[g.tier]} G를 받습니다.</p><button class="primary" id="confirmSell">판매</button>`,()=>{$('#confirmSell').onclick=()=>{save.inventory=save.inventory.filter(v=>v.uid!==r.uid);save.gold+=GEAR_SELL[g.tier];persist();showInventory(back,id,slotFilter);};},{back:()=>showInventory(back,id,slotFilter)});});
  },{back});
}
let previewCleanup=null;
function stopModelPreview(){previewCleanup?.();previewCleanup=null;}
function modelPreview(u,selector='#codexModel'){const canvas=$(selector);if(!canvas)return;let r;try{r=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true});}catch{return;}r.setPixelRatio(Math.min(devicePixelRatio,1.5));const s=new THREE.Scene(),c=new THREE.PerspectiveCamera(32,1,.1,30),m=figure({...u,team:u.team||'ally'});s.add(m,new THREE.HemisphereLight(0xe4f0ce,0x203844,2.4));const light=new THREE.DirectionalLight(0xffedc7,3);light.position.set(-3,6,4);s.add(light);if(u.boss){c.position.set(3,2.65,5.5);c.lookAt(0,1.1,0);}else{c.position.set(2.2,1.8,3.3);c.lookAt(0,.6,0);}let frame;const draw=t=>{frame=requestAnimationFrame(draw);if(document.hidden)return;const w=canvas.clientWidth,h=canvas.clientHeight;if(canvas.width!==Math.round(w*r.getPixelRatio())||canvas.height!==Math.round(h*r.getPixelRatio())){r.setSize(w,h,false);c.aspect=w/h;c.updateProjectionMatrix();}m.rotation.y=t*.00045;m.userData.body.position.y=Math.sin(t*.003)*.025;r.render(s,c);};frame=requestAnimationFrame(draw);previewCleanup=()=>{cancelAnimationFrame(frame);const group=new THREE.Group();group.add(m);disposeGroup(group);r.dispose();r.forceContextLoss();};}
const TERRAIN_INFO=[['grass','평지','이동 비용 1. 가장 기본적인 녹색 지형입니다.'],['forest','숲','이동 비용 2. 나무가 보이지만 별도의 은신·방어 보너스는 없습니다.'],['swamp','늪','이동 비용 3. 발이 묶여 같은 이동력으로 갈 수 있는 칸이 줄어듭니다.'],['water','물','진입 불가. 강을 건너려면 다리 칸을 이용해야 합니다.'],['stone','석재 지면','이동 비용 1. 돌 장식은 통행을 막지 않습니다.'],['bridge','다리','이동 비용 1. 강의 물 타일 사이를 건널 수 있는 통로입니다.'],['dirt','흙','이동 비용 1. 황토색 전장의 기본 지면입니다.'],['desert','사막','이동 비용 1. 굳은 사막 땅입니다.'],['scrub','잡초','이동 비용 2. 흙 위에 드문드문 풀이 자랍니다.'],['sand','모래','이동 비용 2. 발이 빠지는 밝은 모래 지형입니다.']];
function terrainPreview(){const canvas=$('#terrainModel');if(!canvas)return;let r;try{r=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true});}catch{return;}r.setPixelRatio(Math.min(devicePixelRatio,1.5));const s=new THREE.Scene(),c=new THREE.PerspectiveCamera(34,1,.1,20),group=new THREE.Group();s.add(group,new THREE.HemisphereLight(0xe4f0ce,0x203844,2.4));const light=new THREE.DirectionalLight(0xffedc7,3);light.position.set(-3,6,4);s.add(light);c.position.set(1.85,2.1,2.8);c.lookAt(0,.18,0);let surface=null,frame;
 const add=(geometry,color,x=0,y=0,z=0)=>{const m=new THREE.Mesh(geometry,new THREE.MeshLambertMaterial({color}));m.position.set(x,y,z);group.add(m);return m;};
 const select=type=>{disposeGroup(group);surface=null;const data=TERRAIN_INFO.find(v=>v[0]===type)||TERRAIN_INFO[0],colors={grass:0x85b08b,forest:0x669a7b,swamp:0x677f77,water:0x20576a,stone:0x9bafa7,bridge:0xbda67e,dirt:0xb09269,desert:0xd2b274,scrub:0xa19a67,sand:0xe0c58c};add(new THREE.BoxGeometry(.98,.56,.98),colors[data[0]],0,type==='water'?-.36:-.28);if(type==='water'){surface=makeWaterSurface([{x:0,y:0,z:0}]);group.add(surface);}if(type==='forest'){group.add(new THREE.Mesh(bake([['cyl',[-.2,.27,-.14],[.075,.55,.075],0x756c4d],['cone',[-.2,.72,-.14],[.37,.77,.37],0x3a6f5d],['cone',[-.2,1,-.14],[.25,.53,.25],0x5d9270]]),sharedMat));}if(type==='swamp'){add(new THREE.CylinderGeometry(.32,.32,.018,16),0x476d68,-.08,.018,.04);for(const [x,z] of [[-.31,-.26],[.25,-.1],[.32,.28]])add(new THREE.CylinderGeometry(.012,.012,.28,5),0x9ebc7b,x,.16,z);}if(type==='scrub')for(const [x,z] of [[-.22,-.14],[.2,.18]])add(new THREE.ConeGeometry(.09,.24,5),0x84935f,x,.12,z);if(type==='sand'||type==='desert')for(const [x,z] of [[-.24,.16],[.22,-.19]])add(new THREE.DodecahedronGeometry(.14,0),type==='sand'?0xf0d8a3:0xc7a572,x,.025,z).scale.y=.2;if(type==='stone')for(const [x,z] of [[-.24,-.22],[.24,.15]])add(new THREE.DodecahedronGeometry(.12,0),0x738d89,x,.12,z);if(type==='bridge')for(const z of [-.31,0,.31])add(new THREE.BoxGeometry(.86,.045,.25),0xdbc39a,0,.05,z);$('#terrainName').textContent=data[1];$('#terrainDescription').textContent=data[2];$('#sheet').querySelectorAll('[data-terrain]').forEach(b=>{const on=b.dataset.terrain===data[0];b.classList.toggle('on',on);b.setAttribute('aria-pressed',String(on));});};
 $('#sheet').querySelectorAll('[data-terrain]').forEach(b=>b.onclick=()=>select(b.dataset.terrain));select('grass');const draw=t=>{frame=requestAnimationFrame(draw);if(document.hidden)return;const w=canvas.clientWidth,h=canvas.clientHeight;if(canvas.width!==Math.round(w*r.getPixelRatio())||canvas.height!==Math.round(h*r.getPixelRatio())){r.setSize(w,h,false);c.aspect=w/h;c.updateProjectionMatrix();}group.rotation.y=Math.sin(t*.00027)*.2;if(surface)surface.material.uniforms.uTime.value=t*.001;r.render(s,c);};frame=requestAnimationFrame(draw);previewCleanup=()=>{cancelAnimationFrame(frame);disposeGroup(group);r.dispose();r.forceContextLoss();};}
function codexStats(u){return `<div class="statsgrid">${[['HP',u.maxHp??u.hp],['MP',u.maxMp??u.mp??100],['ATK',u.atk],['DEF',u.def],['MAG',u.mag],['RES',u.res],['SPD',u.spd??10],['MOVE',u.move],['JUMP',u.jump??2],['CRIT',`${Math.round((u.crit??.05)*100)}%`],['EVA',`${Math.round((u.eva??.02)*100)}%`],['사거리',u.range]].map(([k,v])=>`<div>${k}<b>${typeof v==='number'?Math.round(v):v}</b></div>`).join('')}</div>`;}
const SKILL_NOTES={
flame:'검에 불꽃을 둘러 인접한 적 한 명을 베는 물리 공격입니다. 화상에 걸린 적은 자기 페이즈가 시작될 때 최대 HP의 5%를 잃습니다. 마법 공격력이 아니라 물리 공격력을 사용합니다.',
break:'적 한 명을 베고 방어력을 낮춥니다. 명중하면 피해 계산에 쓰는 방어 수치가 30% 감소합니다. 현재 이 약화는 물리 공격의 DEF와 마법 공격의 RES 계산에 모두 적용되므로, 다른 동료보다 먼저 사용하면 후속 공격이 강해집니다.',
windblade:'검기를 날려 지정 위치 주변의 적들을 공격합니다. 원거리에서 쓰지만 물리 공격력을 사용하는 기술입니다. 붙어 있는 적을 공격하거나 근접하기 어려운 지형 너머를 노릴 때 좋습니다.',
valor:'자신과 주변 아군의 공격을 강화합니다. ATK와 MAG를 사용하는 피해 계산 모두 25% 강해집니다. 직접 피해를 주거나 HP를 회복하지 않으므로, 여러 아군이 아직 행동하지 않았을 때 먼저 사용하세요.',
arcaslash:'빛 속성의 강력한 범위 참격입니다. 물리 공격력을 사용하며 사거리와 범위 내 높낮이 제한을 사실상 무시합니다. 암흑 속성 적을 공격하거나 높은 지형의 적을 마무리하기 좋습니다.',
fire:'하늘에서 불덩이가 떨어져 지정 위치와 주변 적에게 화염 마법 피해를 줍니다. 화상에 걸린 대상은 자기 페이즈 시작마다 최대 HP의 5%를 잃습니다. 높이 제한이 엄격하므로 서로 다른 높이의 적이 모두 맞는지는 예상 대상 목록을 확인하세요.',
ice:'얼음 결정을 생성해 주변 적에게 냉기 마법 피해를 줍니다. 빙결은 이동력을 2 낮춥니다. 행동 자체를 막는 효과는 아니므로 사거리 안의 적은 여전히 공격할 수 있습니다. 빠른 적의 접근을 늦추는 데 적합합니다.',
thunder:'적 한 명에게 낙뢰를 떨어뜨립니다. 높이 차를 사실상 무시하는 장거리 번개 마법입니다. 기절에 걸리면 대상은 다음 자기 페이즈에서 이동과 행동을 하지 못합니다. 위험한 적 한 명을 집중 공격하세요.',
storm:'지정 칸을 중심으로 넓은 정사각형 영역에 불꽃을 떨어뜨립니다. 범위 2는 최대 5×5칸을 뜻하며, 높이 조건을 만족하는 적만 맞습니다. 파이어와 달리 별도의 화상 부여 효과는 없습니다.',
meteor:'거대한 화염 운석으로 넓은 영역의 적을 공격합니다. 높은 위력과 넓은 범위, 사실상 높이 제한이 없는 것이 장점입니다. MP 소모가 크므로 적이 모인 때를 노리세요. 이 기술은 별도의 화상을 부여하지 않습니다.',
bash:'방패로 인접한 적 한 명을 공격합니다. 기절에 걸리면 다음 자기 페이즈의 이동과 행동을 잃습니다. 강한 적의 다음 공격을 끊는 데 쓰지만, 명중과 기절 확률을 모두 통과해야 합니다.',
taunt:'브란 주변의 적들에게 도발을 겁니다. 도발된 적은 AI가 공격 대상을 고를 때 브란을 매우 우선적으로 고려합니다. 강제 이동이나 무조건적인 공격 명령은 아니며, 브란에게 닿지 못하거나 보스의 고정 패턴 중이면 다른 행동을 할 수 있습니다.',
guard:'자신과 주변 아군의 피해 계산에 쓰는 방어 수치를 35% 높입니다. 현재 물리 공격의 DEF와 마법 공격의 RES 계산에 모두 적용됩니다. 적의 근접 공격이나 사격을 받아야 하는 아군들을 모아 강화하세요.',
quake:'가까운 위치에 충격을 일으켜 주변 적에게 물리 피해를 줍니다. 지면을 흔드는 연출과 이름을 갖지만 실제 공격 계산은 물리 방식이며, 별도의 기절이나 이동 방해는 없습니다.',
fortress:'자신을 중심으로 넓은 범위의 아군에게 철벽을 부여합니다. 피해 계산에 쓰는 방어 수치가 80% 증가하며, 받는 물리·마법 피해가 추가로 30% 줄어듭니다. 여러 아군이 큰 공격을 받을 상황에서 사용하세요.',
pierce:'최소 거리 2칸부터 쓸 수 있는 장거리 물리 사격입니다. 피해 계산에 쓰는 대상의 물리 방어력 중 50%를 무시합니다. 갑옷이 두꺼운 적에게 유리하지만 바로 옆의 적은 노릴 수 없습니다.',
poison:'적 한 명에게 물리 피해를 주고 독을 부여합니다. 일반 적에게 명중하면 독이 적용되며, 독은 대상의 자기 페이즈 시작마다 최대 HP의 7%를 깎습니다. 독 피해는 최대 HP 기준이므로 체력이 많은 적을 꾸준히 압박하기 좋습니다.',
volley:'지정 위치 주변 적에게 화살을 쏟아붓는 물리 범위 사격입니다. 대상의 높이를 사실상 무시합니다. 붙어 있는 적을 공격하기 좋으며 독·빙결 등 추가 상태는 부여하지 않습니다.',
windstep:'자신과 주변 아군의 이동력을 2 높입니다. SPD나 행동 순서를 바꾸는 효과가 아닙니다. 아직 이동하지 않은 동료에게 먼저 걸어 주면 이번 페이즈에도 더 멀리 이동할 수 있습니다.',
hawk:'먼 거리의 적 한 명을 공격하는 강력한 물리 사격입니다. 물리 방어력의 70%를 무시하고 높이 제한도 사실상 없습니다. 위험한 마법 적이나 단단한 적을 멀리서 마무리할 때 좋습니다.',
heal:'아군 한 명의 HP를 회복합니다. 기본 회복량은 마법 공격력의 180%에 15를 더한 값이며 최대 HP를 넘지 않습니다. 자신에게도 사용할 수 있고, 실제 회복이 발생하면 경험치를 얻습니다. 전투 불능인 아군을 부활시키지는 못합니다.',
purify:'지정 위치와 주변 아군의 상태 효과를 해제합니다. 독·화상·빙결·침묵·수면·기절 등을 지우지만 HP 자체를 회복하지는 않습니다. 현재 정화는 공격 강화·방어 강화 등 유익한 효과도 함께 제거하므로, 강화된 아군에게 쓸 때 확인하세요. 전투 불능인 아군은 대상이 아닙니다.',
blessing:'지정 위치 주변 아군의 공격을 강화합니다. 물리 공격력과 마법 공격력으로 계산하는 피해가 모두 25% 증가합니다. HP 회복 효과는 없습니다. 카일의 용기의 맹세와 같은 강화이므로 둘을 겹쳐 사용해도 50%가 되지 않습니다.',
holy:'빛 속성의 범위 마법 공격입니다. 지정 위치와 주변의 적에게 피해를 주며 암흑 속성 대상에게 유리합니다. 이름과 달리 아군 HP를 회복하거나 상태를 해제하는 기술은 아닙니다.',
miracle:'넓은 범위의 아군 HP를 회복하고 상태 효과를 함께 해제합니다. 기본 회복량은 마법 공격력의 250%에 15를 더한 값입니다. 전투 불능인 아군을 부활시키지는 않으며, 정화처럼 유익한 강화 효과도 함께 제거됩니다.',
backstab:'인접한 적 한 명을 찌르는 물리 공격입니다. 물리 방어력의 30%를 무시합니다. 후방에 있어야만 사용할 수 있는 것은 아니지만, 후방 공격 보너스와 네로의 전직 패시브를 함께 활용하면 더 강해집니다.',
sleep:'짧은 거리의 적에게 물리 피해를 주고 수면을 노립니다. 수면 중에는 자기 페이즈의 이동과 행동을 할 수 없습니다. 피해를 받으면 잠에서 깨므로, 재우려는 적을 동료가 곧바로 공격하지 않도록 순서를 정하세요.',
silence:'적 한 명에게 암흑 마법 피해를 주고 침묵을 부여합니다. 일반 적에게 명중하면 침묵이 적용됩니다. 아군이 침묵 상태라면 비물리 스킬을 사용할 수 없고, 적 마법 유닛은 기본 공격을 근접 물리 공격으로 바꿉니다.',
shadowstep:'자신에게 회피 강화를 걸어 적 공격의 명중 확률을 20%포인트 낮춥니다. 완전 무적이나 보장된 회피는 아닙니다. 전진 후 적의 공격을 받아야 할 때 사용하며, 사용한 네로의 행동은 종료됩니다.',
eclipse:'암흑 속성의 범위 물리 공격입니다. 주변 적에게 높은 피해를 주고 독을 부여합니다. 공격력 ATK를 사용하며, 독은 최대 HP의 7%를 자기 페이즈 시작마다 깎습니다. 높이 제한을 사실상 무시합니다.'
};
function detailedSkill(id){const s=SKILLS[id],friendly=['heal','cleanse','buff'].includes(s.type),area=s.area||0,height=s.heightRange??(s.range<=1?1:3),areaHeight=s.heightRange??2;let extra=[];if(s.status)extra.push(`명중한 일반 적에게 ${Math.round((s.chance??.5)*100)}% 확률로 ${STATUS[s.status]} 부여. 보스는 이 상태 부여에 면역입니다.`);if(s.status||s.buff||s.debuff||s.type==='taunt')extra.push(`${s.status==='stun'?'기절은 다음 자기 페이즈 한 번을 건너뜁니다.':'효과의 남은 횟수는 3으로 시작하고, 대상 팀의 페이즈가 시작될 때 한 번씩 줄어듭니다. 같은 효과를 다시 걸면 중첩되지 않고 남은 횟수가 갱신됩니다.'}`);const shape=area?s.shape==='square'?`중심에서 가로·세로 각각 ${area}칸, 최대 ${area*2+1}×${area*2+1}칸`:`중심에서 상하좌우 이동 거리 ${area}칸 이내${area===1?' (중심과 인접 4칸의 십자 범위)':''}`:'선택한 한 칸';return `<div class="skill-detail" data-skill-detail="${id}"><p>${SKILL_NOTES[id]}</p><p><b>대상·범위</b><br>${friendly?'살아 있는 아군만 적용 (자신 포함)':'적군만 적용'} · ${shape}. ${s.range===0?'자신의 위치가 중심입니다.':`중심 위치는 최대 ${s.range}칸 거리${s.minRange?`, 최소 ${s.minRange}칸`:''}에서 선택합니다.`}<br>${height===99?'시전 위치와 중심 사이 높이 제한 없음':`시전 위치와 중심의 높이 차 ±${height}까지`}${area?` · 범위 대상은 중심과 높이 차 ${areaHeight===99?'제한 없음':'±'+areaHeight+'까지'}`:''}.</p>${extra.length?`<p><b>추가 효과</b><br>${extra.join('<br>')}</p>`:''}<p class="footnote">MP ${s.mp} 소모 · 이동 전후 사용 가능. 제자리에서 사용했다면 남은 이동을 할 수 있습니다. ${friendly||s.type==='taunt'?'피해·명중·치명타 계산은 하지 않습니다.':'피해 예상은 치명타 전 기준이며 실제 피해는 ±5%와 치명타에 따라 달라집니다.'}</p></div>`;}
const HERO_GUIDES={kyle:'최전선에서 적을 붙잡고 카일 전투 불능을 피하는 것이 우선입니다. 첫 전직은 최대 HP +10%, 두 번째 전직은 치명타 확률 +10%포인트입니다. 용병 계열을 선택하면 전직 이후 ATK +5, DEF −3의 별도 보정이 붙습니다.',ria:'브란이나 카일 뒤에서 적의 밀집 지점을 공격하세요. 첫 전직부터 자기 페이즈 시작 시 기본 MP 회복 3에 4가 추가되고, 두 번째 전직부터 마법 피해가 15% 증가합니다. 파이어 스톰의 범위와 썬더의 높이 무시를 상황에 따라 구분하세요.',bran:'이동력은 낮지만 물리 방어와 HP가 높습니다. 첫 전직은 DEF +15%, 두 번째 전직은 최대 HP +20%입니다. 도발은 적을 순간이동시키거나 강제로 행동시키지 않으므로 적이 브란에게 닿을 경로를 함께 확인하세요.',sera:'기본 활 공격은 거리 2~4칸이며 바로 옆의 적은 공격하지 못합니다. 첫 전직부터 고지대 공격 피해가 추가로 15% 증가하고, 두 번째 전직부터 명중 보정 +10%포인트입니다. 기동력이 높은 적이 접근하기 전에 거리를 유지하세요.',luna:'힐과 정화는 역할이 다릅니다. 힐은 HP를 채우고 정화는 상태를 지웁니다. 첫 전직은 계산된 회복량 +15%, 두 번째 전직은 자기 페이즈 시작 시 기본 MP 회복 3에 5 추가입니다. 생명의 기적도 부활 기술은 아닙니다.',nero:'이동력 6과 JUMP 2로 후방을 노립니다. 첫 전직부터 후방 공격 시 피해가 추가로 25% 증가하고, 두 번째 전직은 회피 확률 +10%포인트입니다. 수면을 걸 적은 마지막에 공격하고, 침묵으로 마법 적의 공격 방식을 제한하세요.'};
const MONSTER_GUIDES=MONSTERS.map(m=>`${m.magic?'마법':'물리'} 공격형 · MOVE ${m.move}, 사거리 ${m.minRange||1}~${m.range}. ${m.element?`${ELEMENT[m.element]} 속성으로, ${m.magic?ELEMENT[m.element]+' 마법을 사용합니다.':'일반 물리 공격은 속성 상성의 영향을 받지 않습니다.'}`:'무속성으로 속성 상성 보정이 없습니다.'} ${m.immunity==='magic'?'마법 피해를 10%만 받습니다. 카일·브란 등의 물리 공격으로 공략하세요.':m.immunity==='physical'?'물리 피해를 10%만 받습니다. 리아·루나의 마법을 준비하세요.':'물리·마법 공격을 모두 정상적으로 받습니다.'} ${m.status?`기본 공격에 ${STATUS[m.status]}을 부여할 수 있습니다.`:''}`);
const HERO_ROLES=['생존력이 높은 근접 검사. 화염검과 방어 약화로 전선을 엽니다.','아르카의 열쇠인 기억을 잃은 소녀. 다양한 속성과 광역 마법을 사용합니다.','도발과 방어 강화로 동료를 보호하는 중갑 전사.','고지대와 사거리를 활용하는 궁수. 근접한 대상에는 기본 활 공격이 닿지 않습니다.','회복·정화·빛 마법을 사용하는 사제. 회복으로도 경험치를 얻습니다.','빠른 이동과 후방 공격, 수면·침묵을 활용하는 도적.'];
function showEncyclopedia(tab='overview',back=closeSheet){const tabs=[['overview','세계관'],['journey','전체 여정'],['heroes','캐릭터'],['monsters','몬스터'],['skills','스킬'],['items','아이템'],['terrain','지형'],['rules','전투 규칙']];let html='';
if(tab==='overview')html=`<h3>에르디아 대륙</h3><p>인간과 정령이 공존하는 세계. 고대 유적 아르카 코어에서 흐르는 마력을 에테르라고 부릅니다. 백 년 전 에테르 전쟁 이후 고대 병기의 연구가 금지되었지만, 북부 제국의 발굴로 병기들이 다시 움직입니다.</p><h3>아르카 연대기</h3><p>용병 카일은 이름 외의 기억을 잃은 리아를 유적에서 발견합니다. 제국의 추격을 피해 동료들과 여행하며, 리아가 백 년 전 전쟁을 멈춘 병기의 열쇠였다는 사실을 알게 됩니다.</p><p>6명의 영웅 · 10개 챕터 구간 · 53개 전투 · 30개 액티브 스킬. 이 백과사전은 발견 여부와 관계없이 모든 구현 데이터를 보여 줍니다.</p><p class="footnote">후반 이야기와 결말이 포함되어 있습니다.</p>`;
if(tab==='journey')html=CHAPTERS.map((c,i)=>`<details class="codex-card"><summary>${c[0]} · ${c[1]}</summary><p>${c[2]}</p>${c[4].map(([n,t])=>`<div class="dialogue"><b>${n}</b><p>${t}</p></div>`).join('')}${STAGES.filter(s=>s.chapter===i).map(s=>`<div class="choice">${s.name}<small>${s.kind==='boss'?'보스전':s.kind==='side'?'선택 임무':'스토리'} · Lv.${s.level} · ${goalText(s)}<br>${STAGE_DIALOGUES[s.id][0][1]}<br>전장 ${battleRules(s).width}×${battleRules(s).height} · ${s.prev?'선행: '+STAGES.find(v=>v.id===s.prev).name:'첫 임무'}</small></div>`).join('')}</details>`).join('')+'<details class="codex-card"><summary>결말</summary><p>동료들은 리아를 홀로 봉인하는 대신 함께 코어를 멈춥니다. 병기의 시대가 끝나고 에테르는 다시 흐르며, 여섯 사람의 여행은 계속됩니다.</p></details>';
if(tab==='heroes')html=HEROES.map((h,i)=>`<button class="choice" data-codex-hero="${h.id}">${h.icon} ${h.name}<small>${h.job.join(' → ')}${h.branch?' / 용병 → 소드마스터':''}<br>${HERO_ROLES[i]}</small></button>`).join('');
if(tab==='monsters')html=MONSTERS.map((m,i)=>`<button class="choice" data-codex-monster="${i}">${m.name}<small>${m.magic?'마법':'물리'} 공격 · ${ELEMENT[m.element]||'무속성'} · 사거리 ${m.minRange||1}~${m.range}${m.immunity?` · ${m.immunity==='magic'?'마법':'물리'} 피해 10%`:''}</small></button>`).join('')+`<h3>보스</h3>${[...BOSS_NAMES.slice(1),'아르카 코어'].map((n,i)=>`<button class="choice" data-codex-boss="${i+1}">${n}<small>${ELEMENT[BOSS_PROFILES[i+1].element]} · ${BOSS_PROFILES[i+1].wave} · ${BOSS_PROFILES[i+1].finisher}</small></button>`).join('')}<p>보스마다 외형·속성·소환 적·위험 범위가 다릅니다. 5턴 순서는 기본 공격 → 고유 범위 공격 → 소환 → 위험 칸 예고 → 고유 궁극기이며 반복됩니다.</p>`;
if(tab==='skills')html=HEROES.map(h=>`<h3>${h.name}</h3>${h.skills.map((id,i)=>{const s=SKILLS[id];return `<div class="choice"><b>${s.name}${i===4?' · 궁극기':''}</b><small>Lv.${UNLOCK[i]} · MP ${s.mp}<br>${skillDescription(s)}<br>고저차 ±${s.heightRange??(s.range<=1?1:3)}${s.heightRange===99?' (실질적으로 높이 무시)':''}${s.status?` · 상태 확률 ${Math.round((s.chance??.5)*100)}%`:''}${s.ignore?` · 방어 무시 ${Math.round(s.ignore*100)}%`:''}${s.cleanse?' · 상태 해제':''}</small>${detailedSkill(id)}</div>`;}).join('')}`).join('');
if(tab==='items')html='<h3>전장 획득물과 상점</h3><p>첫 도전 전장에는 장비·회복약 20%, 골드 60%, 아무것도 없음 20%의 확률로 최대 한 개가 나타납니다. 이미 완료한 전투의 재방문에는 전장 획득물이 없습니다. 아군이 해당 칸을 지나거나 도착하면 자동으로 획득합니다.</p><p>서막~1장은 Normal, 2~4장은 Rare, 5~7장은 Epic, 8장~최종장은 Legendary 장비를 획득할 수 있습니다. 상점은 해당 시점의 등급과 한 단계 전 등급을 판매합니다. 장비는 파티 관리에서 장착합니다.</p><p>전장 골드: 50 + 추천 레벨 ×7 G. 장비 가격은 이전보다 1.5배이며, 슬롯을 직접 강화하는 기능은 없습니다.</p><h3>체력·마력 회복약</h3>'+Object.entries(CONSUMABLES).map(([id,v])=>`<p>${v.name} · 최대 ${v.stat.toUpperCase()} ${Math.round(v.ratio*100)}% 회복 · ${v.price} G</p>`).join('')+GEAR.map(g=>`<div class="gear-row"><div class="gear-thumb">${gearModelHTML(g)}</div><div class="gear-copy"><b>${g.name}</b> <span class="badge">${TIERS[g.tier]}</span><small>${SLOT_NAMES[g.slot]} · ${gearBonusText(g)}<br>구입 ${GEAR_PRICES[g.tier].toLocaleString()} G · 판매 ${GEAR_SELL[g.tier].toLocaleString()} G</small></div></div>`).join('');
if(tab==='terrain')html=`<p>전장에 등장하는 열 가지 지형입니다. 녹색과 황토색 전장이 번갈아 나타납니다. 아래 버튼을 누르면 Three.js 지형 견본을 볼 수 있습니다.</p><canvas id="terrainModel" aria-label="선택한 지형의 3D 미리보기"></canvas><h3 id="terrainName">평지</h3><p id="terrainDescription"></p><div class="terrain-choices">${TERRAIN_INFO.map(([id,name])=>`<button data-terrain="${id}">${name}</button>`).join('')}</div><p class="footnote">높이는 지형 종류와 별도로 적용됩니다. 인접 칸의 높이 차가 캐릭터의 JUMP를 넘으면 이동할 수 없습니다. 물은 높이와 관계없이 이동할 수 없습니다.</p>`;
if(tab==='rules')html=`<h3>무작위 전장 규칙</h3><p>서막~1장은 10×10 또는 12×8, 2~6장은 12×12 또는 10×14, 7장 이후는 14×14 또는 12×16 전장입니다. 녹색과 황토색 지형이 번갈아 나타나며 적 시작 위치는 매번 달라집니다. 아군은 아래쪽에 모여 시작하고 보스는 반대편 가장 바깥에 놓입니다.</p><p>일반 몬스터는 24종이며 전투마다 주로 2~3종이 섞입니다. 정예 1체는 매 전투에 등장하고 같은 종 일반 적의 약 2.6배 HP를 갖습니다. 각 장의 보스전과 마지막 최종 보스전도 유지됩니다.</p><p>첫 도전의 전장 획득물은 장비·회복약 20%, 골드 60%, 없음 20%입니다. 완료 전투의 재방문에는 생성되지 않습니다. 재도전·이어하기는 저장된 맵과 보상 배치를 사용합니다.</p><h3>턴과 조작</h3><p>아군 페이즈 후 적 페이즈. 아군마다 이동 한 번과 행동 한 번. 제자리에서 공격·스킬을 먼저 사용했다면 남은 이동을 할 수 있습니다. 회복약·대기는 이동까지 마칩니다.</p><h3>지형과 공격</h3><p>평지·흙·사막·석재·다리 이동 비용 1, 숲·잡초·모래 2, 늪 3, 물은 이동 불가입니다. 높이 차가 JUMP를 넘으면 이동할 수 없습니다. 물리 피해는 ATK × 위력 − DEF ×0.5, 마법은 MAG × 위력 − RES ×0.5를 기준으로 계산합니다. 적 공격에는 체력 비례 최소 피해를 더해 높은 방어력만으로 전투가 무력화되지 않게 했습니다.</p><p>불·물·바람 마법은 물→불→바람→물 순서로 강합니다. 유리한 마법은 150%, 불리한 마법은 50%, 무관한 마법과 물리 공격은 100%입니다. 냉기 마법은 물로 취급합니다. 골렘은 마법 피해를 10%, 유령은 물리 피해를 10%만 받습니다.</p><h3>상태와 성장</h3><p>독 최대 HP 7%, 화상 5%의 턴 피해. 빙결 이동 −2, 침묵 비물리 스킬 제한, 수면·기절 행동 제한. 최대 Lv.50, Lv.10/20 전직.</p><h3>세이브</h3><p>행동 종료 시 자동 저장합니다. 기존 저장을 이어받으며 이전 회복약은 중형 체력 회복약으로 전환합니다.</p>`;
if(tab==='overview')html+='<h3>주요 세력과 여정의 목적</h3><p>북부 제국은 금지된 고대 병기를 발굴하고 리아를 추적합니다. 카일 일행은 마을 탈출에서 시작해 왕도의 기록, 아르카 유적과 제국 수도를 거쳐 코어의 진실에 접근합니다. 파티의 중심은 장비 수집보다 여섯 동료의 합류·성장과 스토리 전투입니다.</p><h3>백과사전 사용법</h3><p>캐릭터와 몬스터 항목을 누르면 실제 3D 외형과 능력치를 확인할 수 있습니다. 캐릭터의 레벨·전직을 바꾸면 장비 없는 기준 능력치가 바뀝니다. 실제 전투 수치는 착용 장비·난이도·상태에 따라 달라집니다. 스킬 탭은 해금 레벨, MP, 대상, 범위, 실제 효과와 활용법을 설명합니다.</p>';
if(tab==='journey')html+='<h3>임무 선택과 진행</h3><p>본편은 각 장의 전투 1→2→3 순서로 진행하며 보스가 있는 장은 이후 보스전까지 완료하면 다음 장으로 이어집니다. ◇ 추가 전투는 본편 전투 사이의 샛길입니다. 다음 본편 전투를 마치면 지나간 추가 전투에는 갈 수 없습니다. 추가 전투는 다음 장 해금에 필요하지 않으며 경험치와 골드를 더 얻는 기회입니다. 같은 임무도 새로 시작하면 규칙에 따라 다른 지형·적 배치가 나타납니다. 전장 획득물은 첫 도전에만 확률적으로 생성되며 재전투에는 생성되지 않습니다. 추천 레벨은 적의 출현 레벨을 기준으로 합니다.</p>';
if(tab==='items')html+='<h3>획득·장착·사용을 구분하세요</h3><p>획득한 장비는 보관함에 들어가며 전투 종료 후 파티 관리에서 장착해야 능력치가 적용됩니다. 무기는 ATK·MAG, 방어구는 DEF·RES, 악세서리는 최대 HP·치명타를 높입니다. 같은 장비 한 개를 두 캐릭터가 동시에 착용할 수 없습니다.</p><p>회복약을 주우면 보유 수량만 증가하며 즉시 회복하지 않습니다. 전투 메뉴에서 선택한 살아 있는 아군에게 사용하면 표시된 HP 또는 MP를 회복하고 행동·이동을 종료합니다. 자원이 가득 찼으면 사용하지 않습니다. 기존 저장의 회복약은 중형 체력 회복약으로 옮겨집니다.</p>';
if(tab==='rules')html+='<h3>적의 순차 접근</h3><p>남은 적을 매 페이즈 가까운 순서로 다시 배정합니다. 5체 이상일 때 일반 적 중 가까운 2체는 MOVE 100%, 다음 2체는 30%, 나머지와 정예·보스는 10%로 접근합니다. 4체 이하가 되면 정예·보스도 같은 거리 순위에 포함되어 가까운 2체는 100%, 나머지는 30%가 됩니다. 마지막 2체는 거리와 관계없이 100%로 접근합니다. 1칸 미만의 이동량은 다음 턴에 누적되며 숲·늪의 이동 비용도 적용됩니다. 아군이 기본 사거리 +1칸 이내(최소 2칸)로 다가오면 정상 MOVE로 대응합니다. 낮은 곳에서도 공격 가능한 높이의 칸까지 지형을 우회해 접근합니다. MOVE가 늪 비용보다 낮으면 정상 속도에서도 이동량을 누적해 통과합니다. 보스는 특수 행동을 한 턴에도 이동할 수 있지만 추가 공격은 하지 않습니다.</p><p>정예 몬스터는 금색 발밑 고리와 더 큰 몸집으로 구별됩니다. 일반 공격의 예상 피해는 치명타와 ±5% 오차를 제외한 값입니다. 보스의 예고 후 궁극기는 고유 패턴에 따라 별도 피해를 줍니다.</p>';
showSheet('백과사전',`<p class="footnote">전체 공개 · 현재 게임 데이터 기준 · v0.6.37</p><div class="chaptertabs codex-tabs">${tabs.map(([id,n])=>`<button data-codex-tab="${id}" class="${id===tab?'on':''}">${n}</button>`).join('')}</div>${html}`,()=>{$('#sheet').querySelectorAll('[data-codex-tab]').forEach(b=>b.onclick=()=>showEncyclopedia(b.dataset.codexTab,back));$('#sheet').querySelectorAll('[data-codex-hero]').forEach(b=>b.onclick=()=>showCodexHero(b.dataset.codexHero,back));$('#sheet').querySelectorAll('[data-codex-monster]').forEach(b=>b.onclick=()=>showCodexMonster(+b.dataset.codexMonster,back));$('#sheet').querySelectorAll('[data-codex-boss]').forEach(b=>b.onclick=()=>showCodexBoss(+b.dataset.codexBoss,back));if(tab==='terrain')terrainPreview();},{back});}

function showCodexBoss(ch,back){const stage=STAGES.find(s=>s.id===(ch===9?'c9s2':`c${ch}b`)),u=makeBattle(stage,stage.seed).units.find(u=>u.boss),p=BOSS_PROFILES[ch],summon=MONSTERS[p.summon].name;showSheet(u.name,`<canvas id="codexModel" aria-label="${u.name} 3D 모델"></canvas><p>${CHAPTERS[ch][0]} · Lv.${u.level} · ${save.difficulty.toUpperCase()} 기준</p>${codexStats(u)}<h3>5턴 반복 패턴</h3><p>1턴: 이동 후 근접 기본 공격.<br>2턴: ${p.wave}. 사거리 3, 범위 1, 높이 차 ±2의 ${ELEMENT[p.element]} 마법 공격. 명중 시 50% 확률로 ${STATUS[p.status]} 부여.<br>3턴: 보스 옆 빈 육지 칸에 ${summon} 소환. 빈 칸이 없으면 일반 행동.<br>4턴: 가장 가까운 아군 주변 ${p.radius}칸에 ${p.finisher} 위험 칸 예고. 다음 아군 페이즈에서 벗어나세요.<br>5턴: 예고 칸의 아군에게 MAG ×${p.power} 고정 피해. DEF·RES·명중 계산을 거치지 않습니다.</p><p class="footnote">보스는 아군 공격으로 부여하는 일반 상태 이상에 면역입니다. 소환 적은 다음 적 페이즈부터 움직입니다.</p>`,()=>modelPreview(u),{back:()=>showEncyclopedia('monsters',back)});}

function showCodexHero(id,back,level=1,cls=0,branch=0){const h=heroDef(id),u=heroStats({id,level,classLevel:cls,branch,equip:[0,0,0],equipped:[null,null,null]});showSheet(h.name,`<canvas id="codexModel" aria-label="${h.name} 3D 모델"></canvas><p>${HERO_ROLES[HEROES.indexOf(h)]}</p><p>${h.job.join(' → ')}${h.branch?' / 용병 → 소드마스터':''}</p><h3>운용과 전직 효과</h3><p>${HERO_GUIDES[id]}</p><p>합류: ${h.join===0?'서막':h.join+'장'} · 기본 MOVE ${h.move} · JUMP ${h.jump}. 각 전직은 공통 능력치와 아래 패시브를 함께 강화합니다.</p><div class="settings-row"><label for="codexLevel">기준 레벨</label><select id="codexLevel">${[1,10,20,35,50].map(l=>`<option ${l===level?'selected':''}>${l}</option>`).join('')}</select><label for="codexClass">전직</label><select id="codexClass">${h.job.map((n,i)=>`<option value="${i}" ${i===cls&&!branch?'selected':''}>${n}</option>`).join('')}${h.branch?h.branch.map((n,i)=>`<option value="${i+3}" ${i+1===cls&&branch?'selected':''}>${n}</option>`).join(''):''}</select></div><p class="footnote">착용 장비가 없는 기준 능력치입니다. 전직 선택은 합류·해금과 관계없이 미리 볼 수 있습니다.</p>${codexStats(u)}<h3>패시브</h3>${h.passive.map((n,i)=>`<p>${i+1}차 전직 · ${n}</p>`).join('')}<h3>스킬</h3>${h.skills.map((id,i)=>`<div class="choice">${SKILLS[id].name}<small>Lv.${UNLOCK[i]} · MP ${SKILLS[id].mp} · ${skillDescription(SKILLS[id])}</small>${detailedSkill(id)}</div>`).join('')}`,()=>{modelPreview({...u,heroId:id});$('#codexLevel').onchange=e=>showCodexHero(id,back,+e.target.value,cls,branch);$('#codexClass').onchange=e=>{const v=+e.target.value;showCodexHero(id,back,level,v>=3?v-2:v,v>=3?1:0);};},{back:()=>showEncyclopedia('heroes',back)});}
function showCodexMonster(i,back,level=1){const m=MONSTERS[i],l=level-1,u={...m,hp:Math.round((m.hp+l*5)*.8),mp:100,atk:Math.round(m.atk+l*2.9+10),mag:Math.round(m.mag+l*2.9+10),def:m.def+l*1.3,res:m.res+l*1.2,jump:2,team:'enemy'};showSheet(m.name,`<canvas id="codexModel" aria-label="${m.name} 3D 모델"></canvas><div class="settings-row"><label for="codexLevel">NORMAL 기준 레벨</label><select id="codexLevel">${[1,10,20,35,50].map(l=>`<option ${l===level?'selected':''}>${l}</option>`).join('')}</select></div>${codexStats(u)}<p>${m.magic?'마법':'물리'} 공격 · ${ELEMENT[m.element]||'무속성'} · 사거리 ${m.minRange||1}~${m.range}${m.status?` · ${STATUS[m.status]} 공격`:''}${m.immunity?` · ${m.immunity==='magic'?'마법':'물리'} 피해 10%`:''}</p><h3>특징과 상대하는 방법</h3><p>${MONSTER_GUIDES[i]}</p><p>자기 턴에는 지형 비용·점유·높이 차를 고려해 이동한 뒤 공격합니다. 주황색은 현재 위치 기준의 이동 범위이며 공격 사거리까지 포함한 위협 범위는 아닙니다. 아군이나 적이 이동하면 범위도 바뀔 수 있습니다.</p><p class="footnote">STORY는 HP·공격력 80%, TACTICAL은 110%. 일반 적은 기본 HP의 80%, 정예는 같은 종 일반 적의 약 2.6배 HP와 12% 추가 공격력을 갖습니다.</p>`,()=>{modelPreview(u);$('#codexLevel').onchange=e=>showCodexMonster(i,back,+e.target.value);},{back:()=>showEncyclopedia('monsters',back)});}


function bake(parts){const arr=parts.map(p=>{let g=geo[p[0]].index?geo[p[0]].toNonIndexed():geo[p[0]].clone();g.scale(...p[2]);g.rotateZ(p[4]||0);g.translate(...p[1]);const color=new THREE.Color(p[3]),a=new Float32Array(g.attributes.position.count*3);for(let i=0;i<a.length;i+=3){a[i]=color.r;a[i+1]=color.g;a[i+2]=color.b;}g.setAttribute('color',new THREE.BufferAttribute(a,3));return g;});const m=mergeGeometries(arr,false);arr.forEach(g=>g.dispose());return m;}
function figure(u){const p=[],add=(type,pos,scale,col,rot=0)=>p.push([type,pos,scale,col,rot]);const c=u.color||0x6c9ba0,skin=0xeac69d,hair=u.hair||0x464956;
if(u.model==='slime'){add('ball',[0,.27,0],[.44,.34,.41],c);add('ball',[0,.22,.2],[.28,.16,.25],0x476b55);add('box',[0,.23,.38],[.24,.055,.025],0x243b35);for(const x of [-.2,0,.2])add('cone',[x,.36,.32],[.035,.12,.035],0xe7e4b0);for(const x of [-.15,.15]){add('ball',[x,.4,.32],[.065,.075,.04],0xffdf83);add('ball',[x,.4,.355],[.025,.035,.015],0x222b26);}for(const x of [-.27,.27])add('cone',[x,.59,-.04],[.1,.27,.1],0x6da675);}
else if(u.model==='flameSpirit'){add('cone',[0,.4,0],[.35,.78,.32],0xb6463a);add('ball',[0,.49,.05],[.25,.31,.25],c);for(const x of [-.28,.28]){add('cone',[x,.47,0],[.17,.58,.16],0xffa24d,x<0?-.35:.35);add('ball',[x*.55,.55,.24],[.05,.07,.04],0xffef9b);}add('cone',[0,.92,-.05],[.18,.42,.18],0xffd36d);add('box',[0,.34,.25],[.18,.05,.03],0x3b2729);}
else if(u.model==='wolf'||u.model==='dragon'){const dragon=u.model==='dragon',belly=dragon?0x547d79:0xc5d2d1;add('box',[0,.38,0],[dragon?.52:.44,.42,.7],c);add('cone',[0,.65,.31],[.29,.42,.32],c,-.25);add('box',[0,.54,.51],[.29,.19,.32],belly);add('box',[0,.46,.66],[.23,.08,.2],0x38434a);for(const x of [-.22,.22]){add('cone',[x,.91,.25],[.12,.27,.12],dragon?0xd2d6b0:0xdfe5e0);add('ball',[x*.65,.7,.54],[.045,.05,.03],dragon?0xff9a78:0xf5c372);add('cone',[x*.65,.41,.65],[.05,.12,.04],0xe9e5d4);for(const z of [-.27,.28]){add('cyl',[x,.17,z],[.095,.34,.095],c);add('cone',[x,.04,z+.13],[.05,.16,.05],0xc6d1c7,.55);}}add('cone',[0,.42,-.65],[.12,.55,.12],c,1.1);if(dragon){for(const x of [-.55,.55]){add('cone',[x,.69,-.12],[.42,.77,.11],0x649d91,x<0?-1:1);add('cone',[x*.75,1.01,-.12],[.16,.37,.09],0x9fc2a9,x<0?-.5:.5);}add('cone',[0,1.03,.18],[.1,.33,.1],0xd9c996);}}
else if(u.model==='spider'){add('ball',[0,.32,-.16],[.37,.28,.38],c);add('ball',[0,.27,.28],[.28,.24,.28],0x5b4659);for(let i=0;i<4;i++){const z=-.37+i*.21;for(const x of [-1,1]){add('cyl',[x*.36,.35,z],[.055,.65,.055],c,x*1.05);add('cyl',[x*.63,.12,z],[.035,.4,.035],0x574459,x*-.45);}}for(const x of [-.15,-.05,.05,.15])add('ball',[x,.38,.5],[.035,.04,.025],0xff8d65);for(const x of [-.12,.12])add('cone',[x,.08,.53],[.065,.2,.06],0xe2d2bc,Math.PI);add('cone',[0,.62,-.26],[.18,.3,.17],0x806487);}
else if(u.model==='golem'){add('box',[0,.56,0],[.59,.71,.46],c);add('box',[0,.63,.28],[.43,.42,.08],0x5d7474);add('rock',[0,1.04,0],[.28,.27,.26],0xa2b0aa);for(const x of [-.45,.45]){add('box',[x,.75,0],[.3,.28,.34],0x536969);add('box',[x*.98,.42,.03],[.23,.48,.27],c);add('rock',[x,.18,.15],[.24,.2,.27],0x536366);}for(const x of [-.18,.18])add('box',[x,.14,0],[.23,.28,.3],0x596f6b);add('rock',[0,.7,.34],[.13,.16,.07],0x71dfcb);for(const x of [-.11,.11])add('box',[x,1.07,.23],[.07,.05,.04],0x80f1dc);}
else if(u.model==='treant'){add('cyl',[0,.54,0],[.38,1,.35],c);add('rock',[0,.72,.31],[.25,.36,.11],0x385844);add('ball',[0,1.12,0],[.43,.34,.41],0x426c4e);for(const x of [-1,1]){add('cyl',[x*.49,.76,0],[.14,.83,.14],0x506c4c,x<0?-.65:.65);add('cyl',[x*.82,1.02,0],[.09,.45,.1],0x536d4d,x<0?-.95:.95);add('cone',[x*.94,1.22,0],[.07,.28,.07],0xa1b678,x<0?-.55:.55);add('ball',[x*.39,1.13,-.07],[.24,.27,.28],0x4b7452);add('cyl',[x*.28,.17,0],[.14,.38,.15],0x4b6045,x<0?-.3:.3);add('cone',[x*.48,.08,.22],[.09,.38,.1],0x6a7851,x<0?-.75:.75);add('ball',[x*.13,.83,.43],[.07,.1,.04],0xf5a264);}add('box',[0,.55,.42],[.26,.065,.05],0x1c3229);for(const x of [-.09,0,.09])add('cone',[x,.5,.47],[.025,.1,.025],0xc7d6a2,Math.PI);add('ball',[0,1.38,-.1],[.25,.22,.25],0x567f51);}
else if(u.model==='ghost'){add('cone',[0,.47,0],[.39,.88,.38],c);add('cone',[0,.96,-.07],[.32,.44,.29],0x43475e);add('ball',[0,.84,.04],[.2,.21,.2],0x73809b);for(const x of [-.1,.1]){add('ball',[x,.87,.24],[.045,.06,.025],0xf6a0a2);add('cyl',[x*3,.5,.05],[.055,.48,.055],c,x<0?-.6:.6);add('cone',[x*3.7,.2,.13],[.07,.24,.07],0x9fafd2,Math.PI);}add('cone',[0,.19,0],[.3,.33,.3],0x596481);}
else if(u.model==='arcacore'){add('rock',[0,.78,0],[.34,.44,.34],0x426e76);add('rock',[0,.79,0],[.25,.34,.25],0x96e5d8);add('rock',[0,.8,.29],[.12,.17,.07],0xf7e9b3);add('cone',[0,1.28,0],[.17,.43,.17],0xd7f4dd);add('cone',[0,.27,0],[.17,.43,.17],0x6bbdb8,Math.PI);for(let i=0;i<8;i++){const a=i*Math.PI/4,x=Math.cos(a)*.54,z=Math.sin(a)*.54;add('rock',[x,.78,z],[.09,.14,.09],i%2?0x98ced0:0xdac993);}for(const x of [-.56,.56]){add('cone',[x,.49,0],[.13,.43,.13],0x658e9a);add('rock',[x,1.05,0],[.1,.19,.1],0xc3f0e2);}for(const z of [-.56,.56])add('cone',[0,.74,z],[.11,.31,.11],0x7cb1ab);}
else{const id=u.heroId||u.model,monster=!u.heroId,headSkin=id==='goblin'?0x8a9b62:skin;add('cyl',[0,.43,0],[.22,.46,.21],c);add('cone',[0,.36,-.05],[.31,.55,.25],c);for(const x of [-.12,.12]){add('cyl',[x,.13,0],[.075,.24,.085],monster?0x303b42:0x374c50);add('box',[x,.04,.06],[.14,.08,.21],0x354246);}add('ball',[0,.84,0],[.255,.265,.235],headSkin);add('ball',[0,1,-.055],[.265,.15,.225],hair);add('box',[0,.96,-.17],[.42,.2,.13],hair);for(const x of [-.087,.087]){add('ball',[x,.855,.222],[.025,.037,.025],monster?0xd78372:0x273c42);add('cyl',[x*3,.49,0],[.065,.33,.065],c,x>0?.16:-.16);}add('box',[0,.754,.233],[.065,.015,.012],0xa9786b);
if(id==='kyle'){add('box',[0,.54,-.21],[.43,.71,.08],0x274f70);add('box',[0,.55,.23],[.34,.4,.07],0xb2c6c5);add('box',[0,.56,.28],[.09,.3,.04],0xd8b776);add('box',[-.33,.67,0],[.22,.2,.3],0x8aabb5);add('box',[.36,.58,.11],[.07,.72,.07],0xcce0de);add('cone',[.36,1.0,.11],[.09,.22,.08],0xdce7dc);add('box',[.35,.32,.12],[.24,.05,.11],0xcba35e);add('box',[-.35,.48,.17],[.3,.42,.09],0x456b83);add('box',[0,.75,.255],[.34,.08,.035],0xa3524f);}
else if(id==='ria'){add('cone',[0,.34,-.04],[.35,.66,.3],0x906cac);add('cone',[0,1.18,-.06],[.3,.42,.26],0x8c6baa);for(const x of [-.2,.2])add('cone',[x,.7,-.16],[.1,.53,.09],0xe4e4ee,Math.PI);add('cyl',[.35,.61,.03],[.035,1.02,.035],0x8a735c);add('rock',[.35,1.15,.03],[.14,.18,.13],0xc9a6fa);for(const x of [-.15,.15])add('ball',[x,.51,.25],[.05,.07,.04],0xe4c9ff);add('ball',[0,.54,.28],[.1,.12,.04],0xf4dfb5);}
else if(id==='bran'){add('box',[0,.57,.24],[.45,.49,.1],0x806243);for(const x of [-.35,.35])add('box',[x,.72,0],[.27,.25,.35],0xc39c62);add('box',[-.48,.48,.17],[.44,.6,.1],0x7e8c89);add('box',[-.48,.48,.24],[.08,.55,.035],0xe1c47e);add('cyl',[.4,.53,.12],[.06,.65,.06],0x5e513d);add('rock',[.4,.91,.12],[.21,.19,.2],0xa9aaa0);add('box',[0,.68,.25],[.3,.16,.1],0x584534);add('cone',[0,1.12,-.04],[.19,.25,.18],0xa88354);}
else if(id==='sera'){add('cone',[0,1.12,-.08],[.33,.4,.3],0x527f56);add('box',[0,.47,-.22],[.37,.65,.08],0x537d57);add('cyl',[-.21,.59,-.21],[.11,.54,.1],0x846642,-.4);for(const x of [-.27,-.18,-.09])add('cone',[x,.88,-.23],[.025,.38,.025],0xe9d69b);add('cyl',[.4,.62,.11],[.03,.82,.03],0xb99254);add('cyl',[.48,.82,.11],[.025,.43,.025],0xb99254,-.58);add('cyl',[.48,.4,.11],[.025,.43,.025],0xb99254,.58);add('cyl',[.53,.61,.11],[.009,.8,.009],0xf4e6bd);add('box',[0,.5,.25],[.18,.09,.05],0xc8a863);}
else if(id==='luna'){add('cone',[0,.35,-.02],[.35,.7,.31],0xf4ead0);add('box',[0,.58,.24],[.34,.46,.09],0xf6efd8);add('box',[0,.72,.3],[.12,.3,.035],0xc6a766);add('cyl',[.35,.62,.05],[.03,1.03,.03],0xc2a96c);add('ball',[.35,1.18,.05],[.13,.13,.12],0xffe6a1);add('box',[.35,1.18,.18],[.2,.045,.03],0xfff0c2);add('box',[.35,1.18,.18],[.045,.23,.03],0xfff0c2);add('cone',[0,1.09,-.05],[.19,.25,.19],0xf7edd2);}
else if(id==='nero'){add('cone',[0,1.12,-.06],[.31,.39,.28],0x333b59);add('box',[0,.76,.24],[.37,.12,.09],0x333b59);for(const x of [-.15,.15])add('box',[x,.42,-.2],[.15,.64,.07],0x323c63);add('box',[0,.53,.24],[.4,.1,.06],0x9b7d67);for(const x of [-.38,.38]){add('box',[x,.46,.14],[.055,.36,.045],0xd2d8d8,x<0?-.35:.35);add('cone',[x,.7,.14],[.07,.19,.06],0xe9eded);}add('box',[0,.85,.25],[.19,.07,.04],0x5d638a);}
else if(id==='goblin'){for(const x of [-.34,.34]){add('cone',[x,.89,0],[.17,.32,.12],0x809158,x<0?-.75:.75);add('cone',[x*.45,.69,.26],[.035,.11,.035],0xe4d7b4,Math.PI);}add('box',[0,.72,.27],[.22,.08,.07],0x4d5138);add('cyl',[.36,.48,.07],[.07,.67,.07],0x624f39);add('rock',[.36,.84,.07],[.18,.18,.16],0x5b6260);for(const x of [-.48,.48])add('cone',[x,.9,.06],[.08,.2,.07],0x5d6057);}
else if(id==='knight'){add('box',[0,.58,.23],[.42,.47,.1],0x535f66);add('box',[0,.96,.11],[.42,.29,.27],0x414c53);add('box',[0,.87,.27],[.29,.045,.035],0xbb6b65);add('box',[-.38,.51,.17],[.37,.52,.1],0x586069);add('cyl',[.39,.65,.11],[.055,.92,.055],0x7f817a);add('cone',[.39,1.18,.11],[.1,.3,.09],0xb9bec1);}
else if(id==='archer'){add('cone',[0,1.12,-.05],[.31,.38,.29],0x4a475b);add('box',[0,.79,.25],[.3,.1,.08],0x473e50);add('box',[.42,.52,.11],[.48,.08,.12],0x574f46);add('box',[.55,.52,.15],[.08,.3,.08],0x9a8259);add('cyl',[-.33,.6,-.13],[.1,.48,.1],0x594b4b);for(const x of [-.4,-.32,-.24])add('cone',[x,.89,-.14],[.025,.34,.025],0xbec1b6);}
else if(id==='sentinel'){add('box',[0,.62,.23],[.45,.51,.12],0x395d67);add('box',[0,.96,.1],[.43,.31,.3],0x527c84);add('box',[0,.87,.28],[.27,.05,.04],0x82eddf);add('rock',[0,.6,.35],[.13,.16,.07],0xa4eee8);for(const x of [-.38,.38])add('box',[x,.68,0],[.23,.22,.32],0x648f96);}
else{add('box',[.36,.54,.12],[.065,.45,.04],0xc5e0df,-.18);add('box',[.34,.35,.12],[.21,.045,.09],0xc3a46b);}
if(u.heroId&&u.equipped){const worn=u.equipped.map(uid=>GEAR.find(g=>g.id===save.inventory.find(r=>r.uid===uid)?.gearId)),accent=[0x779b8a,0x82c5d4,0xc5a4df,0xf2dc9c];if(worn[0]){const hue=accent[worn[0].tier];add('rock',[.35,.72,.13],[.08,.11,.06],hue);add('box',[.35,.58,.19],[.045,.23,.035],hue);}if(worn[1]){const hue=accent[worn[1].tier];add('box',[0,.62,.3],[.27,.21,.045],hue);for(const x of [-.3,.3])add('rock',[x,.74,.03],[.11,.1,.14],hue);}if(worn[2])add('rock',[0,.56,.35],[.075,.1,.04],accent[worn[2].tier]);}
if((u.classLevel||0)>0){for(const x of [-.24,.24])add('box',[x,.65,0],[.18,.15,.27],0xe0c982);}if((u.classLevel||0)>1)add('cone',[0,1.21,0],[.12,.22,.12],0xf4da94);
}
 const variant=u.name?.replace(/^정예 /,'');
 if(!u.heroId&&!u.boss){
  if(variant==='붉은 진흙 슬라임')for(const [x,z] of [[-.24,.18],[.21,-.13]])add('rock',[x,.5,z],[.13,.12,.12],0x784f37);
  else if(variant==='모래 약탈자'){add('box',[0,.85,.24],[.33,.12,.08],0xe3c58b);add('cone',[.38,1.14,0],[.09,.3,.09],0xf0d69d);}
  else if(variant==='회오리 매'){add('cone',[0,.9,.36],[.1,.19,.29],0xe6c78b,Math.PI/2);for(const x of [-.43,.43])add('cone',[x,.66,-.2],[.28,.62,.07],0xd4e5cf,x<0?-.5:.5);}
  else if(variant==='늪지 사냥꾼')for(const x of [-.12,.12])add('cone',[x,.51,.39],[.07,.24,.06],0xe5dfb7,Math.PI);
  else if(variant==='잿불 정령')for(const [x,z] of [[-.32,.1],[.31,-.08]])add('cone',[x,.79,z],[.1,.38,.1],0xffd27b);
  else if(variant==='강철 척후병'){for(const x of [-.38,.38])add('rock',[x,.89,-.02],[.18,.13,.21],0xa5b4b9);add('cone',[0,1.34,0],[.12,.3,.12],0x74858e);}
  else if(variant==='사막 궁수'){add('box',[0,.94,.17],[.38,.16,.1],0xdfc28b);add('cone',[0,1.28,-.06],[.14,.28,.14],0xb98c58);}
  else if(variant==='물안개 유령')for(const [x,z] of [[-.34,.15],[.32,-.12]])add('ball',[x,.58,z],[.1,.17,.1],0xb5e9ed);
  else if(variant==='사암 골렘'){for(const x of [-.37,.37])add('rock',[x,1.08,0],[.18,.24,.17],0xe0c18b);add('rock',[0,1.3,0],[.12,.22,.12],0xf2d7a5);}
  else if(variant==='가시 덩굴병'||variant==='검은 숲 정령'){for(const x of [-.43,.43])add('cone',[x,.88,.07],[.11,.35,.11],variant==='검은 숲 정령'?0x97b3a6:0xc2a872,x<0?-.6:.6);}
  else if(variant==='황혼의 추적자')for(const x of [-.18,.18])add('ball',[x,.91,.27],[.06,.065,.035],0xef776e);
  else if(variant==='화염 포격병'){add('cyl',[.53,.6,.18],[.15,.52,.15],0x5b4c49,Math.PI/2);add('ball',[.53,.58,.48],[.1,.1,.08],0xffa361);}
  else if(variant==='심연의 파수꾼'){add('box',[0,.9,.31],[.36,.08,.05],0x8be6e5);for(const x of [-.34,.34])add('rock',[x,1.1,-.04],[.13,.2,.14],0x507b85);}
 }
 if(u.boss){const id=u.bossId||0;if(id===1){add('cone',[0,1.25,0],[.2,.34,.2],0xd76554);add('box',[.52,.55,.08],[.1,.77,.07],0xf4d1a2);}else if(id===2){for(const x of [-.32,.32])add('cone',[x,1.16,0],[.18,.4,.18],0xe3ecf4);}else if(id===3){for(const x of [-.4,.4])add('ball',[x,1.16,0],[.2,.18,.2],0xa0c47b);}else if(id===4){for(const x of [-.2,0,.2])add('rock',[x,1.29,0],[.1,.16,.1],0xb39dd2);}else if(id===5){for(const x of [-.44,.44]){add('cyl',[x,.87,-.06],[.16,.48,.16],0x454e55);add('ball',[x,.87,.2],[.1,.1,.04],0xffb96e);}}else if(id===6){for(const x of [-.32,.32]){add('cyl',[x,1.15,0],[.06,.5,.06],0x5e8b91);add('rock',[x,1.45,0],[.13,.19,.13],0x9aebed);}}else if(id===7){for(const x of [-.56,.56])add('cone',[x,.64,-.15],[.35,.78,.1],0x866baf,x<0?-1:1);}else if(id===8){for(const x of [-.22,0,.22])add('cone',[x,1.28,0],[.1,.28,.1],0xffd889);add('box',[0,.53,-.2],[.72,.68,.08],0x8a5e6a);}else if(id===9){for(const x of [-.47,.47])add('rock',[x,1.12,0],[.18,.25,.18],0xb5f3e6);}}
 const g=new THREE.Group(),body=new THREE.Mesh(bake(p),sharedMat);g.add(body);if(u.boss)body.scale.setScalar(1.5);else if(u.elite)body.scale.setScalar(1.16);g.userData.body=body;const ring=new THREE.Mesh(new THREE.RingGeometry(.34,.39,24),new THREE.MeshBasicMaterial({color:u.team==='ally'?0x8fe5b4:u.elite?0xffd378:0xf0a58c,transparent:true,opacity:.75,side:THREE.DoubleSide}));ring.rotation.x=-Math.PI/2;ring.position.y=.024;g.add(ring);const shadow=new THREE.Mesh(new THREE.CircleGeometry(.35,20),new THREE.MeshBasicMaterial({color:0x163338,transparent:true,opacity:.27,depthWrite:false}));shadow.rotation.x=-Math.PI/2;shadow.position.y=.018;g.add(shadow);return g;}
function elevation(t){return t.height*.33;}
function toWorld(t){return new THREE.Vector3(t.x-(mapWidth(battle)-1)/2,elevation(t)+.02,t.z-(mapHeight(battle)-1)/2);}
function disposeGroup(g){while(g.children.length){const child=g.children[0];child.traverse(o=>{if(o.geometry&&!Object.values(geo).includes(o.geometry))o.geometry.dispose();if(o.material&&o.material!==sharedMat)o.material.dispose();});g.remove(child);}}
let inspectedEnemy=null,inspectedItem=null,lastHitReport=null;
function createUnitLabel(u){const el=document.createElement('div');el.className=`unit-label ${u.team}`;el.dataset.unitId=u.id;el.innerHTML='<div class="done"></div><div class="hp-line"><div class="hp"><i></i></div><span class="hp-value"></span></div>';$('#labels').append(el);labelEls.set(u.id,el);return el;}
// Freeze the approach order for each enemy phase so later enemies cannot
// accelerate just because the front line has already moved this turn.
function enemyApproachPlan(){
 const allies=alive('ally'),enemies=alive('enemy'),ratios={};
 const distances=new Map(enemies.map(e=>[e.id,allies.length?Math.min(...allies.map(a=>dist(e,a))):Infinity]));
 // With four or fewer enemies, leaders join the same distance-ranked queue.
 // With two or fewer, every survivor uses full movement, however far away.
 const ranked=(enemies.length<=4?enemies:enemies.filter(e=>!e.elite&&!e.boss)).slice().sort((a,b)=>distances.get(a.id)-distances.get(b.id)||a.id.localeCompare(b.id));
 const ranks=new Map(ranked.map((e,i)=>[e.id,i]));
 for(const e of enemies){
  const rank=ranks.get(e.id),engaged=distances.get(e.id)<=Math.max(2,(e.range||1)+1);
  ratios[e.id]=engaged||enemies.length<=2||rank<2?1:rank<4?.3:.1;
 }
 return {version:3,round:battle.round,enemyIds:enemies.map(e=>e.id).sort().join('|'),ratios};
}
function enemyApproachPlanCurrent(){
 const plan=battle.enemyApproachPlan;
 return plan?.version===3&&plan.round===battle.round&&plan.enemyIds===alive('enemy').map(e=>e.id).sort().join('|');
}
function enemyApproachRatio(e){
 // This includes elites, bosses and summons, even with an older phase snapshot.
 if(alive('enemy').length<=2)return 1;
 if(battle.phase!=='enemy')return enemyApproachPlan().ratios[e.id]??.1;
 // Deaths or summons invalidate the phase snapshot; ordinary movement does not.
 if(!enemyApproachPlanCurrent())battle.enemyApproachPlan=enemyApproachPlan();
 return battle.enemyApproachPlan.ratios[e.id]??.1;
}
function enemyMovementCredit(e){
 const max=Math.max(0,e.move+(e.status.speed?2:0)-(e.status.freeze?2:0));
 if(e.status.sleep||e.status.stun||max===0)return 0;
 return Math.min(Math.max(3,max),Math.max(0,e.approachCredit||0)+max*enemyApproachRatio(e));
}
function enemyMoveBudget(e){return Math.floor(enemyMovementCredit(e)+1e-9);}
function enemyMoveRange(e){return movement(e,enemyMoveBudget(e));}

function inspectEnemy(e){if(busy||isTitle||e.team!=='enemy'||e.hp<=0)return;inspectedItem=null;inspectedEnemy=e.id;preview=null;sfx();refreshUI();refreshHighlights();}
function renderEnemyInfo(e){const s=basic(e),range=enemyMoveRange(e),effectiveMove=Math.max(0,e.move+(e.status.speed?2:0)-(e.status.freeze?2:0)),stats=Object.keys(e.status).map(k=>STATUS[k]).filter(Boolean).join(' · '),p=e.boss?BOSS_PROFILES[e.bossId||getStage().chapter]:null,bossStep=(battle.round-1)%5,bossDetails=p?`<span>보스 패턴 ${bossStep+1}/5 · ${['기본 공격',p.wave,MONSTERS[p.summon].name+' 소환',p.finisher+' 예고',p.finisher][bossStep]}</span><span>${ELEMENT[p.element]} 공격 · 범위 공격 명중 시 50% ${STATUS[p.status]} · 궁극기 예고 반경 ${p.radius}칸</span>`:'';$('#panel').innerHTML=`<div class="party-strip">${alive('ally').map(v=>`<button class="party-chip" data-inspect-ally="${v.id}">${v.name}<small>${v.acted?'✓':''}</small></button>`).join('')}</div><div class="unitrow"><div class="portrait enemy-portrait">${portraitHTML(e)}</div><div class="unitinfo"><div class="unitname">${e.name}<small>Lv.${e.level}${e.boss?' · 보스':''}</small></div><div class="bars"><div class="statbar"><div class="numbers"><span>HP</span><span>${Math.ceil(e.hp)} / ${e.maxHp}</span></div><div class="track"><i style="width:${e.hp/e.maxHp*100}%"></i></div></div></div></div></div><div class="enemy-details" id="enemyInfo"><span>공격: ${e.magic?'마법':'물리'} · ${ELEMENT[s.element]||'무속성'}${e.statusAttack?' · '+STATUS[e.statusAttack]:''}</span><span>ATK ${Math.round(e.atk)} · MAG ${Math.round(e.mag)} · DEF ${Math.round(e.def)} · RES ${Math.round(e.res)}</span><span>사거리 ${s.minRange}~${s.range} · MOVE ${effectiveMove} · 이번 접근 ${enemyMoveBudget(e)} · 속도 ${Math.round(enemyApproachRatio(e)*100)}% · JUMP ${e.jump}</span><span>현재 위치 기준 이동 가능 ${Math.max(0,range.size-1)}칸${stats?' · '+stats:''}</span>${bossDetails}</div><div class="turnrow"><div class="hint">주황색: 적의 예상 이동 범위<br>다른 유닛의 이동·상태 변화에 따라 달라집니다.</div><button class="endturn" id="closeEnemyInfo">아군으로 돌아가기</button></div>`;$('#panel').querySelectorAll('[data-inspect-ally]').forEach(b=>b.onclick=()=>selectUnit(battle.units.find(v=>v.id===b.dataset.inspectAlly)));$('#closeEnemyInfo').onclick=()=>{inspectedEnemy=null;inspectedItem=null;refreshUI();refreshHighlights();};}
function forecastHP(a,t,s){const e=estimate(a,t,s),low=Math.max(1,Math.round(e.damage*.95)),high=Math.max(1,Math.round(e.damage*1.05));if(['buff','cleanse','taunt'].includes(s.type))return `${t.name} · ${s.name}`;if(s.type==='heal')return `${t.name} · HP ${Math.ceil(t.hp)} → ${Math.min(t.maxHp,t.hp+e.damage)}<br>예상 회복 <strong>+${e.damage}</strong>`;return `${t.name} · HP <b>${Math.ceil(t.hp)} → ${Math.max(0,t.hp-high)}~${Math.max(0,t.hp-low)}</b><br>예상 피해 <strong>${low}~${high}</strong> · 명중 ${Math.round(e.hit*100)}%`;}
function hitReportHTML(){if(!lastHitReport?.rows.length)return '';return `<div class="hit-report" id="hitReport"><div class="row"><b>${lastHitReport.skill} · 실제 결과</b><button id="dismissHitReport" aria-label="공격 결과 닫기">×</button></div><div class="hit-report-rows">${lastHitReport.rows.map(r=>`<div>${r.name} · HP <b>${r.before} → ${r.after}</b> <span>${r.miss?'MISS':r.crit?'치명타':''}${r.after===0?' · 처치':''}</span></div>`).join('')}</div></div>`;}

function makeWaterSurface(places){if(!places.length)return null;const pieces=places.map(p=>{const g=new THREE.PlaneGeometry(.94,.94,8,8);g.rotateX(-Math.PI/2);g.translate(p.x,p.y-.075,p.z);return g;}),geometry=mergeGeometries(pieces);pieces.forEach(g=>g.dispose());const material=new THREE.ShaderMaterial({uniforms:{uTime:{value:0}},vertexShader:`uniform float uTime; varying vec2 vUv; void main(){vUv=uv;vec3 wave=position;wave.y+=.012*sin(uv.x*16.0+uv.y*10.0-uTime*2.0);gl_Position=projectionMatrix*modelViewMatrix*vec4(wave,1.0);}`,fragmentShader:`uniform float uTime; varying vec2 vUv; void main(){float current=sin(vUv.y*20.0+sin(vUv.x*6.0+uTime*.55)*1.2-uTime*2.1);float shimmer=sin(vUv.x*12.0-vUv.y*8.0+uTime*1.1);float crest=smoothstep(.72,.98,current)*(.48+.18*shimmer);float depth=.48+.17*sin(vUv.x*8.0+vUv.y*6.0-uTime*.6);vec3 water=mix(vec3(.025,.25,.38),vec3(.08,.56,.68),depth);water=mix(water,vec3(.72,.91,.88),crest);gl_FragColor=vec4(water,1.0);}`,side:THREE.DoubleSide});return new THREE.Mesh(geometry,material);}
function buildScene(){inspectedEnemy=null;inspectedItem=null;lastHitReport=null;disposeGroup(terrainGroup);waterSurface=null;disposeGroup(unitGroup);disposeGroup(highlightGroup);disposeGroup(fxGroup);particles=[];tileMeshes.length=0;models.clear();labelEls.clear();$('#labels').innerHTML='';
const colors={grass:0x85b08b,forest:0x669a7b,swamp:0x677f77,water:0x20576a,stone:0x9bafa7,bridge:0xbda67e,dirt:0xb09269,desert:0xd2b274,scrub:0xa19a67,sand:0xe0c58c};const geom=new THREE.BoxGeometry(.975,1,.975);const ca=new Float32Array(geom.attributes.position.count*3);for(let i=0;i<geom.attributes.position.count;i++){const f=geom.attributes.normal.getY(i)>.5?1:.64;ca.set([f,f,f],i*3);}geom.setAttribute('color',new THREE.BufferAttribute(ca,3));const tilesMesh=new THREE.InstancedMesh(geom,new THREE.MeshLambertMaterial({vertexColors:true}),battle.tiles.length),dummy=new THREE.Object3D(),waterPlaces=[];battle.tiles.forEach((t,i)=>{const p=toWorld(t),height=.4+elevation(t);dummy.position.set(p.x,height/2-.4-(t.terrain==='water'?.14:0),p.z);dummy.scale.set(1,height,1);dummy.updateMatrix();tilesMesh.setMatrixAt(i,dummy.matrix);tilesMesh.setColorAt(i,new THREE.Color(colors[t.terrain]));if(t.terrain==='water')waterPlaces.push(p);});tilesMesh.instanceMatrix.needsUpdate=true;tilesMesh.userData.tiles=true;terrainGroup.add(tilesMesh);tileMeshes.push(tilesMesh);waterSurface=makeWaterSurface(waterPlaces);if(waterSurface)terrainGroup.add(waterSurface);
const trees=[],rocks=[],wetland=[],planks=[],rand=seeded(battle.mapSeed??getStage()?.seed??4);for(const t of battle.tiles){const p=toWorld(t);if(t.terrain==='forest'){trees.push(['cyl',[p.x-.23,p.y+.23,p.z-.23],[.055,.48,.055],0x756c4d]);trees.push(['cone',[p.x-.23,p.y+.65,p.z-.23],[.32,.72,.32],0x3a6f5d]);trees.push(['cone',[p.x-.23,p.y+.92,p.z-.23],[.24,.5,.24],0x5d9270]);}else if(t.terrain==='swamp'){wetland.push(['cyl',[p.x-.08,p.y+.01,p.z+.04],[.32,.018,.32],0x476d68]);for(const [x,z] of [[-.31,-.26],[.25,-.1],[.32,.28]])wetland.push(['cyl',[p.x+x,p.y+.15,p.z+z],[.012,.28,.012],0x9ebc7b]);}else if(t.terrain==='scrub'){for(const [x,z] of [[-.27,-.18],[.21,.14]])wetland.push(['cone',[p.x+x,p.y+.12,p.z+z],[.09,.24,.09],0x84935f]);}else if(t.terrain==='sand'||t.terrain==='desert'){for(const [x,z] of [[-.25,.2],[.18,-.2]])rocks.push(['rock',[p.x+x,p.y+.025,p.z+z],[.14,.035,.11],t.terrain==='sand'?0xf0d8a3:0xc7a572]);}else if(t.terrain==='bridge'){const alongZ=(t.z>0&&tile(t.x,t.z-1)?.terrain==='water')||(t.z<mapHeight(battle)-1&&tile(t.x,t.z+1)?.terrain==='water');for(const offset of [-.31,0,.31])planks.push(['box',[p.x+(alongZ?0:offset),p.y+.035,p.z+(alongZ?offset:0)],alongZ?[.86,.045,.25]:[.25,.045,.86],0xdbc39a]);}if(t.decor==='rock'||(!battle.mapRules&&t.terrain!=='water'&&rand()<.13)){rocks.push(['rock',[p.x-.35,p.y+.07,p.z-.32],[.1,.12,.12],battle.mapRules?.theme==='ochre'?0xbda87d:0xa6b3a0]);}}
if(trees.length)terrainGroup.add(new THREE.Mesh(bake(trees),sharedMat));if(rocks.length)terrainGroup.add(new THREE.Mesh(bake(rocks),sharedMat));if(wetland.length)terrainGroup.add(new THREE.Mesh(bake(wetland),sharedMat));if(planks.length)terrainGroup.add(new THREE.Mesh(bake(planks),sharedMat));
// Ancient gate, houses and crystals sit beyond playable tiles.
const edgeX=mapWidth(battle)/2,edgeZ=mapHeight(battle)/2,prop=[];if(getStage()?.chapter>=6){for(const x of [-edgeX+1,edgeX-1]){prop.push(['box',[x,1,-edgeZ-.3],[.45,2,.5],0x8faaa3]);prop.push(['rock',[x,2.15,-edgeZ-.3],[.24,.48,.24],0x85ddce]);}}else{prop.push(['box',[-edgeX+.7,.2,-edgeZ-.55],[1.2,.85,.9],0xd1cbb0]);prop.push(['cone',[-edgeX+.7,.9,-edgeZ-.55],[.94,.7,.78],battle.mapRules?.theme==='ochre'?0x947b60:0x6c8980]);for(const x of [-edgeX-.4,edgeX+.4]){prop.push(['cyl',[x,.2,0],[.1,1,.1],0x706b4c]);prop.push(['cone',[x,1,0],[.6,1.4,.6],battle.mapRules?.theme==='ochre'?0x8c9261:0x477f65]);}}
terrainGroup.add(new THREE.Mesh(bake(prop),sharedMat));
for(const u of battle.units){const model=figure(u);model.position.copy(toWorld(tile(u.x,u.z)));model.rotation.y=(2-u.dir)*Math.PI/2;model.visible=u.hp>0;unitGroup.add(model);models.set(u.id,model);createUnitLabel(u);}
refreshLoot();zoom=mapWidth(battle)!==mapHeight(battle)?1.18:1;pan.set(0,0,0);angle=targetAngle=Math.PI/4;resize();refreshHighlights();}
function resize(){const r=viewport.getBoundingClientRect();renderer.setSize(r.width,r.height,false);const aspect=r.width/r.height,span=(battle?.size||8)*.79;camera.left=-span;camera.right=span;camera.top=span/aspect;camera.bottom=-span/aspect;camera.updateProjectionMatrix();}
new ResizeObserver(resize).observe(viewport);
// CSS scaling changes screen pixels without changing the observed layout size.
window.addEventListener('tactics-layout',resize);
function marker(t,color,opacity=.5,size=.9){const mesh=new THREE.Mesh(new THREE.PlaneGeometry(size,size),new THREE.MeshBasicMaterial({color,transparent:true,opacity,depthWrite:false,side:THREE.DoubleSide}));mesh.rotation.x=-Math.PI/2;mesh.position.copy(toWorld(t));mesh.position.y+=.028;highlightGroup.add(mesh);return mesh;}
// Draw only exposed edges of the range, including holes, at each tile's height.
// Triangle ribbons give reliable line thickness on iPhone/WebGL (linewidth does not).
function rangeBoundaryEdges(keys){
 const edges=[];
 for(const k of keys){const [x,z]=k.split(',').map(Number);for(const [dx,dz]of [[-1,0],[1,0],[0,-1],[0,1]])if(!keys.has(key(x+dx,z+dz)))edges.push({x,z,dx,dz});}
 return edges;
}
function drawRangeBoundary(keys,color=0xb1f2ff){
 const edges=rangeBoundaryEdges(keys);
 for(const [width,tint,lift]of [[.085,0x082e55,.064],[.038,color,.066]]){
  const positions=[];
  for(const {x,z,dx,dz}of edges){const p=toWorld(tile(x,z)),y=p.y+lift;
   const ax=p.x+(dx?dx*.5:-.5),az=p.z+(dz?dz*.5:-.5),bx=p.x+(dx?dx*.5:.5),bz=p.z+(dz?dz*.5:.5),ox=dx?width/2:0,oz=dz?width/2:0;
   positions.push(ax-ox,y,az-oz,bx-ox,y,bz-oz,bx+ox,y,bz+oz,ax-ox,y,az-oz,bx+ox,y,bz+oz,ax+ox,y,az+oz);
  }
  if(!positions.length)continue;
  const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));
  const mesh=new THREE.Mesh(geometry,new THREE.MeshBasicMaterial({color:tint,transparent:true,opacity:1,side:THREE.DoubleSide,depthWrite:false}));mesh.renderOrder=2;mesh.userData.rangeBoundary=true;highlightGroup.add(mesh);
 }
}
function drawMovementRange(u){
 const keys=new Set(movement(u).keys());
 for(const k of keys){const [x,z]=k.split(',').map(Number),m=marker(tile(x,z),0x147de8,.72,.96);m.position.y+=.012;m.userData.movementRange=true;}
 drawRangeBoundary(keys);
}
function refreshHighlights(){disposeGroup(highlightGroup);if(!battle)return;const stage=getStage();if(stage?.goal==='reach'){const m=marker(tile(battle.goal.x,battle.goal.z),0xffd77f,.8);m.position.y+=.05;m.renderOrder=3;}for(const t of battle.danger||[]){const m=marker(tile(t.x,t.z),0xf18c61,.8);m.position.y+=.055;m.renderOrder=3;}const enemy=battle.units.find(v=>v.id===inspectedEnemy&&v.hp>0);if(enemy&&!isTitle){for(const k of enemyMoveRange(enemy).keys()){const [x,z]=k.split(',').map(Number);const m=marker(tile(x,z),0xffb76d,.53);m.userData.enemyRange=true;}marker(tile(enemy.x,enemy.z),0xffeee0,.85);return;}const selectedItem=battle.pickups?.find(v=>v.id===inspectedItem&&!v.collected);if(selectedItem&&!isTitle){marker(tile(selectedItem.x,selectedItem.z),0xffdc75,.85);return;}const u=unit();if(!u||u.hp<=0||isTitle||battle.phase!=='player')return;if((mode==='move'&&!u.moved)||preview?.type==='move')drawMovementRange(u);const selectedMarker=marker(tile(u.x,u.z),0xffffff,.45);selectedMarker.position.y+=.035;selectedMarker.renderOrder=3;if(preview){if(preview.type==='move'){for(const t of pathfind(u,preview.tile).slice(1)){const m=marker(t,0xc7faff,.9,.76);m.position.y+=.045;m.renderOrder=3;}}else{for(const t of areaTiles(preview.tile,skill||basic(u)))marker(t,['heal','buff','cleanse'].includes((skill||{}).type)?0x94f5af:0xffae8e,.75);}return;}
if(mode==='attack'||mode==='skill'){const s=skill||basic(u);for(const t of battle.tiles)if(inRange(u,t,s))marker(t,['heal','buff','cleanse'].includes(s.type)?0x19c48e:0xe34c79,.57,.94);}}
function project(pos){const v=pos.clone().project(camera);return {x:(v.x*.5+.5)*viewport.clientWidth,y:(-v.y*.5+.5)*viewport.clientHeight};}
function floating(u,text,color='#fff3cc'){const m=models.get(u.id);if(!m)return;const p=project(m.position.clone().add(new THREE.Vector3(0,1.1,0))),el=document.createElement('div');el.className='float';el.textContent=text;el.style.left=`${p.x}px`;el.style.top=`${p.y}px`;el.style.color=color;viewport.append(el);setTimeout(()=>el.remove(),1100);}
let activeSpell=null;
function spellEffect(t,s){const element=s.element||(['heal','cleanse'].includes(s.type)?'light':'dark'),duration=Math.max(1200,(s.id==='meteor'||s.name.includes('메테오')?2200:1800)/save.settings.speed),group=new THREE.Group(),p=toWorld(t),radius=.55+(s.area||0)*.36,colors={fire:0xff7a21,thunder:0xffed94,ice:0x9aeaff,wind:0x84f5cd,light:0xfff3b1,dark:0xb784ff},color=colors[element]||colors.dark;group.position.copy(p);fxGroup.add(group);const mat=(c,opacity=1)=>new THREE.MeshBasicMaterial({color:c,transparent:true,opacity,depthWrite:false,blending:THREE.AdditiveBlending});const ring=new THREE.Mesh(new THREE.RingGeometry(radius*.7,radius,36),mat(color,.7));ring.rotation.x=-Math.PI/2;ring.position.y=.05;group.add(ring);const core=new THREE.Mesh(new THREE.SphereGeometry(element==='fire'?.3:.22,12,8),mat(element==='fire'?0xffe49a:color));group.add(core);const glow=new THREE.Mesh(new THREE.SphereGeometry(.48,12,8),mat(color,.28));if(element==='fire'){glow.material.blending=THREE.NormalBlending;glow.material.opacity=.55;}group.add(glow);const pieces=[];for(let i=0;i<10;i++){const m=new THREE.Mesh(element==='ice'?new THREE.ConeGeometry(.1,.7,5):element==='wind'?new THREE.TorusGeometry(radius,.035,5,32):new THREE.SphereGeometry(.1,6,4),mat(i%2?color:element==='fire'?0xffba42:0xffefc5,.85));group.add(m);pieces.push(m);}const sparkGeometry=new THREE.BufferGeometry(),positions=new Float32Array(40*3);sparkGeometry.setAttribute('position',new THREE.BufferAttribute(positions,3));const sparks=new THREE.Points(sparkGeometry,new THREE.PointsMaterial({color,size:.09,transparent:true,opacity:1,depthWrite:false,blending:THREE.AdditiveBlending}));group.add(sparks);const bolts=[];if(element==='thunder'){for(let j=0;j<3;j++){const coords=[];for(let i=0;i<9;i++)coords.push(new THREE.Vector3((Math.random()-.5)*.35+j*.13,3.2-i*.4,(Math.random()-.5)*.3));const line=new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(coords),24,j===0?.035:.022,4,false),mat(j===0?0xffffff:0x9bddff));group.add(line);bolts.push(line);}}let impactResolve,doneResolve;const impact=new Promise(r=>impactResolve=r),done=new Promise(r=>doneResolve=r),start=performance.now();let hit=false;activeSpell={element,phase:'casting',duration,elapsed:0};spellSound(element);function draw(now){const q=Math.min(1,(now-start)/duration),fall=Math.min(1,q/.55),tail=Math.max(0,(q-.55)/.45);activeSpell={element,phase:q<.55?'casting':'impact',duration,elapsed:now-start};ring.rotation.z=now*.003;ring.scale.setScalar(q<.55?.55+fall*.45:1+tail*.6);ring.material.opacity=q<.55?.35+fall*.45:(1-tail)*.85;if(!hit&&q>=.55){hit=true;spellSound(element,true);impactResolve();}const descend=3.1*(1-fall*fall);core.visible=element!=='thunder';glow.visible=q<.75;core.position.set(element==='fire'?(1-fall)*.6:0,q<.55?element==='fire'?descend+.2:.35+Math.sin(fall*Math.PI)*1.3:.3,0);core.scale.setScalar(q<.55?element==='fire'?.5+fall:1:q<.7?1+tail*4:Math.max(.01,2*(1-tail)));core.material.opacity=1-tail;glow.position.copy(core.position);glow.scale.setScalar(1+tail*3);glow.material.opacity=(element==='fire'?.55:.25)*(1-tail);for(let i=0;i<pieces.length;i++){const m=pieces[i],a=i/pieces.length*Math.PI*2+now*.002;if(element==='fire'){m.position.set(q<.55?core.position.x+(Math.random()-.5)*.18:Math.cos(a)*radius*tail,q<.55?core.position.y+.2+i*.09:.12+Math.sin(tail*Math.PI)*(.5+i%3*.2),q<.55?(Math.random()-.5)*.15:Math.sin(a)*radius*tail);m.scale.setScalar(q<.55?.6+i*.05:2*(1-tail)+.1);}else if(element==='ice'){m.position.set(Math.cos(a)*radius,.1+Math.min(1,fall)*.25,Math.sin(a)*radius);m.scale.y=q<.55?fall:1-tail;}else if(element==='wind'){m.position.set(0,.12+i*.11,0);m.rotation.x=Math.PI/2;m.rotation.y=Math.sin(now*.003+i)*.12;m.scale.setScalar(.25+i*.07);m.material.opacity=(q<.55?fall:1-tail)*.5;}else{m.position.set(Math.cos(a)*radius*(1-tail),.2+i*.08+Math.sin(now*.004+i)*.12,Math.sin(a)*radius*(1-tail));}m.material.opacity*=q>.85?.94:1;}for(let i=0;i<40;i++){const a=i*2.4+now*.001,r=q<.55?radius*(1-fall*.5):radius*(.2+tail*1.6);positions[i*3]=Math.cos(a)*r;positions[i*3+1]=element==='fire'&&q<.55?core.position.y+i*.016:.12+(i%7)*.12*(q<.55?fall:1-tail);positions[i*3+2]=Math.sin(a)*r;}sparkGeometry.attributes.position.needsUpdate=true;sparks.material.opacity=q<.55?fall:1-tail;for(const bolt of bolts){bolt.visible=q>=.5&&q<.88;bolt.material.opacity=(1-tail)*(.4+Math.abs(Math.sin(now*.06))*.6);}if(q<1){requestAnimationFrame(draw);return;}fxGroup.remove(group);disposeGroup(group);activeSpell=null;doneResolve();}requestAnimationFrame(draw);return {impact,done};}
function burst(t,color=0xffc47f,count=18){const p=toWorld(t);for(let i=0;i<count;i++){const m=new THREE.Mesh(new THREE.SphereGeometry(.035+Math.random()*.04,4,3),new THREE.MeshBasicMaterial({color,transparent:true,opacity:.9}));m.position.copy(p).y+=.4;fxGroup.add(m);particles.push({m,v:new THREE.Vector3((Math.random()-.5)*2,Math.random()*2+1,(Math.random()-.5)*2),life:.7});}}
function renderLoop(ms){animId=requestAnimationFrame(renderLoop);if(document.hidden)return;const dt=Math.min(.05,(ms-lastFrame)/1000||.016);lastFrame=ms;if(waterSurface)waterSurface.material.uniforms.uTime.value=ms*.001;angle+=(targetAngle-angle)*Math.min(1,dt*9);camera.zoom+=(zoom-camera.zoom)*Math.min(1,dt*9);camera.updateProjectionMatrix();camLook.copy(pan);camLook.y+=.45;if(camFocus)camLook.lerp(camFocus,.22);camera.position.set(camLook.x+Math.sin(angle)*16,17+camLook.y,camLook.z+Math.cos(angle)*16);if(impactShake>.001){camera.position.x+=(Math.random()-.5)*impactShake;camera.position.y+=(Math.random()-.5)*impactShake;impactShake*=Math.exp(-dt*18);}camera.lookAt(camLook);if(isTitle)targetAngle+=dt*.027;
for(const u of battle?.units||[]){const m=models.get(u.id);if(!m)continue;m.visible=u.hp>0;m.userData.body.position.y=Math.sin(ms*.003+u.x)*.022;m.userData.body.rotation.z=(u.hp>0&&u.acted?.035:0)+(m.userData.attackLean||0)+(m.userData.hitLean||0);const el=labelEls.get(u.id);if(el){el.style.display=u.hp<=0||isTitle?'none':'block';const p=project(m.position.clone().add(new THREE.Vector3(0,u.boss?1.95:1.33,0)));el.style.left=`${p.x}px`;el.style.top=`${p.y}px`;el.querySelector('i').style.width=`${u.hp/u.maxHp*100}%`;el.querySelector('.hp-value').textContent=`${Math.ceil(u.hp)}/${u.maxHp}`;el.querySelector('.done').textContent=u.acted?'✓':u.id===selected?'▼':Object.keys(u.status).length?'•':'';}}
for(let i=particles.length-1;i>=0;i--){const p=particles[i];p.life-=dt;p.m.position.addScaledVector(p.v,dt);p.v.y-=dt*2;p.m.material.opacity=p.life;if(p.life<=0){fxGroup.remove(p.m);p.m.geometry.dispose();p.m.material.dispose();particles.splice(i,1);}}
renderer.render(scene,camera);}
requestAnimationFrame(renderLoop);
const pointers=new Map();let gesture=null,pinchDistance=0;
canvas.addEventListener('pointerdown',e=>{unlockAudio();canvas.setPointerCapture(e.pointerId);pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});gesture={x:e.clientX,y:e.clientY,lastX:e.clientX,lastY:e.clientY,time:performance.now(),moved:false,pinch:pointers.size>1};if(pointers.size===2){const a=[...pointers.values()];pinchDistance=Math.hypot(a[0].x-a[1].x,a[0].y-a[1].y);}});
canvas.addEventListener('pointermove',e=>{if(!pointers.has(e.pointerId)||!gesture)return;pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});if(pointers.size===2){const a=[...pointers.values()],d=Math.hypot(a[0].x-a[1].x,a[0].y-a[1].y);zoom=clamp(zoom*d/Math.max(1,pinchDistance),.72,maxBattleZoom());pinchDistance=d;gesture.pinch=true;return;}const dx=e.clientX-gesture.lastX,dy=e.clientY-gesture.lastY;if(Math.hypot(e.clientX-gesture.x,e.clientY-gesture.y)>9)gesture.moved=true;if(gesture.moved){const displayScale=viewport.getBoundingClientRect().width/viewport.clientWidth||1,k=.022/(zoom*displayScale);pan.x-=dx*Math.cos(angle)*k+dy*Math.sin(angle)*k;pan.z+=dx*Math.sin(angle)*k-dy*Math.cos(angle)*k;pan.x=clamp(pan.x,-battle.size/2,battle.size/2);pan.z=clamp(pan.z,-battle.size/2,battle.size/2);}gesture.lastX=e.clientX;gesture.lastY=e.clientY;});
canvas.addEventListener('pointerup',e=>{pointers.delete(e.pointerId);if(!gesture)return;const g=gesture;if(pointers.size){g.pinch=true;return;}gesture=null;if(g.pinch)return;const dx=e.clientX-g.x,dy=e.clientY-g.y;if(g.moved){if(Math.abs(dx)>85&&Math.abs(dy)<55&&performance.now()-g.time<240){targetAngle+=dx>0?-Math.PI/2:Math.PI/2;pan.set(0,0,0);}return;}const r=canvas.getBoundingClientRect();pointer.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1);raycaster.setFromCamera(pointer,camera);const hits=raycaster.intersectObjects(unitGroup.children,true);if(hits.length){let root=hits[0].object;while(root.parent&&root.parent!==unitGroup)root=root.parent;const entry=[...models].find(([id,m])=>m===root);if(entry){const u=battle.units.find(u=>u.id===entry[0]);if(u.hp>0){tapTile(tile(u.x,u.z));return;}}}const hit=raycaster.intersectObjects(tileMeshes)[0];if(hit)tapTile(battle.tiles[hit.instanceId]);});
canvas.addEventListener('pointercancel',e=>{pointers.delete(e.pointerId);gesture=null;});canvas.addEventListener('wheel',e=>{e.preventDefault();zoom=clamp(zoom-e.deltaY*.001,.72,maxBattleZoom());},{passive:false});
$('#rotate').onclick=()=>{targetAngle+=Math.PI/2;sfx();};$('#zoomIn').onclick=()=>zoom=clamp(zoom+.2,.72,maxBattleZoom());$('#zoomOut').onclick=()=>zoom=clamp(zoom-.2,.72,maxBattleZoom());$('#resetCam').onclick=()=>{pan.set(0,0,0);zoom=1;targetAngle=Math.PI/4;};
function selectUnit(u){if(!canControl()||u.team!=='ally'||u.hp<=0)return;inspectedEnemy=null;inspectedItem=null;selected=u.id;skill=null;preview=null;mode=u.moved?'attack':'move';sfx();refreshUI();refreshHighlights();}
function tapTile(t,skipItem=false){if(!canControl())return;const u=unit(),o=occ(t.x,t.z),s=skill||(u?basic(u):null);const attacking=u&&!u.acted&&['attack','skill'].includes(mode)&&s&&!['heal','buff','cleanse'].includes(s.type)&&inRange(u,t,s);const item=battle.pickups?.find(v=>!v.collected&&v.x===t.x&&v.z===t.z);if(item&&!o&&!skipItem){if(mode==='move'&&u&&!u.moved&&movement(u).has(key(t.x,t.z))){inspectedEnemy=null;inspectedItem=null;skill=null;preview={type:'move',tile:t};confirmAction();}else showFieldItem(item);return;}if(o?.team==='enemy'&&!attacking){inspectEnemy(o);return;}if(inspectedItem){inspectedItem=null;refreshUI();}if(inspectedEnemy){inspectedEnemy=null;inspectedItem=null;if(o?.team==='ally'){selectUnit(o);return;}if(!attacking){refreshUI();refreshHighlights();return;}}if(!u){if(o?.team==='ally')selectUnit(o);return;}
if(preview&&preview.tile.x===t.x&&preview.tile.z===t.z){confirmAction();return;}
if(mode==='move'){if(o?.team==='ally'){selectUnit(o);return;}if(u.moved){toast('이번 턴에는 더 이동할 수 없어요.');return;}if(!movement(u).has(key(t.x,t.z))){toast('이동 범위 밖이거나 지형에 막혀 있어요.');return;}preview={type:'move',tile:t};}
else{const s=skill||basic(u);if(o?.team==='ally'&&!['heal','cleanse','buff'].includes(s.type)){selectUnit(o);return;}if(u.acted){toast('행동을 마친 캐릭터입니다.');return;}if(!inRange(u,t,s)){toast('사거리 또는 높이 범위 밖입니다.');return;}if(!targets(u,t,s).length){toast('이 범위에 대상이 없어요.');return;}preview={type:'action',tile:t};}refreshUI();refreshHighlights();}
function showFieldItem(item){if(!canControl())return;inspectedEnemy=null;inspectedItem=item.id;preview=null;sfx();refreshUI();refreshHighlights();}
function renderFieldItemInfo(item){const g=GEAR.find(v=>v.id===item.gearId),p=CONSUMABLES[item.consumableId||'hpMedium'],u=unit(),t=tile(item.x,item.z),reachable=u&&!u.moved&&movement(u).has(key(item.x,item.z));$('#panel').innerHTML=`<div class="party-strip">${alive('ally').map(v=>`<button class="party-chip ${v.id===selected?'active':''}" data-item-ally="${v.id}">${v.name}<small>${v.acted?'✓':''}</small></button>`).join('')}</div><div class="unitrow"><div class="portrait">${portraitHTML(item,true)}</div><div class="unitinfo"><div class="unitname">${g?.name||(item.type==='potion'?p.name:PICKUP_NAMES[item.type])}</div><div class="hint">${PICKUP_NAMES[item.type]}${g?' · '+TIERS[g.tier]:''}</div></div></div><div class="enemy-details" id="fieldItemInfo"><span>${g?gearBonusText(g):item.type==='gold'?`획득 골드: ${item.amount} G`:`${p.name} 1개 · 최대 ${p.stat.toUpperCase()} ${Math.round(p.ratio*100)}% 회복`}</span><span>위치 (${item.x+1}, ${item.z+1}) · 높이 ${t.height}</span><span>아군이 지나가거나 도착하면 자동으로 획득합니다.</span>${g?'<span>전투 종료 후 가방에서 장착할 수 있습니다.</span>':''}</div><div class="turnrow"><button class="endturn" id="itemMove" ${reachable?'':'disabled'}>${reachable?'이 칸으로 이동':'현재 이동 범위 밖'}</button><button class="endturn" id="closeItemInfo">아군 정보</button></div>`;$('#panel').querySelectorAll('[data-item-ally]').forEach(b=>b.onclick=()=>selectUnit(battle.units.find(v=>v.id===b.dataset.itemAlly)));$('#closeItemInfo').onclick=()=>{inspectedItem=null;refreshUI();refreshHighlights();};$('#itemMove').onclick=()=>{inspectedItem=null;setMode('move');tapTile(t);};}
function setMode(m){if(!canControl())return;inspectedEnemy=null;inspectedItem=null;const u=unit();if(!u||(m==='move'?u.moved:u.acted))return;mode=m;skill=null;preview=null;sfx();if(m==='skill'){showSkills();return;}refreshUI();refreshHighlights();}
function refreshUI(){$('#app').classList.toggle('battle-active',!isTitle);const stage=getStage();$('#stagebar').hidden=isTitle;$('#panel').hidden=isTitle;$('#title').hidden=!isTitle;if(!battle)return;$('#chapterlabel').textContent=(customMode?'CUSTOM · ':'')+CHAPTERS[stage.chapter][0];$('#stagetitle').textContent=stage.name;$('#objective').textContent=goalText(stage);$('#turn').textContent=`TURN ${String(battle.round).padStart(2,'0')} · ${battle.phase==='enemy'?'ENEMY':'ALLY'}`;const fieldItem=battle.pickups?.find(v=>v.id===inspectedItem&&!v.collected);if(fieldItem){renderFieldItemInfo(fieldItem);return;}inspectedItem=null;const enemy=battle.units.find(v=>v.id===inspectedEnemy&&v.hp>0);if(enemy){renderEnemyInfo(enemy);return;}inspectedEnemy=null;inspectedItem=null;const u=unit();if(!u){$('#panel').innerHTML=`<div class="hint">아군을 선택하세요.</div>`;return;}
const canAction=canControl()&&!u.acted,canMove=canControl()&&!u.moved,stats=Object.keys(u.status).map(s=>STATUS[s]||s).join(' · '),p=heroRecord(u.heroId);let forecast='';
if(preview){if(preview.type==='move'){const cost=movement(u).get(key(preview.tile.x,preview.tile.z));forecast=`이동 비용 <b>${cost}</b> / ${u.move+(u.status.speed?2:0)-(u.status.freeze?2:0)} · 높이 ${tile(u.x,u.z).height} → ${preview.tile.height}<br>같은 칸을 다시 탭하거나 이동 확정${battle.pickups?.filter(v=>!v.collected&&pathfind(u,preview.tile).slice(1).some(t=>t.x===v.x&&t.z===v.z)).map(v=>`<br>획득: ${PICKUP_NAMES[v.type]}${v.gearId?' · '+GEAR.find(g=>g.id===v.gearId).name:v.type==='gold'?' +'+v.amount+' G':''}`).join('')||''}`;}
else{const s=skill||basic(u),ts=targets(u,preview.tile,s);forecast=`<div class="forecast-targets">${ts.map(t=>`<div class="forecast-target">${forecastHP(u,t,s)}${t.team==='enemy'?` <button class="target-info" data-target-info="${t.id}">정보 · 이동 범위</button>`:''}</div>`).join('')}</div>`;forecast+=`<br><span class="footnote">${s.name}${s.mp?` · MP ${s.mp}`:''}${ts.some(t=>estimate(u,t,s).bonus===.2)?' · 후방 보너스':''} · 치명타 별도</span>`;}
forecast=`<div class="forecast">${forecast}<div class="confirmrow"><button id="confirmAction" ${busy?'disabled':''}>${preview.type==='move'?'이동 확정':'행동 확정'}</button><button class="cancel" id="cancelAction">취소</button></div></div>`;}
$('#panel').innerHTML=`${forecast}${!preview?hitReportHTML():''}<div class="party-strip">${alive('ally').map(v=>`<button class="party-chip ${v.id===selected?'active':''} ${v.acted?'spent':''}" data-unit="${v.id}" aria-label="${v.name} 선택">${v.name}<small>${v.acted?'✓':v.moved?'•':''}</small></button>`).join('')}</div><div class="unitrow"><div class="portrait" style="background:#${new THREE.Color(u.color).getHexString()}35">${portraitHTML(u)}</div><div class="unitinfo"><div class="unitname">${u.name}<small>Lv.${u.level} ${className(u)}</small></div><div class="bars"><div class="statbar"><div class="numbers"><span>HP</span><span>${Math.ceil(u.hp)} / ${u.maxHp}</span></div><div class="track"><i style="width:${u.hp/u.maxHp*100}%"></i></div></div><div class="statbar"><div class="numbers"><span>MP</span><span>${u.mp} / ${u.maxMp}</span></div><div class="track mp"><i style="width:${u.mp/u.maxMp*100}%"></i></div></div></div></div></div><div class="unitstats"><span>ATK ${Math.round(u.atk)} · DEF ${Math.round(u.def)} · MOV ${u.move}</span><span>${stats||`이동 ${u.moved?'완료':'가능'} · 행동 ${u.acted?'완료':'가능'}`}</span></div><div class="actions"><button class="action ${mode==='move'?'active':''}" id="move" ${!canMove?'disabled':''}><b>◇</b>이동</button><button class="action ${mode==='attack'?'active':''}" id="attack" ${!canAction?'disabled':''}><b>⚔</b>공격</button><button class="action ${mode==='skill'?'active':''}" id="skill" ${!canAction?'disabled':''}><b>✦</b>스킬</button><button class="action" id="wait" ${!canAction&&!canMove?'disabled':''}><b>◷</b>대기</button></div><div class="turnrow"><div class="hint">${busy?'행동 중…':battle.phase==='enemy'?'적이 움직이고 있습니다.':u.acted&&u.moved?'이동과 행동을 마쳤습니다.':u.acted?'행동 완료 · 남은 이동을 사용할 수 있습니다.':mode==='move'?'파란 칸을 두 번 탭해 이동하세요.':mode==='skill'?`${skill?.name||'스킬 선택'} · 대상 칸을 두 번 탭`:'적을 탭해 예상 피해를 확인하세요.'}</div><button class="endturn" id="endTurn" ${!canControl()?'disabled':''}>턴 종료</button></div>`;
$('#dismissHitReport')?.addEventListener('click',()=>{lastHitReport=null;refreshUI();});$('#panel').querySelectorAll('[data-target-info]').forEach(b=>b.onclick=()=>inspectEnemy(battle.units.find(v=>v.id===b.dataset.targetInfo)));$('#panel').querySelectorAll('[data-unit]').forEach(b=>b.onclick=()=>selectUnit(battle.units.find(u=>u.id===b.dataset.unit)));$('#move').onclick=()=>setMode('move');$('#attack').onclick=()=>setMode('attack');$('#skill').onclick=()=>setMode('skill');$('#wait').onclick=()=>waitUnit();$('#endTurn').onclick=()=>askEndTurn();if(preview){$('#confirmAction').onclick=confirmAction;$('#cancelAction').onclick=()=>{preview=null;refreshUI();refreshHighlights();};}}
function goalText(s){return s.goal==='boss'?'승리: 보스 격파 · 패배: 카일 전투 불능':s.goal==='survive'?'승리: 5턴 생존 · 패배: 카일 전투 불능':s.goal==='reach'?'승리: 카일이 황금 타일 도착':'승리: 모든 적 처치 · 카일을 지키세요';}
async function tween(ms,fn){const start=performance.now(),duration=ms/save.settings.speed;return new Promise(resolve=>{function tick(now){const t=clamp((now-start)/duration,0,1);fn(t<.5?2*t*t:1-(-2*t+2)**2/2);if(t<1)requestAnimationFrame(tick);else resolve();}requestAnimationFrame(tick);});}
async function animateMove(u,path){const m=models.get(u.id);for(const t of path.slice(1)){const start=m.position.clone(),end=toWorld(t);u.dir=facing(u,t);m.rotation.y=(2-u.dir)*Math.PI/2;sfx('move');await tween(130,v=>{m.position.lerpVectors(start,end,v);m.position.y+=Math.sin(v*Math.PI)*.1;});u.x=t.x;u.z=t.z;collectPickup(u);}u.moved=true;}
async function confirmAction(){if(!canControl()||!preview)return;const p=preview,u=unit();if(!u||(p.type==='move'?u.moved:u.acted))return;preview=null;busy=true;refreshUI();try{if(p.type==='move'){const path=pathfind(u,p.tile),cost=movement(u).get(key(p.tile.x,p.tile.z));if(cost==null||!path.length)throw Error('이동 경로가 변경되었습니다.');await animateMove(u,path);log(`${u.name} 이동 (${u.x+1}, ${u.z+1})`);mode='attack';}else{const s=skill||basic(u);if(u.mp<s.mp)throw Error('MP가 부족합니다.');await perform(u,p.tile,s);u.acted=true;skill=null;mode=u.moved?'attack':'move';}checkEnd();persist();}catch(e){toast(e.message);}finally{busy=false;refreshUI();refreshHighlights();if(battle.phase==='player'&&u.acted&&u.moved)afterAction();}}
async function perform(u,t,s){
 const list=targets(u,t,s),report=u.team==='ally'&&['physical','magic'].includes(s.type)?{skill:s.name,rows:[]}:null;
 if(report)lastHitReport=report;u.mp-=s.mp||0;
 const m=models.get(u.id);if(dist(u,t))u.dir=facing(u,t);m.rotation.y=(2-u.dir)*Math.PI/2;camFocus=toWorld(t);
 const base=m.position.clone(),melee=s.type==='physical'&&dist(u,t)<=1&&list.length>0,direction=toWorld(t).sub(base).setY(0).normalize(),forward=direction.clone().multiplyScalar(melee?.53:.22);
 const hasSpell=s.type==='magic'||['heal','cleanse'].includes(s.type)||(s.type==='physical'&&s.element);
 if(!hasSpell&&!melee)sfx(['buff'].includes(s.type)?'heal':'tap');
 if(melee){
  const back=direction.clone().multiplyScalar(-.18);
  await tween(260,v=>{m.position.copy(base).addScaledVector(back,v);m.position.y=base.y-.05*v;m.userData.body.rotation.x=.23*v;m.userData.attackLean=-.12*v;});
  sfx('swing');
  await tween(95,v=>{m.position.copy(base).addScaledVector(back,1-v).addScaledVector(forward,v);m.position.y=base.y+Math.sin(v*Math.PI)*.09;m.userData.body.rotation.x=.23-.56*v;m.userData.attackLean=.2*v;});
 }else{await tween(180,v=>{m.position.copy(base).addScaledVector(forward,Math.sin(v*Math.PI));m.userData.body.rotation.x=-Math.sin(v*Math.PI)*.2;});m.position.copy(base);m.userData.body.rotation.x=0;}
 const spell=hasSpell?spellEffect(t,s):null;if(spell)await spell.impact;
 const colors={fire:0xf3a478,ice:0x9ddded,thunder:0xebd68c,wind:0xb4e8b9,light:0xf4e9b0,dark:0xbb9adb};
 for(const v of list){
  const beforeHp=Math.ceil(v.hp);if(!spell)burst(tile(v.x,v.z),colors[s.element]||0xf3da9d,s.area?14:20);
  if(s.type==='heal'){const amount=Math.min(v.maxHp-v.hp,estimate(u,v,s).damage);v.hp+=amount;if(s.cleanse)v.status={};floating(v,`+${amount}`,'#aff0c7');log(`${u.name} → ${v.name} ${amount} 회복`);if(amount>0&&u.heroId)addXP(u.heroId,18);}
  else if(s.type==='cleanse'){v.status={};floating(v,'정화','#aff0c7');if(u.heroId)addXP(u.heroId,12);}
  else if(s.type==='buff'){v.status[s.buff]=3;floating(v,STATUS[s.buff],'#d4ecc3');if(u.heroId)addXP(u.heroId,10);}
  else if(s.type==='taunt'){v.status.taunt=3;v.tauntSource=u.id;floating(v,'도발','#f0c495');}
  else{
   const e=estimate(u,v,s);
   if(random()>e.hit){report?.rows.push({name:v.name,before:beforeHp,after:beforeHp,miss:true});floating(v,'MISS','#e2e9dd');log(`${u.name}의 공격을 ${v.name} 회피`);if(melee)sfx('tap');continue;}
   const crit=random()<(u.crit||.05),damage=Math.max(1,Math.round(e.damage*(.95+random()*.1)*(crit?1.5:1)));
   v.hp=Math.max(0,v.hp-damage);report?.rows.push({name:v.name,before:beforeHp,after:Math.ceil(v.hp),crit});delete v.status.sleep;
   if(melee){const victim=models.get(v.id),home=victim.position.clone(),push=home.clone().sub(base).setY(0).normalize().multiplyScalar(crit?.43:.31);sfx('hit');impactShake=crit?.28:.2;burst(tile(v.x,v.z),crit?0xffef9a:0xffd4a6,crit?40:28);await sleep(35);await tween(175,q=>{victim.position.copy(home).addScaledVector(push,Math.sin(q*Math.PI));victim.userData.hitLean=(u.x<v.x?-.24:.24)*Math.sin(q*Math.PI);});victim.position.copy(home);victim.userData.hitLean=0;}
   floating(v,`${crit?'CRIT ':''}${damage}`);if(s.status&&random()<(s.chance??.5)&&!v.boss)v.status[s.status]=s.status==='stun'?1:3;if(s.debuff)v.status.defdown=3;
   log(`${u.name} ${s.name} → ${v.name} ${damage}${crit?' 치명타':''}`);if(u.heroId)addXP(u.heroId,v.hp<=0?38+v.level*2:12);
   if(v.hp<=0){sfx('death');log(`${v.name} 전투 불능`);models.get(v.id).visible=false;}
  }
 }
 if(melee){await tween(140,q=>{m.position.copy(base).addScaledVector(forward,1-q);m.userData.body.rotation.x=-.33*(1-q);m.userData.attackLean=.2*(1-q);});m.position.copy(base);m.userData.body.rotation.x=0;m.userData.attackLean=0;}
 if(spell)await spell.done;else await sleep(melee?120:300);camFocus=null;
}
function waitUnit(){if(!canControl()||!unit()||(unit().acted&&unit().moved))return;unit().acted=true;unit().moved=true;preview=null;sfx();persist();refreshUI();refreshHighlights();afterAction();}
function afterAction(){if(checkEnd())return;const next=alive('ally').find(u=>!u.acted||!u.moved);if(next)selectUnit(next);else{toast('아군의 행동이 끝났습니다.');endPlayerTurn();}}
function askEndTurn(){if(!canControl())return;const left=alive('ally').filter(u=>!u.acted||!u.moved).length;if(left)showSheet('턴을 종료할까요?',`<p>이동 또는 행동이 남은 아군이 ${left}명 있습니다.</p><button class="primary" id="yesEnd">적 턴으로 진행</button><button class="secondary" id="noEnd">계속 행동</button>`,()=>{$('#yesEnd').onclick=()=>{closeSheet();endPlayerTurn();};$('#noEnd').onclick=closeSheet;});else endPlayerTurn();}
function announce(text){$('#banner').textContent=text;$('#banner').classList.add('show');setTimeout(()=>$('#banner').classList.remove('show'),1000/save.settings.speed);}
function phaseStart(team){for(const u of alive(team)){u.moved=false;u.acted=false;if(u.status.poison||u.status.burn){const damage=Math.max(1,Math.floor(u.maxHp*(u.status.poison ? .07 : .05)));u.hp=Math.max(0,u.hp-damage);floating(u,`${damage}`,'#d5b4e6');log(`${u.name} 상태 피해 ${damage}`);}if(u.status.sleep||u.status.stun)u.moved=u.acted=true;for(const k of Object.keys(u.status)){u.status[k]--;if(u.status[k]<=0)delete u.status[k];}u.mp=Math.min(u.maxMp,u.mp+3+(u.heroId==='ria'&&u.classLevel>=1?4:0)+(u.heroId==='luna'&&u.classLevel>=2?5:0));}}
async function endPlayerTurn(){if(!canControl())return;inspectedEnemy=null;inspectedItem=null;busy=true;preview=null;skill=null;battle.phase='enemy';phaseStart('enemy');persist();refreshHighlights();refreshUI();if(checkEnd()){busy=false;return;}announce('ENEMY PHASE');await sleep(700);busy=false;await enemyTurn();}
function attackScore(u,pos,t,s){const e=estimate({...u,x:pos.x,z:pos.z},t,s);return e.damage+(e.damage>=t.hp?(save.difficulty==='tactical'?150:100):0)+(t.heroId==='luna'?20:t.heroId==='ria'?15:0)+(tile(pos.x,pos.z).height>tile(t.x,t.z).height?10:0)+(u.status.taunt&&t.id===u.tauntSource?300:0)-(battle.danger.some(t=>t.x===pos.x&&t.z===pos.z)?20:0)+(save.difficulty==='tactical'?(1-t.hp/t.maxHp)*25:0);}
async function bossAction(u){const step=(battle.round-1)%5+1,profile=BOSS_PROFILES[u.bossId||getStage().chapter]||BOSS_PROFILES[9];if(step===3){const t=neighbors(tile(u.x,u.z)).find(t=>t.terrain!=='water'&&!occ(t.x,t.z));if(t){const m=MONSTERS[profile.summon],v={...m,id:`summon-${battle.round}-${u.id}`,team:'enemy',x:t.x,z:t.z,hp:40+u.level*3,maxHp:40+u.level*3,mp:0,maxMp:0,atk:14+u.level*2,def:8+u.level,res:8+u.level,mag:10+u.level,level:u.level,move:m.move,jump:1,dir:2,crit:.02,eva:0,statusAttack:m.status,status:{},acted:true,moved:true};battle.units.push(v);const model=figure(v);model.position.copy(toWorld(t));unitGroup.add(model);models.set(v.id,model);createUnitLabel(v);burst(t,0xbce6d4);log(`${u.name} ${m.name} 소환`);toast(`${u.name}이(가) ${m.name}을 소환했습니다.`);return true;}}
if(step===4){const target=alive('ally').sort((a,b)=>dist(u,a)-dist(u,b))[0];if(target){battle.danger=areaTiles(tile(target.x,target.z),{area:profile.radius,heightRange:99}).map(t=>({x:t.x,z:t.z}));refreshHighlights();log(`${u.name} ${profile.finisher} 예고`);toast(`${profile.finisher} 예고! 붉은 칸에서 벗어나세요.`);sfx('magic');await sleep(450);return true;}}
if(step===5&&battle.danger.length){sfx('magic');for(const t of battle.danger){burst(tile(t.x,t.z),0xe9a5e7,5);const v=occ(t.x,t.z);if(v?.team==='ally'){const damage=Math.round(u.mag*profile.power);v.hp=Math.max(0,v.hp-damage);floating(v,`${damage}`);log(`${profile.finisher} → ${v.name} ${damage}`);if(v.hp<=0)models.get(v.id).visible=false;}}battle.danger=[];await sleep(600);return true;}return false;}
// Find a complete legal route to an attack position, then walk its affordable
// prefix. A detour may initially increase straight-line distance or climb up.
function enemyPursuitPath(u,s,budget){
 const start=tile(u.x,u.z),startKey=key(u.x,u.z),cost=new Map([[startKey,0]]),came=new Map(),open=[start];
 while(open.length){
  open.sort((a,b)=>cost.get(key(a.x,a.z))-cost.get(key(b.x,b.z)));
  const a=open.shift(),ak=key(a.x,a.z);
  for(const b of neighbors(a)){
   const bk=key(b.x,b.z),v=cost.get(ak)+moveCost(a,b,u);
   if(v<(cost.get(bk)??Infinity)){cost.set(bk,v);came.set(bk,a);if(!open.includes(b))open.push(b);}
  }
 }
 const allies=alive('ally'),taunted=allies.find(v=>u.status.taunt&&v.id===u.tauntSource),groups=taunted?[[taunted],allies.filter(v=>v!==taunted)]:[allies];
 let goal=null;
 for(const group of groups){
  let bestCost=Infinity;
  for(const [k,c] of cost){const [x,z]=k.split(',').map(Number),pos=tile(x,z);
   if(c<bestCost&&group.some(v=>inRange({...u,x,z},tile(v.x,v.z),s))){goal=pos;bestCost=c;}
  }
  if(goal)break;
 }
 // If allies are temporarily cut off, still approach the closest legal frontier.
 if(!goal){let best=Infinity,bestCost=Infinity;for(const [k,c]of cost){const [x,z]=k.split(',').map(Number),pos=tile(x,z),score=Math.min(...allies.map(v=>dist(pos,v)+Math.max(0,Math.abs(pos.height-tile(v.x,v.z).height)-(s.heightRange??(s.range<=1?1:3)))));if(score<best||score===best&&c<bestCost){best=score;bestCost=c;goal=pos;}}}
 if(!goal)return [start];
 const path=[goal];let k=key(goal.x,goal.z);
 while(came.has(k)){const t=came.get(k);path.unshift(t);k=key(t.x,t.z);}
 let spent=0,end=0;
 for(let i=1;i<path.length;i++){const step=moveCost(path[i-1],path[i],u);if(spent+step>budget)break;spent+=step;end=i;}
 return path.slice(0,end+1);
}
async function enemyTurn(){if(!battle||battle.phase!=='enemy'||busy)return;busy=true;if(!enemyApproachPlanCurrent())battle.enemyApproachPlan=enemyApproachPlan();refreshUI();for(const u of alive('enemy')){if(u.acted||u.hp<=0)continue;if(checkEnd())break;const specialAction=!!(u.boss&&await bossAction(u));if(specialAction&&checkEnd())break;const profile=u.boss?BOSS_PROFILES[u.bossId||getStage().chapter]:null,s=u.boss&&(battle.round-1)%5===1?{name:profile.wave,type:'magic',power:1.1,mp:0,range:3,area:1,heightRange:2,element:profile.element,status:profile.status,chance:.5}:basic(u);if(u.status.silence&&s.type==='magic'){s.type='physical';s.range=1;}
const moveBudget=enemyMoveBudget(u),moveRange=movement(u,moveBudget);
u.approachCredit=enemyMovementCredit(u);
let best=null;if(!specialAction)for(const k of moveRange.keys()){const [x,z]=k.split(',').map(Number),pos=tile(x,z);for(const v of alive('ally'))if(inRange({...u,x,z},tile(v.x,v.z),s)){const score=attackScore(u,pos,v,s)-(dist(u,pos)*.15);if(!best||score>best.score)best={pos,target:v,score};}}
if(best){if(dist(u,best.pos))await animateMove(u,pathfind(u,best.pos));await perform(u,tile(best.target.x,best.target.z),s);}else{const path=enemyPursuitPath(u,s,moveBudget);if(path.length>1)await animateMove(u,path);}
u.approachCredit=Math.max(0,u.approachCredit-(moveRange.get(key(u.x,u.z))||0));
u.acted=true;u.moved=true;persist();refreshUI();if(checkEnd())break;await sleep(180);}
if(battle.phase==='enemy'){battle.round++;battle.phase='player';phaseStart('ally');checkEnd();if(battle.phase==='player'){announce('PLAYER PHASE');sfx('turn');selected=(alive('ally').find(u=>!u.acted)||alive('ally')[0])?.id;mode='move';if(getStage().goal==='survive'&&battle.round>5)finishBattle(true);}}
busy=false;persist();refreshUI();refreshHighlights();if(battle.phase==='player'&&!alive('ally').some(u=>!u.acted)){await sleep(500);endPlayerTurn();}}
function checkEnd(){if(!battle||!['player','enemy'].includes(battle.phase))return true;const k=battle.units.find(u=>u.heroId==='kyle'),s=getStage();if(!k||k.hp<=0){finishBattle(false);return true;}if(!alive('enemy').length||(s.goal==='boss'&&!alive('enemy').some(u=>u.boss))||(s.goal==='reach'&&k.x===battle.goal.x&&k.z===battle.goal.z)||(s.goal==='survive'&&battle.round>5)){finishBattle(true);return true;}if(battle.round>50){finishBattle(false);return true;}return false;}
function finishBattle(win){battle.phase=win?'victory':'defeat';preview=null;camFocus=null;if(win&&!battle.rewarded){const s=getStage(),first=!save.completed.includes(s.id);battle.rewarded=true;battle.reward={gold:Math.round((110+s.level*17)*(first?1:.35)),xp:Math.round((85+s.level*18)*(first?1:.5)),first};save.gold+=battle.reward.gold;for(const h of HEROES.filter(h=>customMode&&save.customConfig?.party==='all'||h.join<=s.chapter))addXP(h.id,battle.reward.xp);if(first)save.completed.push(s.id);save.chapter=Math.max(save.chapter,s.chapter);playBgm('victory');sfx('win');}else if(!win){playBgm('sad');sfx('lose');}persist();setTimeout(()=>showResult(),300);}
function recruitForChapter(ch){for(const h of HEROES){const p=heroRecord(h.id);if(h.join>0&&h.join<=ch&&p.level===1){p.level=1+h.join*3;}}}
function startBattle(s,ignoreUnlock=false){if(!customMode){if(!ignoreUnlock&&!isUnlocked(s)){showWorld(s.chapter);toast('지나간 추가 전투에는 입장할 수 없습니다.');return;}if(!ignoreUnlock&&s.kind==='story'&&s.n>0){const skipped=STAGES.find(v=>v.chapter===s.chapter&&v.kind==='side'&&v.n===s.n-1);if(skipped&&!save.completed.includes(skipped.id)&&!save.skippedSides.includes(skipped.id))save.skippedSides.push(skipped.id);}recruitForChapter(s.chapter);}closeSheet();isTitle=false;battle=makeBattle(s);save.retry=copy(battle);save.retryParty=copy(save.party);save.retryConsumables=copy(save.consumables);save.retryGold=save.gold;save.retryInventory=copy(save.inventory);save.retryLootSeq=save.lootSeq;selected=battle.units[0].id;preview=null;skill=null;busy=false;mode='move';buildScene();refreshUI();persist();playBgm(s.goal==='boss'?'boss':'battle');announce('PLAYER PHASE');if(s.id==='c0s0')setTimeout(()=>toast('카일을 선택한 뒤 파란 칸을 두 번 탭하세요.'),1100);}
function showSheet(title,html,bind=()=>{},options={}){stopModelPreview();const active=document.activeElement;$('#overlay').hidden=false;$('#sheet').innerHTML=`<div class="sheethead"><div><div class="eyebrow">CNATION TACTICS</div><h2>${title}</h2></div>${options.noClose?'':'<button class="iconbtn" id="closeSheet" aria-label="닫기">×</button>'}</div>${html}`;$('#closeSheet')?.addEventListener('click',()=>{if(options.back)options.back();else closeSheet();});bind();$('#sheet').scrollTop=0;$('#sheet').querySelector('button:not([disabled])')?.focus();modalBack=options.noClose?()=>{}:options.back||closeSheet;}
function closeSheet(){stopModelPreview();$('#overlay').hidden=true;modalBack=null;}
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('#overlay').hidden)modalBack?.();if(e.key==='Tab'&&!$('#overlay').hidden){const f=[...$('#sheet').querySelectorAll('button:not([disabled]),select,input,a[href]')];if(!f.length)return;if(e.shiftKey&&document.activeElement===f[0]){e.preventDefault();f.at(-1).focus();}else if(!e.shiftKey&&document.activeElement===f.at(-1)){e.preventDefault();f[0].focus();}}});
function showSkills(){const u=unit();showSheet(`${u.name}의 스킬`,u.skills.map((id,i)=>{const s=SKILLS[id],locked=u.level<UNLOCK[i],silenced=u.status.silence&&s.type!=='physical';return `<button class="choice" data-skill="${id}" ${locked||silenced||u.mp<s.mp?'disabled':''}><strong>${locked?`Lv.${UNLOCK[i]}`:`MP ${s.mp}`}</strong>${s.name}${i===4?' ✦':''}<small>${skillDescription(s)}${silenced?' · 침묵 상태':''}</small><small>${SKILL_NOTES[id]}</small></button>`;}).join('')+`<p class="footnote">이동 전후 스킬을 사용할 수 있습니다. 제자리에서 스킬을 먼저 쓰면 이동할 수 있습니다. 대기는 턴을 마칩니다.</p>`,()=>{$('#sheet').querySelectorAll('[data-skill]').forEach(b=>b.onclick=()=>{skill=SKILLS[b.dataset.skill];mode='skill';preview=null;closeSheet();if(skill.range===0)preview={type:'action',tile:tile(u.x,u.z)};refreshUI();refreshHighlights();sfx();});});}
function skillDescription(s){return `${ELEMENT[s.element]||({physical:'물리',magic:'마법',heal:'회복',buff:'강화',cleanse:'상태 해제',taunt:'적 유인'}[s.type])} · ${s.power?`${Math.round(s.power*100)}% · `:''}사거리 ${s.range}${s.area?` · 범위 ${s.shape==='square'?'정사각형 ':''}${s.area}`:''}${s.status?` · ${STATUS[s.status]}`:''}${s.buff?` · ${STATUS[s.buff]}`:''}`;}
function showNewGame(){const damaged=readStorySave().kind==='invalid';showSheet('새로운 여정',`<p>에르디아의 운명을 바꿀 여정을 시작합니다.<br>난이도는 야영지에서 바꿀 수 있습니다.</p>${[['story','STORY','적 HP·공격력 80%. 이야기를 편하게 즐기세요.'],['normal','NORMAL','기본 난이도. 지형과 스킬을 활용하세요.'],['tactical','TACTICAL','적 HP·공격력 110%. 적이 위협적인 대상을 우선합니다.']].map(([id,name,desc])=>`<button class="choice" data-new="${id}">${name}<small>${desc}</small></button>`).join('')}${hasStoredSave()?`<p class="danger">새 여정을 시작하면 기존 ${damaged?'손상된':'정상'} 저장 기록을 덮어씁니다. 먼저 원본을 내보내세요.</p>${damaged?'<button class="secondary" id="exportDamaged">손상된 저장 원본 내보내기</button>':''}`:''}`,()=>{$('#exportDamaged')?.addEventListener('click',exportDamagedSave);$('#sheet').querySelectorAll('[data-new]').forEach(b=>b.onclick=()=>{const difficulty=b.dataset.new;if(hasStoredSave()){showSheet('기존 여정을 덮어쓸까요?',`<p>내보내지 않은 이전 기록은 복구할 수 없습니다.</p>${damaged?'<button class="secondary" id="exportDamaged">손상된 저장 원본 내보내기</button>':''}<button class="primary" id="overwrite">새 여정 시작</button><button class="secondary" id="backNew">돌아가기</button>`,()=>{$('#exportDamaged')?.addEventListener('click',exportDamagedSave);$('#overwrite').onclick=()=>newJourney(difficulty);$('#backNew').onclick=showNewGame;});}else newJourney(difficulty);});});}
function hasSave(){return readStorySave().kind==='valid';}
function hasStoredSave(){return ['valid','invalid'].includes(readStorySave().kind);}
function exportDamagedSave(){const record=readStorySave();if(record.kind!=='invalid')return;const url=URL.createObjectURL(new Blob([record.raw],{type:'application/json'})),a=document.createElement('a');a.href=url;a.download=`cnation-tactics-damaged-save-${new Date().toISOString().slice(0,10)}.json`;a.click();setTimeout(()=>URL.revokeObjectURL(url),10000);toast('손상된 저장 원본을 내보냈습니다.');}
function refreshTitleSaveState(){const state=readStorySave().kind;$('#continue').hidden=state!=='valid';$('#recoverSave').hidden=state!=='invalid';$('#newGame').className=state==='valid'?'secondary':'primary';}
function newJourney(difficulty){save=fresh(difficulty);isTitle=false;battle=null;currentChapter=0;closeSheet();playBgm('world');showStory(STAGES[0]);}
const CHAPTER_SCENES=[
 {land:0x7eaa83,shade:0x628c6d,sky:0xc9dfc9,road:0xcbb998,accent:0x8be1bf,kind:'ruin'},
 {land:0xb59a72,shade:0x8a765d,sky:0xe2cbb0,road:0xd9c39b,accent:0xe2a16d,kind:'fort'},
 {land:0x86a3a7,shade:0x698b94,sky:0xc9dce1,road:0xd8cfb7,accent:0x9ddce9,kind:'river'},
 {land:0x628c69,shade:0x476b55,sky:0xb6d2b7,road:0xb9a987,accent:0xb3e185,kind:'forest'},
 {land:0x92899b,shade:0x716d82,sky:0xd2cbdc,road:0xc7b5ac,accent:0xc8a6e8,kind:'city'},
 {land:0xa49370,shade:0x746f60,sky:0xd8cdb2,road:0xc7b89c,accent:0xe6bc72,kind:'camp'},
 {land:0x829a94,shade:0x5b7778,sky:0xc0d9d2,road:0xb9c7bb,accent:0x8be3dd,kind:'crystal'},
 {land:0x6d7180,shade:0x4d5265,sky:0xb6bacc,road:0xa7a5ab,accent:0xb698df,kind:'tower'},
 {land:0xa4a19a,shade:0x757a7b,sky:0xd5d3ca,road:0xddd0b1,accent:0xe5c391,kind:'wall'},
 {land:0x698e8d,shade:0x456b75,sky:0xb4dad5,road:0xa9c4bd,accent:0xb3f3df,kind:'core'}
];
const MAP_LANDMARKS=[
 {main:['gate','shrine','village'],side:['crystal','wagon']},
 {main:['watchtower','fort','gate'],side:['embers','beacon'],boss:'arena'},
 {main:['pass','lookout','bridge'],side:['beacon','camp'],boss:'frost'},
 {main:['tree','spring','greatTree'],side:['roots','spring'],boss:'blight'},
 {main:['rooftops','archive','throne'],side:['archive','watchtower'],boss:'shadow'},
 {main:['flags','fort','camp'],side:['fort'],boss:'machine'},
 {main:['machine','canal','gate'],side:['canal'],boss:'sentinel'},
 {main:['blade','archive','spire'],side:['tracks'],boss:'shadow'},
 {main:['gate','plaza','throne'],side:['camp'],boss:'arena'},
 {main:['corridor','lights','core'],side:['crystal']}
];
function mapRoute(stages){const main=stages.filter(s=>s.kind!=='side'),mainPoints=main.map((_,i)=>({x:[-.7,.72,-.62,.65][i],z:5.4-i*10.8/(main.length-1)}));let mainIndex=0,sideIndex=0;return stages.map(s=>{if(s.kind!=='side')return mainPoints[mainIndex++];const i=sideIndex++,a=mainPoints[Math.min(i,mainPoints.length-2)],b=mainPoints[Math.min(i+1,mainPoints.length-1)];return {x:i%2?-3.25:3.25,z:(a.z+b.z)/2};});}
function mapRibbon(group,points,width,y,color){const curve=new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(p.x,y,p.z))),steps=32,vertices=[],indices=[];for(let i=0;i<=steps;i++){const t=i/steps,p=curve.getPoint(t),d=curve.getTangent(t),nx=-d.z*width/2,nz=d.x*width/2;vertices.push(p.x+nx,y,p.z+nz,p.x-nx,y,p.z-nz);if(i<steps){const k=i*2;indices.push(k,k+1,k+2,k+1,k+3,k+2);}}const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));geometry.setIndex(indices);geometry.computeVertexNormals();group.add(new THREE.Mesh(geometry,new THREE.MeshBasicMaterial({color,side:THREE.DoubleSide})));return curve;}
function mapLandmarkParts(stage,theme,point){const design=MAP_LANDMARKS[stage.chapter],kind=stage.kind==='boss'?design.boss:stage.kind==='side'?design.side[stage.n]:design.main[stage.n],parts=[],stone=stage.chapter<3?0xaaa38a:0x929e94,dark=stage.kind==='boss'?0x694e56:0x536c60,wood=0x765d42,glow=stage.kind==='side'?0xf6d58a:theme.accent,size=1.45,add=(shape,x,y,z,sx,sy,sz,color,rot=0)=>parts.push([shape,[point.x+x*size,.25+(y-.25)*size,point.z+z*size],[sx*size,sy*size,sz*size],color,rot]);
 add('cyl',0,.33,0,.65,.17,.65,stage.kind==='side'?0x695e49:dark);add('cyl',0,.43,0,.54,.06,.54,stage.kind==='boss'?0x9c6764:stone);
 if(kind==='gate'||kind==='corridor'){for(const x of [-.34,.34]){add('box',x,.78,0,.23,.75,.24,stone);add('rock',x,1.19,0,.19,.15,.2,0x817e70);add('cone',x*.95,.62,.16,.07,.3,.08,0x6d895c);}add('box',0,1.22,0,.94,.21,.28,stone);add('rock',0,1.31,.02,.15,.14,.13,glow);if(kind==='gate'){for(const x of [-.13,.13])add('box',x,.69,.1,.21,.48,.07,wood,x<0?-.16:.16);add('rock',-.48,.52,.22,.17,.1,.18,0x747465);}else for(const z of [-.3,.3])add('cone',0,.64,z,.1,.34,.1,glow);}
 else if(kind==='shrine'){add('box',0,.62,0,.7,.23,.5,stone);add('box',0,.78,0,.55,.13,.38,0xc4baa2);add('rock',0,1.01,0,.28,.29,.21,glow);for(const x of [-.38,.38])add('cone',x,.88,.18,.09,.32,.09,0xf1d791);}
 else if(kind==='village'||kind==='camp'){for(const x of [-.28,.29]){add('box',x,.7,0,.35,.4,.36,kind==='camp'?0xbba984:wood);add('cone',x,.98,0,.31,.34,.31,kind==='camp'?0xcfc196:0x8a7150);}add('cone',0,.62,.35,.1,.26,.1,0xffbb62);}
 else if(kind==='crystal'||kind==='lights'||kind==='core'){const count=kind==='lights'?6:kind==='core'?5:4;for(let i=0;i<count;i++){const a=i*Math.PI*2/count,x=Math.cos(a)*.28,z=Math.sin(a)*.28;add('cone',x,.76,z,.12,kind==='core'?.78:.48,.12,i%2?glow:0x87dad4);}add('rock',0,kind==='core'?1.26:.96,0,kind==='core'?.29:.2,kind==='core'?.37:.24,.2,glow);if(kind==='core')add('cyl',0,.65,0,.33,.42,.33,0x536e77);}
 else if(kind==='wagon'){add('box',0,.69,0,.67,.28,.4,wood);add('box',0,.9,0,.56,.17,.34,0xbca37b);for(const x of [-.35,.35])for(const z of [-.25,.25])add('cyl',x,.5,z,.1,.13,.1,0x514637);add('rock',0,1.03,0,.17,.14,.15,glow);}
 else if(kind==='watchtower'||kind==='lookout'||kind==='beacon'||kind==='spire'||kind==='shadow'){const tall=kind==='spire'||kind==='shadow';for(const x of [-.25,.25])for(const z of [-.2,.2])add('cyl',x,.8,z,.07,.83,.07,wood);add('box',0,1.19,0,.71,.17,.61,stone);add('cone',0,tall?1.66:1.42,0,tall?.42:.48,tall?.8:.37,.42,tall?0x514a64:0x795c4d);if(kind==='beacon')add('cone',0,1.47,0,.14,.4,.14,0xffb95f);if(kind==='shadow')add('rock',0,1.55,.18,.16,.2,.11,0xb590d7);}
 else if(kind==='fort'||kind==='arena'||kind==='plaza'){add('box',0,.67,0,.95,.24,.74,stone);for(const x of [-.43,.43]){add('box',x,.96,0,.15,.44,.7,kind==='arena'?0x825d59:stone);add('cone',x,1.25,0,.12,.28,.13,kind==='arena'?0xc77c63:glow);}if(kind==='arena')add('rock',0,1.06,0,.28,.3,.25,0xcf8975);else add('cyl',0,.97,0,.22,.35,.22,glow);}
 else if(kind==='pass'||kind==='frost'){for(const x of [-.32,0,.33]){add('rock',x,.75,x*.35,.3,.47,.31,kind==='frost'?0xa3c9d7:stone);add('cone',x,.99,x*.35,.19,.52,.18,kind==='frost'?0xd0edf1:0x9aafa2);}add('rock',0,.59,.35,.17,.16,.15,glow);}
 else if(kind==='bridge'||kind==='canal'){for(const x of [-.36,.36])add('box',x,.64,0,.17,.29,.8,stone);add('box',0,.8,0,.62,.09,.82,wood);for(const z of [-.34,0,.34])add('box',0,.86,z,.64,.035,.09,0xcaa875);if(kind==='canal')add('box',0,.51,0,.46,.04,.76,0x68b5c5);}
 else if(kind==='tree'||kind==='greatTree'||kind==='blight'||kind==='roots'){const big=kind==='greatTree'||kind==='blight';add('cyl',0,big?.91:.72,0,big?.25:.18,big?.95:.6,big?.25:.18,kind==='blight'?0x534855:wood);for(const x of [-.4,0,.4])add('ball',x,big?1.55:1.17,0,big?.4:.31,big?.35:.27,big?.37:.29,kind==='blight'?0x69516d:theme.shade);if(kind==='roots')for(const x of [-.45,.45])add('cone',x,.57,.2,.12,.48,.12,0x6a5a4a,x<0?-.6:.6);}
 else if(kind==='spring'){add('cyl',0,.58,0,.45,.18,.45,stone);add('cyl',0,.68,0,.34,.06,.34,0x6cbec7);add('cone',0,.99,0,.13,.58,.13,glow);for(const x of [-.4,.4])add('cone',x,.67,.15,.07,.32,.07,0x79b781);}
 else if(kind==='rooftops'||kind==='archive'||kind==='throne'){add('box',0,.78,0,.77,.65,.63,stone);for(const x of [-.33,.33])add('cyl',x,.91,.29,.08,.75,.08,0xd2c4aa);if(kind==='rooftops')add('cone',0,1.32,0,.53,.49,.44,0x76586c);else if(kind==='archive'){add('box',0,1.18,-.05,.48,.23,.37,wood);add('box',0,1.22,.23,.31,.06,.13,0xe5d7a5);}else{add('box',0,1.17,.1,.37,.44,.17,0x72545e);add('cone',0,1.49,.09,.22,.29,.18,glow);}}
 else if(kind==='flags'||kind==='blade'||kind==='tracks'){for(const x of [-.3,.3]){add('cyl',x,.91,0,.04,.95,.04,wood);add('box',x+.11,1.2,0,.23,.23,.04,kind==='blade'?0xaebcc0:glow);}if(kind==='blade')add('cone',0,.85,.25,.13,.85,.09,0xc7d6d8,.6);if(kind==='tracks')for(const z of [-.27,0,.27])add('rock',0,.49,z,.12,.04,.08,0x4c5357);}
 else if(kind==='machine'||kind==='sentinel'){add('box',0,.85,0,.67,.74,.53,0x687c80);for(const x of [-.42,.42])add('cyl',x,.84,0,.14,.54,.14,stone);add('rock',0,1.09,.3,.2,.22,.12,glow);add('cone',0,1.44,0,.19,.42,.18,kind==='sentinel'?0xa6e7df:stone);}
 else if(kind==='embers'){for(const x of [-.29,.28])add('box',x,.68,0,.25,.3,.35,0x76534d);for(const x of [-.17,.05,.2])add('cone',x,.83,.11,.13,.47,.11,0xffa45b);}
 return parts;}
function chapterProp(parts,kind,x,z,r,accent){
 if(kind==='forest'||kind==='ruin'){parts.push(['cyl',[x,.25,z],[.09,.54,.09],0x6a634e],['cone',[x,.72,z],[.39,.8,.39],kind==='forest'?0x376c50:0x5b8b69]);if(kind==='ruin'&&r>.72)parts.push(['cyl',[x+.18,.45,z+.12],[.14,.85,.14],0xb8bd9d]);}
 else if(kind==='river'){parts.push(['rock',[x,.18,z],[.25,.32,.25],0x7897a7],['cone',[x,.42,z],[.1,.3,.1],0xd8eeee]);}
 else if(kind==='crystal'||kind==='core'){parts.push(['rock',[x,.2,z],[.24,.22,.23],0x5b7979],['cone',[x,.58,z],[.15,.65,.15],accent]);}
 else if(kind==='fort'||kind==='city'||kind==='tower'||kind==='wall'){parts.push(['box',[x,.35,z],[.42,.7,.4],kind==='tower'?0x4f5368:0xaaa594],['cone',[x,.78,z],[.34,.35,.32],kind==='fort'?0x956e5e:kind==='wall'?0x8a7771:0x74647d]);}
 else parts.push(['cone',[x,.28,z],[.3,.5,.3],0x8c795c],['box',[x,.13,z+.12],[.42,.13,.3],0xc8b58d]);
}
function renderChapterMap(ch,stages){
 const canvas=$('#journeyMap');if(!canvas)return;let r;try{r=new THREE.WebGLRenderer({canvas,antialias:true});}catch{return;}
 const theme=CHAPTER_SCENES[ch],scene=new THREE.Scene(),cam=new THREE.OrthographicCamera(-8,8,8,-8,.1,80),route=mapRoute(stages),mainRoute=route.filter((_,i)=>stages[i].kind!=='side'),parts=[],rand=seeded(8903+ch*491),group=new THREE.Group(),curves=[],mainCurves=[],sideCurves=new Map();
 scene.background=new THREE.Color(theme.sky);scene.add(group,new THREE.HemisphereLight(0xf3f5df,0x415960,2.2));const light=new THREE.DirectionalLight(0xffe7bd,2.4);light.position.set(-5,10,7);scene.add(light);
 parts.push(['box',[0,-.71,0],[10.2,1.3,15.2],theme.shade]);
 for(let i=0;i<mainRoute.length-1;i++){const a=mainRoute[i],b=mainRoute[i+1],mid={x:(a.x+b.x)/2+(i%2?-.25:.25),z:(a.z+b.z)/2},points=[a,mid,b];mapRibbon(group,points,1.08,.265,0x795f43);const curve=mapRibbon(group,points,.83,.285,0xf1d591);curves.push(curve);mainCurves.push(curve);}
 route.forEach((p,i)=>{const stage=stages[i];if(stage.kind!=='side')return;const segment=Math.min(stage.n,mainRoute.length-2),points=[mainRoute[segment],p,mainRoute[segment+1]];mapRibbon(group,points,.65,.267,0x716552);const curve=mapRibbon(group,points,.44,.278,0xc8b48a);curves.push(curve);sideCurves.set(stage.id,curve);});
 const roadSamples=curves.flatMap(curve=>curve.getPoints(30));
 for(let z=0;z<15;z++)for(let x=0;x<10;x++){const px=x-4.5,pz=z-7,h=.24+.07*(Math.sin(x*.55+ch)+Math.cos(z*.7-ch*.4)+2)/4,water=theme.kind==='river'&&Math.abs(px)>3.4&&z>4&&z<11,shade=rand()>.55?theme.land:theme.shade;parts.push(['box',[px,h/2-.18,pz],[.98,h,.98],water?0x6babb9:shade]);if(!water&&rand()>.84&&route.every(p=>Math.hypot(px-p.x,pz-p.z)>1.25)&&roadSamples.every(p=>Math.hypot(px-p.x,pz-p.z)>.85))chapterProp(parts,theme.kind,px,pz,rand(),theme.accent);}
 let mainIndex=0;route.forEach((p,i)=>{const stage=stages[i],offset=stage.kind==='side'?(p.x<0?-.2:.2):mainIndex++%2?1.4:-1.4;parts.push(...mapLandmarkParts(stage,theme,{x:p.x+offset,z:p.z}));});
 group.add(new THREE.Mesh(bake(parts),sharedMat));cam.position.set(7,22,16);cam.lookAt(0,0,0);cam.updateMatrixWorld();
 const arrowFlows=[];
 function arrowMesh(shaft,head,length,color,height){const neck=length*.08,tail=-length*.5,tip=length*.5,v=new Float32Array([-shaft/2,0,tail,shaft/2,0,tail,-shaft/2,0,neck,shaft/2,0,tail,shaft/2,0,neck,-shaft/2,0,neck,-head/2,0,neck,head/2,0,neck,0,0,tip]),geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.BufferAttribute(v,3));const mesh=new THREE.Mesh(geometry,new THREE.MeshBasicMaterial({color,side:THREE.DoubleSide,depthWrite:false}));mesh.position.y=height;return mesh;}
 function addArrowFlow(curve,main){if(!curve)return;const count=main?3:2;for(let i=0;i<count;i++){const arrow=new THREE.Group(),shaft=main?.43:.18,head=main?.86:.43,length=main?1.12:.82;arrow.add(arrowMesh(shaft*1.28,head*1.17,length*1.08,0x554423,0),arrowMesh(shaft,head,length,main?0xffe76a:0xe2b24a,.012));group.add(arrow);arrowFlows.push({arrow,curve,start:main?.12:.055,end:main?.88:.445,offset:i/count,speed:main?.23:.18});}}
 const chapterMain=stages.filter(s=>s.kind!=='side'),nextIndex=chapterMain.findIndex(s=>!save.completed.includes(s.id)&&isUnlocked(s));
 if(nextIndex>0&&save.completed.includes(chapterMain[nextIndex-1].id))addArrowFlow(mainCurves[nextIndex-1],true);
 for(const side of stages.filter(s=>s.kind==='side'&&!save.completed.includes(s.id)&&isUnlocked(s)))addArrowFlow(sideCurves.get(side.id),false);
 function positionArrows(ms){for(const flow of arrowFlows){const progress=(ms/1000*flow.speed+flow.offset)%1,t=flow.start+(flow.end-flow.start)*progress,p=flow.curve.getPoint(t),direction=flow.curve.getTangent(t);flow.arrow.position.set(p.x,.36,p.z);flow.arrow.rotation.y=Math.atan2(direction.x,direction.z);flow.arrow.scale.setScalar(.94+.06*Math.sin(progress*Math.PI));}}
 positionArrows(0);
 function draw(){const w=canvas.clientWidth,h=canvas.clientHeight;if(!w||!h)return;r.setPixelRatio(Math.min(devicePixelRatio,1.5));r.setSize(w,h,false);const halfH=Math.max(8.2,7.6*h/w);cam.left=-halfH*w/h;cam.right=halfH*w/h;cam.top=halfH;cam.bottom=-halfH;cam.updateProjectionMatrix();r.render(scene,cam);route.forEach((p,i)=>{const v=new THREE.Vector3(p.x,1.1,p.z).project(cam),node=$('#sheet').querySelector(`[data-map-node="${i}"]`);if(node){node.style.left=`${Math.max(8,Math.min(92,(v.x+1)*50))}%`;node.style.top=`${Math.max(9,Math.min(89,(1-v.y)*50))}%`;}});}
 const observer=new ResizeObserver(draw);observer.observe(canvas);draw();let arrowFrame=0,lastArrowFrame=0;if(arrowFlows.length){const animate=ms=>{arrowFrame=requestAnimationFrame(animate);if(document.hidden||ms-lastArrowFrame<40)return;lastArrowFrame=ms;positionArrows(ms);r.render(scene,cam);};arrowFrame=requestAnimationFrame(animate);}previewCleanup=()=>{cancelAnimationFrame(arrowFrame);observer.disconnect();disposeGroup(group);r.dispose();r.forceContextLoss();};
}
// Join scenes precede the first story battle in each recruitment chapter.
const JOIN_SCENES={
 c1s0:[['카일','파수대 쪽에서 연기가 올라오고 있어. 주민들이 아직 남아 있을까?'],['리아','방패를 든 사람이 이쪽으로 와. 우리에게 할 말이 있는 것 같아.'],['브란','나는 브란, 에린의 전사다. 너희가 주민들을 도와줬다고 들었다.',{arrival:'bran'}],['카일','난 카일이고, 이쪽은 리아야. 함께 사람들을 구하러 가자.'],['리아','만나서 반가워요, 브란. 우리가 뒤에서 도울게요.'],['브란','좋다. 내 방패 뒤로 와라. 지금부터 나도 너희와 함께하겠다.',{joined:'bran'}]],
 c2s0:[['카일','추격은 늦췄지만, 이 산길은 처음이야. 어디로 가야 하지?'],['브란','발자국이 지나치게 조용하다. 매복이 있을지도 모른다.'],['세라','잠깐! 앞쪽 길로 가면 안 돼. 나는 세라, 이 산길을 지키는 궁수야.',{arrival:'sera'}],['카일','경고해 줘서 고마워. 나는 카일이야. 안전한 길을 알려 줄 수 있어?'],['브란','함께 가 준다면 큰 힘이 되겠군. 우리는 리아를 지키며 산을 넘고 있다.'],['세라','좋아, 나도 함께할게. 길은 내가 살피고, 적은 내 활로 막겠어.',{joined:'sera'}]],
 c3s0:[['카일','숲에 들어오자마자 공기가 달라졌어. 나무들이 시들고 있어.'],['리아','에테르가 뒤엉켜 있어. 누군가 정령들의 말을 알아들을 수 있다면…'],['루나','여러분, 잠시만요. 저는 루나예요. 이 숲의 정령들이 도움을 청하고 있어요.',{arrival:'luna'}],['리아','반가워요, 루나. 나는 리아예요. 우리도 오염의 원인을 찾고 있어요.'],['카일','나는 카일이야. 위험한 길이지만, 함께라면 숲을 구할 수 있을 거야.'],['루나','저도 동행할게요. 정령들의 목소리를 전하고, 다친 동료들을 돌보겠어요.',{joined:'luna'}]],
 c4s0:[['카일','왕궁까지 왔지만 정문에는 병사들이 너무 많아. 다른 길이 필요해.'],['세라','지붕 위에도 감시자가 있어. 누군가 이쪽으로 내려오는데?'],['네로','쉿, 목소리를 낮춰. 나는 네로. 너희가 찾는 기록이 어디 있는지 알고 있어.',{arrival:'nero'}],['카일','나는 카일이야. 처음 보는 우리를 왜 도와주려는 거지?'],['세라','일단 인사는 반갑게 할게. 대신 함정이라면 내 눈을 피할 수 없을 거야.'],['네로','왕궁이 감춘 진실을 나도 확인하고 싶거든. 나를 동료로 받아 줘. 길은 내가 열게.',{joined:'nero'}]]
};
function storyLines(stage){const intro=!save.completed.includes(stage.id)&&JOIN_SCENES[stage.id];return intro?[...intro,...STAGE_DIALOGUES[stage.id]]:STAGE_DIALOGUES[stage.id];}
function storySceneState(stage,lines,pos){
 const cast=[...new Set(lines.map(([name])=>name))],hasArrival=lines.some(line=>line[2]?.arrival),speakers=cast.slice(0,2),arrival=lines[pos][2]?.arrival,joined=lines[pos][2]?.joined;
 if(hasArrival)for(let i=0;i<=pos;i++)if(lines[i][2]?.arrival){const name=heroDef(lines[i][2].arrival).name;if(!speakers.includes(name))speakers.push(name);}
 return {speakers,arrival,joined,activeSide:['left','right','center'][Math.max(0,speakers.indexOf(lines[pos][0]))],partyBefore:HEROES.filter(h=>h.join<stage.chapter).length};
}
function storyActor(name,ch){const h=HEROES.find(h=>h.name===name);if(h)return {...h,heroId:h.id,team:'ally'};const bossIndex=BOSS_NAMES.findIndex(n=>n===name||n.includes(name));if(bossIndex>0){const profile=BOSS_PROFILES[bossIndex];return {name,model:profile.model,color:profile.color,boss:true,bossId:bossIndex,team:'enemy'};}const m=MONSTERS[(ch*2+1)%MONSTERS.length];return {...m,name,team:'enemy'};}
function renderStoryScene(stage,lines,pos,speakers,arrival=null){
 const canvas=$('#storyCanvas');if(!canvas)return;let r;try{r=new THREE.WebGLRenderer({canvas,antialias:true});}catch{return;}
 const theme=CHAPTER_SCENES[stage.chapter],scene=new THREE.Scene(),cam=new THREE.PerspectiveCamera(35,1,.1,40),group=new THREE.Group(),parts=[['box',[0,-.22,0],[11,.38,5],theme.land]];
 scene.background=new THREE.Color(theme.sky);scene.add(group,new THREE.HemisphereLight(0xf4f0df,0x445565,2.3));const light=new THREE.DirectionalLight(0xffe6bd,2.5);light.position.set(-3,7,5);scene.add(light);
 for(let i=0;i<9;i++){const x=-4+i,z=-1.5-(i%3)*.4;if(Math.abs(x)<1.5)continue;chapterProp(parts,theme.kind,x,z,(i%4)/4,theme.accent);}
 group.add(new THREE.Mesh(bake(parts),sharedMat));
 let arriving=null,arrivalRing=null,arrivalFrame=0;
 speakers.forEach((name,i)=>{const actor=storyActor(name,stage.chapter),m=figure(actor),x=[-1.25,1.25,0][i]??0;m.position.set(x,.02,.5);m.scale.setScalar(actor.boss?.82:1.25);m.rotation.y=i===0?.35:i===1?-.35:0;group.add(m);if(actor.heroId===arrival){arriving=m;m.position.x=4;}if(name===lines[pos][0]){const ring=new THREE.Mesh(new THREE.RingGeometry(.53,.61,24),new THREE.MeshBasicMaterial({color:theme.accent,side:THREE.DoubleSide,transparent:true,opacity:.9}));ring.rotation.x=-Math.PI/2;ring.position.set(m.position.x,.04,.5);group.add(ring);if(actor.heroId===arrival)arrivalRing=ring;}});
 cam.position.set(0,2.4,6.1);cam.lookAt(0,.75,0);
 function draw(){const w=canvas.clientWidth,h=canvas.clientHeight;if(!w||!h)return;r.setPixelRatio(Math.min(devicePixelRatio,1.5));r.setSize(w,h,false);cam.aspect=w/h;cam.updateProjectionMatrix();r.render(scene,cam);}
 const observer=new ResizeObserver(draw);observer.observe(canvas);draw();
 if(arriving){const begin=performance.now();const enter=now=>{const t=Math.min(1,(now-begin)/650),ease=1-(1-t)**3;arriving.position.x=4*(1-ease);if(arrivalRing)arrivalRing.position.x=arriving.position.x;r.render(scene,cam);if(t<1)arrivalFrame=requestAnimationFrame(enter);};arrivalFrame=requestAnimationFrame(enter);}
 previewCleanup=()=>{cancelAnimationFrame(arrivalFrame);observer.disconnect();disposeGroup(group);r.dispose();r.forceContextLoss();};
}
function showStory(stage){
 const music=!save.completed.includes(stage.id)&&JOIN_SCENES[stage.id]?'town':['c9s0','c9s2'].includes(stage.id)?'sad':stage.chapter===0||stage.chapter===6||stage.id==='c4s1'?'mystery':'world';playBgm(music);
 const lines=storyLines(stage),replay=save.completed.includes(stage.id);let pos=0;
 const draw=()=>{
  const active=lines[pos][0],state=storySceneState(stage,lines,pos),{speakers,activeSide}=state;
  showSheet(stage.name,`
   <span class="badge">${CHAPTERS[stage.chapter][0]} · ${CHAPTERS[stage.chapter][2]}${replay?' · 재도전':''}</span>
   <div class="story-scene"><canvas id="storyCanvas" aria-label="${CHAPTERS[stage.chapter][0]}의 인물 대화 장면"></canvas><div class="story-cast ${speakers.length===3?'three-cast':''}">${speakers.map((name,i)=>`<span class="cast-${['left','right','center'][i]} ${name===active?'active':''}">${name}</span>`).join('')}</div></div>
   <div class="story-bubble speaker-${activeSide}"><b>${active}</b><p>${lines[pos][1]}</p></div>
   ${state.arrival?`<div class="join-notice">${heroDef(state.arrival).name} 등장</div>`:state.joined?`<div class="join-notice">${heroDef(state.joined).name} 합류 · 파티 ${state.partyBefore}명 → ${state.partyBefore+1}명</div>`:''}
   <div class="row"><span class="footnote">${pos+1} / ${lines.length}</span><button class="secondary" style="width:auto;margin:0" id="skipStory">대화 건너뛰기</button></div>
   <button class="primary" id="nextStory">${pos===lines.length-1?'전투 준비':'다음 대화'}</button>`,()=>{
    renderStoryScene(stage,lines,pos,speakers,state.arrival);
    $('#nextStory').onclick=()=>{sfx();if(++pos===lines.length)showPrepare(stage);else draw();};
    $('#skipStory').onclick=()=>showPrepare(stage);
   },{back:showWorld});
 };
 draw();
}
function showPrepare(s){playBgm('town');recruitForChapter(s.chapter);const party=HEROES.filter(h=>h.join<=s.chapter);showSheet('출전 준비',`<div class="eyebrow">${CHAPTERS[s.chapter][0]} · ${s.kind==='side'?'SIDE QUEST':s.kind==='boss'?'BOSS BATTLE':'STORY BATTLE'}</div><h3 style="font-size:23px;margin:12px 0">${s.name}</h3><p>${goalText(s)}<br>50턴 제한 · 추천 Lv.${s.level}<br>${battleRules(s).width}×${battleRules(s).height} · 적 ${battleRules(s).enemyCount}명 · 정예 1체<br>${save.completed.includes(s.id)?'전장 획득물 없음 · 완료 전투 재도전':'전장 획득물: 아이템 20% / 골드 60% / 없음 20%'}<br>전투 시작 시 규칙에 따라 새 지형을 생성합니다.</p><div class="row">${party.map(h=>`<div style="text-align:center"><div class="portrait" style="width:40px;height:44px;font-size:23px">${h.icon}</div><span class="footnote">${h.name}<br>Lv.${heroRecord(h.id).level}</span></div>`).join('')}</div><p class="footnote">전투 시작 시 HP·MP가 모두 회복됩니다. 캐릭터는 챕터 진행에 따라 합류합니다.</p><button class="primary" id="beginBattle">전투 시작</button><button class="secondary" id="prepareParty">파티 · 장비 · 전직</button>`,()=>{$('#beginBattle').onclick=()=>startBattle(s);$('#prepareParty').onclick=()=>showParty(()=>showPrepare(s),s.chapter);},{back:showWorld});}
function showWorld(ch=currentChapter){
 if(busy)return;if(customMode){showCustomSetup(battle?.phase==='victory'||battle?.phase==='defeat'?showCustomResult:showMenu);return;}
 const available=unlockedChapter();recruitForChapter(available);currentChapter=Math.max(0,Math.min(available,Number.isInteger(ch)?ch:currentChapter));isTitle=false;$('#title').hidden=true;$('#stagebar').hidden=true;$('#panel').hidden=true;playBgm('world');
 const stages=STAGES.filter(s=>s.chapter===currentChapter).sort((a,b)=>(a.kind==='boss'?4:a.kind==='side'?.5+a.n*.1:a.n)-(b.kind==='boss'?4:b.kind==='side'?.5+b.n*.1:b.n)),mainStages=STAGES.filter(s=>s.kind!=='side'),sideStages=STAGES.filter(s=>s.kind==='side'),mainDone=mainStages.filter(s=>save.completed.includes(s.id)).length,sideDone=sideStages.filter(s=>save.completed.includes(s.id)).length,nextMainId=mainStages.find(s=>!save.completed.includes(s.id)&&isUnlocked(s))?.id,lastChapterMainId=stages.filter(s=>s.kind!=='side').at(-1)?.id;
 showSheet('에르디아 대륙',`
  <div class="row"><span class="footnote">본편 ${mainDone}/${mainStages.length} · 추가 ${sideDone}/${sideStages.length} 완료</span><span class="gold">${save.gold.toLocaleString()} G</span></div>
  <div class="chaptertabs">${CHAPTERS.slice(0,available+1).map((c,i)=>`<button data-chapter="${i}" class="${i===currentChapter?'on':''}">${i===0?'서막':i===9?'최종장':`${i}장`}</button>`).join('')}</div>
  <div class="map-heading"><span class="eyebrow">${CHAPTERS[currentChapter][0]}</span><h3>${CHAPTERS[currentChapter][1]}</h3><p>${CHAPTERS[currentChapter][2]}</p></div>
  <div class="journey-map"><canvas id="journeyMap" aria-label="${CHAPTERS[currentChapter][0]}의 3D 입체 지도"></canvas><div class="map-route-legend"><b>본편 1 → 2 → 3${stages.some(s=>s.kind==='boss')?' → 보스':''}</b><span>◇ 추가 전투는 건너뛰기 가능</span></div>
   ${stages.map((s,i)=>{const done=save.completed.includes(s.id),missed=isSkippedSide(s),open=isUnlocked(s),label=s.kind==='boss'?'보스':s.kind==='side'?'추가 전투':`전투 ${s.n+1}`,state=done?'complete':missed?'missed-extra':!open?'locked':s.kind==='side'?'available-extra':s.id===nextMainId?'next-main':'available-main',labelPosition=s.kind==='side'?(s.n===0?'label-right':'label-left'):s.id===lastChapterMainId?'label-top':s.n===0?'label-bottom':'label-right',labelShift=s.kind==='side'?'':s.n===1?'label-raised label-main-middle':'';return `<button class="map-node ${state} ${labelPosition} ${labelShift}" data-map-node="${i}" data-stage="${s.id}" aria-label="${s.name} · ${label}${missed?' (지나가서 입장 불가)':s.kind==='side'?' (건너뛰기 가능)':''}" ${open?'':'disabled'}><span>${done?'✓':s.kind==='boss'?'♜':s.kind==='side'?'◇':s.n+1}</span><small><strong>${label}</strong><br><span>${s.name}</span></small></button>`;}).join('')}
  </div>
  <p class="map-guide"><b>굵은 밝은 화살표</b> 다음 본편 전투 · <b>가는 짙은 화살표</b> 선택 가능한 추가 전투를 가리킵니다.<br><b>넓은 중앙 길</b> 전투 1 → 2 → 3 → 보스(있을 때) 순서입니다.<br><b>◇ 샛길</b> 앞 전투를 마치면 열립니다. 다음 본편 전투를 시작하면 들르지 않은 추가 전투는 닫힙니다.</p>
  <div class="row"><button class="secondary" id="campParty">파티 관리</button><button class="secondary" id="campShop">상점</button><button class="secondary" id="campMenu">설정</button></div>
  ${battle&&['player','enemy'].includes(battle.phase)?'<button class="primary" id="resumeBattle">진행 중인 전투로 돌아가기</button>':''}`,()=>{
   renderChapterMap(currentChapter,stages);
   $('#sheet').querySelectorAll('[data-chapter]').forEach(b=>b.onclick=()=>showWorld(+b.dataset.chapter));
   $('#sheet').querySelectorAll('[data-stage]').forEach(b=>b.onclick=()=>{const s=STAGES.find(v=>v.id===b.dataset.stage);if(battle&&['player','enemy'].includes(battle.phase)){toast('진행 중인 전투를 먼저 마치거나 메뉴에서 철수해 주세요.');return;}showStory(s);});
   $('#campParty').onclick=()=>showParty(showWorld);$('#campShop').onclick=showShop;$('#campMenu').onclick=()=>showSettings(showWorld);
   $('#resumeBattle')?.addEventListener('click',resumeBattle);
  },{noClose:true});
}
function unlockedChapter(){if(customMode)return save.customConfig?.party==='all'?9:save.chapter;return Math.max(0,...STAGES.filter(isUnlocked).map(s=>s.chapter));}
function showParty(back=showWorld,chapter=unlockedChapter(),id='kyle'){
 if(!battle||!['player','enemy'].includes(battle.phase))playBgm('town');
 const h=heroDef(id),p=heroRecord(id),u=heroStats(p),locked=!!battle&&['player','enemy'].includes(battle.phase);
 showSheet('파티 관리',`
  <div class="chaptertabs">${HEROES.filter(h=>h.join<=chapter).map(h=>`<button data-hero="${h.id}" class="${id===h.id?'on':''}">${h.icon} ${h.name}</button>`).join('')}</div>
  <div class="row"><div><h3 style="margin:0;font-size:24px">${h.name} <span class="footnote">Lv.${p.level}</span></h3><p style="margin:6px 0">${className({...u,heroId:id})}</p></div><span class="gold">${save.gold.toLocaleString()} G</span></div>
  <div class="track"><i style="width:${p.xp/(80+p.level*18)*100}%"></i></div><p class="footnote">EXP ${p.xp} / ${p.level===50?'MAX':80+p.level*18}</p>
  <h3>착용 장비</h3>${equipmentBoard(p)}
  <button class="secondary" id="partyBag">장비 보관함 · 장착 변경</button>
  <p class="footnote">장비를 탭하면 전체 보관함이 열립니다. 무기·방어구·악세서리는 전장에서 획득하거나 챕터 상점에서 구입합니다.</p>
  <div class="statsgrid">${[['HP',u.maxHp],['MP',u.maxMp],['ATK',u.atk],['DEF',u.def],['MAG',u.mag],['RES',u.res]].map(([a,b])=>`<div>${a}<b>${Math.round(b)}</b></div>`).join('')}</div>
  <h3>전직</h3><p class="footnote">Lv.10 · Lv.20에 전직할 수 있습니다. 능력치·패시브·외형이 함께 성장합니다.</p>
  ${p.classLevel<2?`<button class="primary" id="promote" ${locked||p.level<(p.classLevel===0?10:20)?'disabled':''}>${p.classLevel===0?'1차':'2차'} 전직 ${p.level<(p.classLevel===0?10:20)?`· Lv.${p.classLevel===0?10:20} 필요`:''}</button>`:'<span class="badge">최종 클래스</span>'}
  <h3>패시브</h3>${h.passive.map((v,i)=>`<p style="margin:7px 0;opacity:${p.classLevel>i?1:.45}">${p.classLevel>i?'✓':'◇'} ${v}</p>`).join('')}
  <h3>스킬</h3>${h.skills.map((sid,i)=>`<div class="choice" style="opacity:${p.level>=UNLOCK[i]?1:.45}">${SKILLS[sid].name}<strong>Lv.${UNLOCK[i]}</strong><small>${skillDescription(SKILLS[sid])}</small>${detailedSkill(sid)}</div>`).join('')}
  ${locked?'<p class="footnote">전투 중에는 장착 변경과 전직을 할 수 없습니다.</p>':''}`,()=>{
   modelPreview({...u,heroId:id},'#equipmentHero');
   $('#partyBag').onclick=()=>showInventory(()=>showParty(back,chapter,id),id);
   $('#sheet').querySelectorAll('[data-equip-slot]').forEach(b=>b.onclick=()=>showInventory(()=>showParty(back,chapter,id),id));
   $('#sheet').querySelectorAll('[data-hero]').forEach(b=>b.onclick=()=>showParty(back,chapter,b.dataset.hero));
   $('#promote')?.addEventListener('click',()=>{if(h.branch&&p.classLevel===0){showSheet('카일의 길',`<button class="choice" id="knight">기사 → 성기사<small>기사의 맹세를 잇는 길</small></button><button class="choice" id="mercenary">용병 → 소드마스터<small>검의 극의를 추구하는 길 · 공격력 +5, 방어력 -3</small></button>`,()=>{$('#knight').onclick=()=>promote(0);$('#mercenary').onclick=()=>promote(1);},{back:()=>showParty(back,chapter,id)});}else promote(p.branch);});
   function promote(branch){p.classLevel++;p.branch=branch;persist();sfx('win');toast(`${h.name} 전직 완료!`);showParty(back,chapter,id);}
  },{back:()=>back()});
}
function showShop(){
 if(!battle||!['player','enemy'].includes(battle.phase))playBgm('town');
 const locked=!!battle&&['player','enemy'].includes(battle.phase),chapter=unlockedChapter(),tier=gearTierForChapter(chapter);
 const stock=GEAR.filter(g=>g.tier===tier||(tier>0&&g.tier===tier-1));
 showSheet('여행자의 상점',`
  <div class="row"><span>체력·마력 회복약</span><span class="gold">${save.gold.toLocaleString()} G</span></div>
  <p class="footnote">${CHAPTERS[chapter][0]} 진행 기준 재고입니다. 새로운 장에 도착하면 더 좋은 장비가 열립니다. 구입한 장비는 파티 관리에서 장착하세요.</p>
  ${Object.entries(CONSUMABLES).map(([id,v])=>`<button class="choice" data-buy-consumable="${id}" ${locked||save.gold<v.price?'disabled':''}><strong>${v.price} G</strong>${v.name} · 보유 ${save.consumables[id]}개<small>대상의 최대 ${v.stat.toUpperCase()} ${Math.round(v.ratio*100)}% 회복 · 전투 중 행동 1회 사용</small></button>`).join('')}
  <h3>무기 · 방어구 · 악세서리</h3>
  ${stock.map(g=>`<div class="gear-row"><div class="gear-thumb">${gearModelHTML(g)}</div><div class="gear-copy"><b>${g.name}</b> <span class="badge">${TIERS[g.tier]}</span><small>${SLOT_NAMES[g.slot]} · ${gearBonusText(g)}</small><button class="secondary" data-buy-gear="${g.id}" ${locked||save.gold<GEAR_PRICES[g.tier]||save.inventory.length>=1000?'disabled':''}>${GEAR_PRICES[g.tier].toLocaleString()} G · 구입</button></div></div>`).join('')}
  <button class="secondary" id="shopParty">파티 관리 · 장비 장착</button>
  ${locked?'<p class="footnote">전투가 끝나면 구매할 수 있습니다.</p>':''}`,()=>{
   $('#sheet').querySelectorAll('[data-buy-consumable]').forEach(b=>b.onclick=()=>{const id=b.dataset.buyConsumable,v=CONSUMABLES[id];if(locked||!v||save.gold<v.price){toast('골드가 부족합니다.');return;}save.gold-=v.price;save.consumables[id]++;persist();sfx();showShop();});
   $('#sheet').querySelectorAll('[data-buy-gear]').forEach(b=>b.onclick=()=>{if(locked)return;const g=GEAR.find(g=>g.id===b.dataset.buyGear);if(!g||!stock.includes(g)||save.gold<GEAR_PRICES[g.tier]||save.inventory.length>=1000){toast('골드가 부족하거나 보관함이 가득 찼습니다.');return;}save.gold-=GEAR_PRICES[g.tier];save.inventory.push({uid:`loot-${++save.lootSeq}`,gearId:g.id});persist();sfx('heal');toast(`${g.name} 구입 완료`);showShop();});
   $('#shopParty').onclick=()=>showParty(showShop,chapter);
  },{back:showWorld});
}
function useConsumable(id){const v=CONSUMABLES[id],u=unit();if(!v||!u||!canControl()||u.acted||!save.consumables[id])return;const cap=v.stat==='hp'?u.maxHp:u.maxMp;if(u[v.stat]>=cap){toast(`${v.stat.toUpperCase()}가 가득 차 있습니다.`);return;}save.consumables[id]--;const amount=Math.min(cap-u[v.stat],Math.round(cap*v.ratio));u[v.stat]+=amount;u.acted=u.moved=true;log(`${u.name} ${v.name} ${amount} 회복`);closeSheet();sfx('heal');floating(u,`+${amount} ${v.stat.toUpperCase()}`,'#aff0c7');persist();refreshUI();afterAction();}
function showMenu(){if(busy){toast('행동이 끝난 후 메뉴를 열어 주세요.');return;}if(isTitle){showSettings(()=>{closeSheet();});return;}showSheet('여정 메뉴',`${customMode?'<button class="choice" id="menuCustomChoose">커스텀 · 다른 전투 선택</button><button class="choice" id="menuCustomExit">커스텀 종료 · 타이틀로</button>':''}<button class="choice" id="menuCodex">백과사전 · 전체 공개</button><button class="choice" id="menuBag">장비 보관함</button><button class="choice" id="menuWorld">월드맵 · 야영지</button><h3>회복약 · 선택한 아군에게 사용</h3>${Object.entries(CONSUMABLES).map(([id,v])=>`<button class="choice" data-use-consumable="${id}" ${!canControl()||unit()?.acted||!save.consumables[id]?'disabled':''}>${v.name} <strong>${save.consumables[id]}개</strong><small>최대 ${v.stat.toUpperCase()} ${Math.round(v.ratio*100)}% 회복 · 행동 종료</small></button>`).join('')}<button class="choice" id="menuLog">전투 기록</button><button class="choice" id="menuSettings">설정 · 저장 파일</button><button class="choice" id="menuHelp">플레이 방법</button>${battle&&['player','enemy'].includes(battle.phase)?'<button class="choice" id="menuRetreat">전투 철수<small>진행 중인 전투는 초기화됩니다.</small></button>':''}`,()=>{$('#menuCustomChoose')?.addEventListener('click',()=>showCustomSetup(showMenu));$('#menuCustomExit')?.addEventListener('click',exitCustom);$('#menuCodex').onclick=()=>showEncyclopedia('overview',showMenu);$('#menuBag').onclick=()=>showInventory(showMenu);$('#menuWorld').onclick=()=>showWorld(getStage()?.chapter||0);$('#sheet').querySelectorAll('[data-use-consumable]').forEach(b=>b.onclick=()=>useConsumable(b.dataset.useConsumable));$('#menuLog').onclick=()=>showSheet('전투 기록',`<div class="battlelog">${(battle?.log||['아직 전투 기록이 없습니다.']).slice().reverse().map(l=>`<div>${escapeHTML(l)}</div>`).join('')}</div>`,()=>{},{back:showMenu});$('#menuSettings').onclick=()=>showSettings(showMenu);$('#menuHelp').onclick=()=>showHelp(showMenu);$('#menuRetreat')?.addEventListener('click',()=>showSheet('전투에서 철수할까요?',`<p>전투 시작 전 파티와 회복약 상태로 돌아갑니다.</p><button class="primary" id="doRetreat">철수</button><button class="secondary" id="cancelRetreat">계속 전투</button>`,()=>{$('#doRetreat').onclick=()=>{restoreRetryProgress();battle=null;save.retry=null;persist();showWorld();};$('#cancelRetreat').onclick=closeSheet;}));});}
function showSettings(back=closeSheet){showSheet('설정 · 저장',`<div class="settings-row"><span>게임 속도</span><select id="setSpeed" aria-label="게임 속도">${[1,1.5,2].map(v=>`<option value="${v}" ${save.settings.speed===v?'selected':''}>×${v}</option>`).join('')}</select></div><div class="settings-row"><span>효과음 · BGM</span><button id="setSound">${save.settings.sound?'켜짐':'꺼짐'}</button></div><div class="settings-row"><span>화면 품질</span><select id="setQuality" aria-label="화면 품질"><option value="1" ${save.settings.quality===1?'selected':''}>표준</option><option value="0" ${save.settings.quality===0?'selected':''}>절전</option></select></div><div class="settings-row"><span>난이도</span><select id="setDifficulty" aria-label="난이도" ${battle&&['player','enemy'].includes(battle.phase)&&!isTitle?'disabled':''}>${['story','normal','tactical'].map(v=>`<option ${save.difficulty===v?'selected':''}>${v}</option>`).join('')}</select></div><h3>저장 파일</h3><p>행동이 끝날 때 자동 저장합니다. 저장은 현재 기기와 브라우저에만 남습니다. 다른 기기로 옮길 때는 파일을 내보내세요.</p><button class="secondary" id="exportSave" ${customMode?'disabled':''}>저장 파일 내보내기</button><button class="secondary" id="importSave" ${customMode?'disabled':''}>저장 파일 불러오기</button><button class="secondary" id="settingsHelp">플레이 방법</button><p class="footnote">v0.6.37 · 임시 Web Audio BGM · 음악 기본 볼륨의 50% · 효과음 자체 생성<br>인터넷에 연결한 상태로 한 번 실행한 뒤 홈 화면에 추가하세요. 오프라인 데이터는 브라우저가 삭제할 수 있습니다.</p>`,()=>{$('#setSpeed').onchange=e=>{save.settings.speed=+e.target.value;persistSettings();};$('#setSound').onclick=()=>{toggleSound();showSettings(back);};$('#setQuality').onchange=e=>{save.settings.quality=+e.target.value;renderer.setPixelRatio(Math.min(devicePixelRatio,save.settings.quality===0?1:1.75));resize();persistSettings();};$('#setDifficulty').onchange=e=>{save.difficulty=e.target.value;persistSettings();};$('#exportSave').onclick=exportSave;$('#importSave').onclick=()=>{showSheet('저장 파일 불러오기',`<p>불러온 파일의 기록으로 현재 여정을 교체합니다. 현재 기록이 필요하면 먼저 내보내 주세요.</p><button class="primary" id="pickImport">파일 선택</button>`,()=>{$('#pickImport').onclick=()=>$('#import').click();},{back:()=>showSettings(back)});};$('#settingsHelp').onclick=()=>showHelp(()=>showSettings(back));},{back});}
function persistSettings(){if(customMode){persist();return;}if(isTitle&&hasSave()){try{const s=JSON.parse(localStorage.getItem(SAVE_KEY));s.settings=save.settings;s.difficulty=save.difficulty;localStorage.setItem(SAVE_KEY,JSON.stringify(s));}catch{}}else persist();}
function toggleSound(){save.settings.sound=!save.settings.sound;$('#sound').textContent=save.settings.sound?'♪':'♩';if(save.settings.sound){unlockAudio();sfx();}else stopBgmPlayback();persistSettings();}
function showHelp(back=closeSheet){showSheet('플레이 방법',`<h3>한 턴에 이동 한 번, 행동 한 번</h3><p>아군을 선택하면 파란 이동 범위가 나타납니다. 목적지를 한 번 탭해 경로를 확인하고, 같은 칸을 다시 탭하거나 확정 버튼을 눌러 이동하세요.</p><p>공격 또는 스킬을 누른 뒤 대상을 탭하면 예상 피해가 나타납니다. 다시 탭해 확정합니다. 제자리에서 공격·스킬을 먼저 쓰면 그 뒤 한 번 이동할 수 있습니다. 회복약·대기는 이동까지 마칩니다.</p><h3>전장을 읽어 보세요</h3><p>숲·잡초·모래 이동 비용 2, 늪 3, 물은 통과할 수 없습니다. 높이 차가 JUMP를 넘으면 이동할 수 없습니다. 높은 곳과 적의 옆·뒤에서 공격하면 피해가 커집니다. 카일이 쓰러지면 패배합니다.</p><p>불·물·바람 마법은 물→불→바람→물 순으로 유리합니다. 유리한 마법 150%, 불리한 마법 50%, 무속성·물리 공격 100%입니다. 냉기는 물로 취급합니다. 골렘은 마법 피해를 10%, 유령은 물리 피해를 10%만 받습니다. 독·화상은 지속 피해, 빙결은 이동 감소, 침묵은 스킬 제한, 수면·기절은 행동 제한입니다.</p><h3>시점 조작</h3><p>한 손가락 드래그로 이동, 두 손가락으로 확대·축소합니다. 빠르게 좌우로 쓸거나 회전 버튼을 눌러 90도 회전하세요. ⌖ 버튼은 원래 시점으로 돌아갑니다.</p><h3>성장과 모험</h3><p>프롤로그와 8개 챕터, 최종장에 스토리 전투 30개, 선택 임무 15개, 별도 보스전 8개가 있습니다. 선택 임무는 건너뛰어도 됩니다. 클리어한 전투는 다시 도전할 수 있습니다.</p><p>스킬은 Lv.1·4·8·14·20에 열립니다. Lv.10·20에는 파티 관리에서 전직하세요. 전투마다 HP·MP가 회복되고, 쓰러진 동료도 다음 전투에 돌아옵니다. 회복약은 체력 소·중·대와 마력 소·대로 나뉘며 전투 메뉴에서 사용합니다.</p><h3>홈 화면 · 오프라인</h3><p>iPhone은 Safari의 공유 메뉴에서 ‘홈 화면에 추가’, Android는 Chrome 메뉴에서 앱 설치를 선택하세요. HTTPS 주소에서 첫 실행이 완료되면 기본 파일을 오프라인으로 사용할 수 있습니다.</p>`,()=>{},{back});}
function escapeHTML(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function exportSave(){if(customMode){toast('스토리 저장 파일 관리는 타이틀에서 이용해 주세요.');return;}if(!isTitle)persist();const record=isTitle?readStorySave():{kind:'valid',data:save};if(record.kind==='invalid'){exportDamagedSave();return;}const s=record.kind==='valid'?record.data:save,blob=new Blob([JSON.stringify(s,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=`cnation-tactics-save-${new Date().toISOString().slice(0,10)}.json`;a.click();setTimeout(()=>URL.revokeObjectURL(url),10000);}
$('#import').onchange=async e=>{if(customMode){toast('커스텀 종료 후 스토리 저장을 불러와 주세요.');e.target.value='';return;}const file=e.target.files[0];if(!file)return;try{if(file.size>2e6)throw Error('파일이 너무 큽니다.');const s=JSON.parse(await file.text());if(!validSave(s))throw Error('지원하지 않거나 손상된 저장 파일입니다.');const imported=normalizeSave(s);localStorage.setItem(SAVE_KEY,JSON.stringify(imported));save=imported;isTitle=false;battle=save.battle;toast('저장 파일을 불러왔습니다.');continueJourney();}catch(e){toast(e.message||'저장 파일을 읽지 못했습니다.');}e.target.value='';};
function showResult(){if(!battle||!['victory','defeat'].includes(battle.phase))return;if(customMode){showCustomResult();return;}playBgm(battle.phase==='victory'?'victory':'sad');const win=battle.phase==='victory',s=getStage(),r=battle.reward;showSheet(win?'VICTORY':'DEFEAT',`<div class="result"><div class="seal">${win?'✧':'◇'}</div><h3>${win?'전투에서 승리했습니다':'다시 도전할 수 있습니다'}</h3><p>${s.name} · ${battle.round}턴</p>${win?`<div class="rewards"><span class="gold">+${r.gold.toLocaleString()} G</span><p style="margin-bottom:0">모든 출전 영웅 EXP +${r.xp}</p></div>`:'<p>카일이 쓰러졌거나 50턴을 넘겼습니다.<br>전투 시작 상태에서 다시 도전하세요.</p>'}<button class="primary" id="resultNext">${win?'월드맵으로':'다시 도전'}</button>${!win?'<button class="secondary" id="resultWorld">월드맵으로</button>':''}</div>`,()=>{$('#resultNext').onclick=()=>{if(win){const ending=s.id==='c9s2';battle=null;save.retry=null;persist();currentChapter=s.chapter;if(ending)showEnding();else showWorld();}else retryBattle();};$('#resultWorld')?.addEventListener('click',()=>{restoreRetryProgress();battle=null;save.retry=null;persist();showWorld(s.chapter);});},{noClose:true});}
function restoreRetryProgress(){if(Number.isFinite(save.retryGold))save.gold=save.retryGold;if(save.retryInventory)save.inventory=copy(save.retryInventory);if(Number.isSafeInteger(save.retryLootSeq))save.lootSeq=save.retryLootSeq;if(save.retryParty)save.party=copy(save.retryParty);if(save.retryConsumables)save.consumables=copy(save.retryConsumables);}
function retryBattle(){restoreRetryProgress();battle=copy(save.retry||makeBattle(getStage()));if(save.completed.includes(battle.stageId)){battle.pickups=[];if(battle.mapRules)battle.mapRules.itemCount=0;}busy=false;preview=null;skill=null;selected=battle.units[0].id;mode='move';closeSheet();buildScene();refreshUI();persist();playBgm(getStage().goal==='boss'?'boss':'battle');}
function showEnding(){playBgm('ending');showSheet('새로운 아침',`<div class="dialogue"><b>리아</b><p>이제 들리지 않아. 나를 부르던 코어의 목소리도, 백 년 전의 전쟁도.</p><b>카일</b><p>그럼 이제 네가 가고 싶은 곳으로 가자. 우리 모두 함께.</p></div><p>에테르는 다시 대륙을 흘렀다. 병기의 시대는 끝났지만, 여섯 사람의 여행은 아직 끝나지 않았다.</p><div class="result"><div class="eyebrow">THE ARCA CHRONICLE</div><h2 style="margin:15px">FIN</h2></div><button class="primary" id="postGame">남은 모험 계속하기</button>`,()=>{$('#postGame').onclick=()=>showWorld(9);},{noClose:true});}
function resumeBattle(){if(busy)return;closeSheet();isTitle=false;selected=selected||alive('ally')[0]?.id;refreshUI();refreshHighlights();playBgm(getStage()?.goal==='boss'?'boss':'battle');if(battle.phase==='enemy')enemyTurn();}
function continueJourney(){unlockAudio();isTitle=false;battle=save.battle?copy(save.battle):null;currentChapter=save.chapter||0;closeSheet();if(battle){selected=(battle.units.find(u=>u.team==='ally'&&u.hp>0&&!u.acted)||battle.units.find(u=>u.team==='ally'))?.id;preview=null;skill=null;mode=battle.units.find(u=>u.id===selected)?.moved?'attack':'move';busy=false;buildScene();refreshUI();if(['victory','defeat'].includes(battle.phase))showResult();else resumeBattle();}else{battle=makeBattle(STAGES[0]);buildScene();battle=null;showWorld(currentChapter);}}
// A previous service worker can briefly pair old HTML with the new script.
// Upgrade the small title surface in-place so this transition never crashes.
if(!$('#encyclopediaBtn')){const button=document.createElement('button');button.id='encyclopediaBtn';button.className='secondary';button.textContent='백과사전';$('#newGame').after(button);}
const recoverButton=document.createElement('button');recoverButton.id='recoverSave';recoverButton.className='secondary';recoverButton.textContent='손상된 저장 원본 내보내기';recoverButton.onclick=exportDamagedSave;$('#newGame').after(recoverButton);
if($('.version'))$('.version').textContent='v0.6.37 · FULL HEIGHT LAYOUT';
const codexStyle=document.createElement('style');codexStyle.textContent='.skill-detail p{font-size:13px;line-height:1.8;margin:10px 0}.skill-detail b{float:none;color:#345c4b}.codex-card p{line-height:1.8}.model-portrait{display:block;width:100%;height:100%;object-fit:contain}.portrait:has(.model-portrait){overflow:hidden}.battle-active header{height:calc(42px + env(safe-area-inset-top));padding:calc(4px + env(safe-area-inset-top)) 14px 4px}.battle-active header .eyebrow{display:none}.battle-active header .brand{font-size:17px;letter-spacing:1px;margin:0}.battle-active header .iconbtn{height:34px;min-width:34px;font-size:17px}.party-chip{font-size:12px;min-width:44px;flex:1;padding:0 7px;white-space:nowrap}.party-strip{gap:6px}.unit-label{width:100px}.hp-line{display:flex;align-items:center;justify-content:center;gap:3px}.hp-line .hp{width:32px;flex:none}.hp-value{font-size:10px;line-height:1.2;font-weight:800;color:#fff;background:transparent;padding:1px 0;white-space:nowrap;-webkit-text-stroke:.5px #000;paint-order:stroke fill;text-shadow:-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000}.enemy-portrait{background:#e1c5ae;color:#875442}.enemy-details{display:grid;gap:5px;margin-top:10px;font-size:12px;line-height:1.45}.hit-report{border:1px solid #bca570;border-radius:6px;padding:7px 10px;margin-bottom:9px;background:#eee3c9;font-size:12px;line-height:1.5}.hit-report button{background:transparent;color:#725b38;font-size:20px;padding:0 5px}.hit-report-rows{max-height:66px;overflow:auto}.forecast-targets{max-height:126px;overflow:auto}.forecast-target{border-bottom:1px solid #c9b788;padding:5px 0}.target-info{background:transparent!important;color:#43665a!important;border:1px solid #9fae91;padding:4px 6px!important;margin:3px 0;font-size:11px!important;border-radius:4px}.forecast .confirmrow{margin-top:7px}.custom-wide{width:100%;padding:12px;border-radius:6px;background:#d9e2d0;color:#355142;border:1px solid #b7c5af;margin:10px 0}.settings-row select{max-width:70%}#codexModel{width:100%;height:220px;background:radial-gradient(ellipse,#9abca8,#d8e2d0);border-radius:12px;margin-bottom:10px}.codex-card{border:1px solid #c2cbb7;border-radius:8px;padding:12px;margin:10px 0}.codex-card summary{cursor:pointer;font-weight:700;line-height:1.6}.sheet p{line-height:1.7}.title-bottom small{margin-top:10px}.title-bottom button{padding:12px;margin:6px auto}.title-screen .version{color:#bdd0c1}@media(max-height:700px){.title-bottom p{margin:5px 0}.title-bottom button{padding:10px;margin:4px auto}.title-bottom small{margin-top:6px}}';document.head.append(codexStyle);
const visualStyle=document.createElement('style');visualStyle.textContent=".equip-stage{display:grid;grid-template-columns:minmax(0,1fr) minmax(120px,1.55fr) minmax(0,1fr);grid-template-areas:\"weapon hero armor\" \". accessory .\";gap:8px;align-items:center;padding:12px;margin:10px 0 14px;border:1px solid #b8c8b5;border-radius:12px;background:radial-gradient(ellipse at 50% 32%,#c3deca,#d9e5d6 70%);min-width:0}\n#equipmentHero{grid-area:hero;width:100%;height:190px;min-width:0;display:block}\n.equip-slot{min-width:0;min-height:144px;padding:6px!important;margin:0!important;border:1px solid #aabcae!important;border-radius:10px;background:#eef1e7!important;color:#284d47!important;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;font-size:11px!important;line-height:1.15;text-align:center;overflow:hidden}\n.equip-slot img{width:64px;height:70px;object-fit:contain}\n.equip-slot>span:first-child{font-weight:700}\n.equip-slot strong{font-size:11px;max-width:100%;overflow-wrap:anywhere}\n.equip-empty{font-size:32px;color:#83a499;line-height:68px}\n.slot-0{grid-area:weapon}.slot-1{grid-area:armor}.slot-2{grid-area:accessory;min-height:86px}.slot-2 img{height:42px;width:44px}.slot-2 .equip-empty{line-height:32px}\n.equip-filters{margin-top:12px}\n.gear-row{display:flex;align-items:center;gap:10px;border:1px solid #c2cbb7;border-radius:9px;background:#edf0e6;padding:8px;margin:9px 0;min-width:0}\n.gear-thumb{flex:none;width:70px;height:76px;border-radius:8px;background:radial-gradient(ellipse,#a7c9b3,#dce7d5)}\n.gear-thumb img{width:100%;height:100%;object-fit:contain}\n.gear-copy{flex:1;min-width:0}.gear-copy b{font-size:14px}.gear-copy small{display:block;font-size:12px;line-height:1.5;margin:4px 0}.gear-copy .row{gap:5px}.gear-copy .row button[disabled]{display:none}.gear-copy button{margin:3px 0!important;padding:7px!important;font-size:11px!important}\n.map-heading{margin:12px 0 7px}.map-heading h3{font-size:22px;margin:2px 0}.map-heading p{font-size:12px;line-height:1.45;margin:0;color:#5f7268}\n.journey-map{height:340px;position:relative;overflow:hidden;border-radius:13px;border:1px solid #9eb3a5;background:#acc9b7;box-shadow:inset 0 0 28px #28483844}\n#journeyMap{width:100%;height:100%;display:block}\n.map-node{position:absolute;z-index:2;transform:translate(-50%,-50%);width:75px;min-height:66px;padding:2px 3px!important;margin:0!important;border:0!important;background:transparent!important;color:#183c37!important;text-align:center;filter:drop-shadow(0 2px 2px #17382d80)}\n.map-node>span{display:grid;place-items:center;width:36px;height:36px;margin:auto;border:2px solid #fff5d8;border-radius:50%;background:#356f63;color:#fff7db;font-size:17px;font-weight:800;box-shadow:0 0 0 4px #28554c55,0 3px 8px #17382d99}\n.map-node small{display:block;width:100%;padding:2px 3px;margin-top:3px;border-radius:5px;background:#f2efdded;color:#274c42;font-size:10px;font-weight:700;line-height:1.15;overflow-wrap:anywhere}\n.map-node.complete>span{background:#a6884f}.map-node.locked{opacity:.6;filter:none}.map-node.locked>span{background:#6b7976}.map-node.locked small{display:none}\n.story-scene{position:relative;overflow:hidden;border-radius:12px;margin:10px 0 0;border:1px solid #abc1ad;background:#a8c5b3}\n#storyCanvas{width:100%;height:245px;display:block}\n.story-cast{position:absolute;left:8%;right:8%;bottom:9px;display:flex;justify-content:space-between;pointer-events:none}\n.story-cast span{padding:4px 10px;border-radius:12px;background:#173b38d9;color:#f7f0cf;font-size:12px;font-weight:700}\n.story-bubble{position:relative;margin:-4px 8px 16px;padding:13px 16px 12px;background:#fcf9e9;border:2px solid #a7bba8;border-radius:13px;box-shadow:0 4px 9px #40574c33}\n.story-bubble:before{content:\"\";position:absolute;top:-12px;left:22%;border-left:11px solid transparent;border-right:11px solid transparent;border-bottom:12px solid #a7bba8}\n.story-bubble b{display:block;color:#265d55;font-size:14px;margin-bottom:4px}.story-bubble p{margin:0!important;font-size:15px;line-height:1.7;color:#283e37}\n@media(max-width:430px){.equip-stage{padding:8px;gap:5px;grid-template-columns:minmax(0,1fr) minmax(105px,1.4fr) minmax(0,1fr)}#equipmentHero{height:168px}.equip-slot{min-height:130px}.equip-slot img{width:55px;height:60px}.slot-2{min-height:79px}.journey-map{height:305px}.map-node{width:65px}.map-node small{font-size:9px}#storyCanvas{height:215px}}\n";document.head.append(visualStyle);
const storyStyle=document.createElement('style');storyStyle.textContent='.story-cast span.active{background:#f7efcd;color:#1d5046;box-shadow:0 0 0 2px #327f6f,0 0 14px #fff3bf}.story-bubble.speaker-right:before{left:auto;right:22%}.story-bubble b{display:block;font-size:17px;font-weight:800}.story-cast.three-cast{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:5px}.three-cast .cast-left{grid-column:1;grid-row:1}.three-cast .cast-center{grid-column:2;grid-row:1}.three-cast .cast-right{grid-column:3;grid-row:1}.story-bubble.speaker-center:before{left:calc(50% - 6px);right:auto}.join-notice{text-align:center;padding:8px;border-radius:6px;background:#d3dfcb;color:#295b43;font-size:13px;font-weight:700;margin:8px 0}';document.head.append(storyStyle);
const mapGuideStyle=document.createElement('style');mapGuideStyle.textContent='.map-guide{margin:11px 0 14px;padding:10px 12px;border:1px solid #bdcdb8;border-radius:8px;background:#e5ebde;color:#36584d!important;font-size:12px!important;line-height:1.6!important}.map-guide b{color:#205646}.map-route-legend{position:absolute;top:8px;left:8px;z-index:3;display:grid;gap:2px;padding:5px 8px;border-radius:6px;background:#f5f1dfe8;color:#225247;box-shadow:0 2px 6px #20483744;pointer-events:none;font-size:10px;line-height:1.3}.map-route-legend b{font-size:10px}.map-route-legend span{white-space:nowrap}';document.head.append(mapGuideStyle);
const mapLandmarkStyle=document.createElement('style');mapLandmarkStyle.textContent='.journey-map{height:440px}.map-node{width:86px;min-height:58px}.map-node>span{width:32px;height:32px}.map-node small{font-size:10px;line-height:1.15;background:#f7f2e8ed}.map-node.locked{opacity:.72}.map-node.locked small{display:block}.map-node[data-stage*="q"]>span{background:#8c7652}.map-node[data-stage*="q"].complete>span{background:#a6884f}@media(max-width:430px){.journey-map{height:400px}.map-node{width:72px}.map-node small{font-size:9px}}';document.head.append(mapLandmarkStyle);
const mapNodeStyle=document.createElement('style');mapNodeStyle.textContent=`
.map-node{width:36px;height:36px;min-height:36px;padding:0!important;overflow:visible;filter:none}
.map-node>span{width:36px;height:36px;margin:0;box-sizing:border-box}
.map-node small{position:absolute;top:50%;width:90px;margin:0;padding:0!important;border:0;border-radius:0;background:transparent!important;box-shadow:none;color:#173d32;font-size:11px;font-weight:700;line-height:1.18;overflow-wrap:anywhere;pointer-events:none;text-shadow:0 1px 1px #edf3df,1px 0 1px #edf3df,-1px 0 1px #edf3df,0 -1px 1px #edf3df;transform:translateY(-50%)}
.map-node small strong{font-size:12px;font-weight:900}
.map-node small span{font-size:11px;font-weight:700}
.map-node.label-right small{left:44px;text-align:left}
.map-node.label-left small{right:44px;text-align:right}
.map-node.label-bottom small{top:44px;left:50%;transform:translateX(-50%);text-align:center}
.map-node.label-top small{top:auto;bottom:54px;left:50%;transform:translateX(-50%);text-align:center}
.map-node.label-raised small{top:0;transform:translateY(-100%)}
.map-node.complete>span,.map-node[data-stage*="q"].complete>span{background:#89918c;border-color:#e1e5da;color:#f8faf4;box-shadow:0 0 0 3px #596e6866,0 2px 5px #17382d66}
.map-node.next-main>span,.map-node.available-main>span{background:#ffe16c;border-color:#fff6be;color:#59431b;box-shadow:0 0 0 4px #ffdf746e,0 0 15px #ffeb8b}
.map-node.available-extra>span{background:#b78d3d;border-color:#edcf80;color:#fff8df;box-shadow:0 0 0 3px #9a762b88,0 2px 7px #493b2088}
.map-node.locked{opacity:1;filter:none}
.map-node.locked>span{background:#899688;border-color:#d8dfd3;color:#e1e8db;opacity:.28;box-shadow:none}
.map-node.locked small{display:block;color:#42594b;opacity:.85}
.map-node.missed-extra>span{background:#777d77;border-color:#d4dbd1;color:#ebeee8;opacity:.4;box-shadow:none}
.map-node.missed-extra small{color:#4c6256;opacity:.8}
@media(max-width:430px){.map-node{width:34px;height:34px;min-height:34px}.map-node>span{width:34px;height:34px}.map-node small{width:78px;font-size:10px}.map-node small strong{font-size:11px}.map-node small span{font-size:10px}.map-node.label-right small{left:41px}.map-node.label-left small{right:41px}.map-node.label-bottom small{top:41px}.map-node.label-top small{bottom:50px}.map-node.label-main-middle.label-right small{left:77px;width:58px}}
`;document.head.append(mapNodeStyle);
if(ENABLE_CUSTOM_MODE){const button=document.createElement('button');button.id='customGameBtn';button.className='secondary';button.textContent='커스텀 게임 · 테스트용';$('#encyclopediaBtn').before(button);button.onclick=()=>showCustomSetup();}
$('#encyclopediaBtn').onclick=()=>{unlockAudio();showEncyclopedia();};
$('#newGame').onclick=()=>{unlockAudio();playBgm('title');showNewGame();};$('#continue').onclick=continueJourney;refreshTitleSaveState();$('#sound').onclick=toggleSound;$('#menu').onclick=showMenu;
document.addEventListener('pointerdown',unlockAudio,{passive:true});document.addEventListener('keydown',unlockAudio);
document.addEventListener('visibilitychange',()=>{if(document.hidden){stopBgmPlayback();if(!busy)persist();}else if(save.settings.sound)unlockAudio();});window.addEventListener('pagehide',()=>{stopBgmPlayback();if(!busy)persist();});window.addEventListener('pageshow',()=>{if(save.settings.sound&&audioCtx)unlockAudio();});
playBgm('title');
// Public, read-only diagnostic state. Useful for reproducing battle reports.
window.TACTICS={version:'0.6.37',getState:()=>copy({stage:battle?.stageId,phase:battle?.phase,round:battle?.round,mapSeed:battle?.mapSeed,mapRules:battle?.mapRules,selected,mode,busy,isTitle,activeSpell,inspectedEnemy,inspectedItem,lastHitReport,units:battle?.units,tiles:battle?.tiles,pickups:battle?.pickups,completed:save.completed,customMode,drawCalls:renderer.info.render.calls}),getCatalog:()=>({chapters:CHAPTERS.length,stages:STAGES.length,heroes:HEROES.length,skills:Object.keys(SKILLS).length}),tileScreen:(x,z)=>project(toWorld(tile(x,z)).add(new THREE.Vector3(0,.1,0)))};
// Only enabled by an explicit local test query; never changes ordinary game play.
if(new URLSearchParams(location.search).has('test'))window.TACTICS_TEST={start:id=>startBattle(STAGES.find(s=>s.id===id),true),tap:(x,z)=>tapTile(tile(x,z)),select:id=>selectUnit(battle.units.find(u=>u.id===id)),mode:setMode,confirm:confirmAction,end:endPlayerTurn,wait:waitUnit,state:()=>({save,battle}),skill:id=>{skill=SKILLS[id];mode='skill';preview=null;refreshUI();refreshHighlights();},save:persist,check:checkEnd,movement:id=>[...movement(battle.units.find(u=>u.id===id))],path:(id,x,z)=>pathfind(battle.units.find(u=>u.id===id),tile(x,z)),estimate:(a,b,id)=>estimate(battle.units.find(u=>u.id===a),battle.units.find(u=>u.id===b),id?SKILLS[id]:basic(battle.units.find(u=>u.id===a))),inspect:id=>inspectEnemy(battle.units.find(u=>u.id===id)),enemyMovement:id=>[...enemyMoveRange(battle.units.find(u=>u.id===id))],retry:retryBattle,audio:()=>({type:playingBgm,track:bgmTrackFor(playingBgm),active:activeBgmKey,volume:soundtrack?.volume,error:bgmError}),bgm:playBgm,inventory:showInventory,codex:showEncyclopedia,story:id=>showStory(STAGES.find(s=>s.id===id)),validate:validSave,catalog:{STAGES,HEROES,SKILLS,MONSTERS,GEAR},mapRules:battleRules,generate:makeBattle,stats:heroStats};
battle=makeBattle(STAGES[0]);selected='kyle';buildScene();refreshUI();$('#sound').textContent=save.settings.sound?'♪':'♩';window.TACTICS_READY=true;

if(document.modelContext?.registerTool){const life=new AbortController();try{Promise.resolve(document.modelContext.registerTool({name:'read_tactics_battle',title:'전투 상태 확인',description:'현재 전투의 턴, 캐릭터, 지형 상태를 확인합니다. 게임 상태는 바뀌지 않습니다.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true,untrustedContentHint:false},execute(input){if(!input||typeof input!=='object'||Array.isArray(input)||Object.keys(input).length)throw Error('빈 객체를 입력하세요.');return window.TACTICS.getState();}},{signal:life.signal})).catch(()=>{});}catch{}window.addEventListener('pagehide',()=>life.abort(),{once:true});}
})();
