(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{254:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return A}));var r=a(0),i=a.n(r),n=a(69),o=a(257),s=a(249),l=a(250),d=a(57),c=a(260);var u=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.allMdx.edges;return i.a.createElement(s.a,{location:this.props.location,title:t},i.a.createElement(l.a,{title:"All posts"}),i.a.createElement(o.a,null),i.a.createElement("div",{style:{margin:"20px 0 40px"}},a.map((function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return i.a.createElement("div",{key:t.fields.slug},i.a.createElement("h3",{style:{marginBottom:Object(d.a)(.25)}},i.a.createElement(n.Link,{style:{boxShadow:"none"},to:"blog"+t.fields.slug},a)),i.a.createElement("small",null,t.frontmatter.date),i.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}}))}))),i.a.createElement(n.Link,{to:"/"},i.a.createElement(c.a,{marginTop:"85px"},"Go Home")))},r}(i.a.Component);t.default=u;var A="2167313165"},256:function(e,t,a){"use strict";a(171)("fixed",(function(e){return function(){return e(this,"tt","","")}}))},257:function(e,t,a){"use strict";a(256);var r=a(258),i=a(0),n=a.n(i),o=a(69),s=a(259),l=a.n(s),d=a(95),c=a(57);var u="4007731267",A=d.a.div.withConfig({displayName:"bio__Container",componentId:"sc-1ungyxt-0"})(["display:flex;"]);t.a=function(){return n.a.createElement(o.StaticQuery,{query:u,render:function(e){var t=e.site.siteMetadata,a=t.author,r=t.social;return n.a.createElement(A,null,n.a.createElement(l.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(c.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),n.a.createElement("p",null,"Written by ",n.a.createElement("strong",null,a)," who lives and works in San Francisco building useful things."," ",n.a.createElement("a",{href:"https://twitter.com/"+r.twitter},"You should follow him on Twitter")))},data:r})}},258:function(e){e.exports=JSON.parse('{"data":{"avatar":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAUBAgME/8QAFwEBAAMAAAAAAAAAAAAAAAAAAgABA//aAAwDAQACEAMQAAABtTuWpVlGVPBk0HAFf//EABsQAAICAwEAAAAAAAAAAAAAAAECAxMAESMk/9oACAEBAAEFAnOlgZ7cvIZnEYuxj6ZjxjOh/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEQEiH/2gAIAQMBAT8BwqOP/8QAGREAAQUAAAAAAAAAAAAAAAAAAAEQEiEx/9oACAECAQE/AbJCY3//xAAgEAABAgUFAAAAAAAAAAAAAAABABECAxASITFBYYGR/9oACAEBAAY/Ai2qYx3A0tPifYlsLBBT8qX3T//EABoQAQADAQEBAAAAAAAAAAAAAAEAESExQVH/2gAIAQEAAT8hRVcZF9KXnJkRaRWsbCd3oQNMD6x1eoRshVw76T//2gAMAwEAAgADAAAAENvoAP/EABkRAAIDAQAAAAAAAAAAAAAAAAABESExUf/aAAgBAwEBPxCEpsj00xYf/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAEQESExUf/aAAgBAgEBPxBNs0X5A9n/xAAeEAEBAQACAQUAAAAAAAAAAAABEQAhMUFRYXGBkf/aAAgBAQABPxClwdnV0whQo4lO/wAzyyrjkGw+cZbkILxecbfXBH7zSeBntAmta2n5uEBbXZ4N/9k=","width":50,"height":50,"src":"/tonthanhhung.github.io/static/4f27694bd7811d13157e5e488ad64f43/9b664/profile-pic.jpg","srcSet":"/tonthanhhung.github.io/static/4f27694bd7811d13157e5e488ad64f43/9b664/profile-pic.jpg 1x,\\n/tonthanhhung.github.io/static/4f27694bd7811d13157e5e488ad64f43/06a10/profile-pic.jpg 1.5x,\\n/tonthanhhung.github.io/static/4f27694bd7811d13157e5e488ad64f43/f1b5a/profile-pic.jpg 2x"}}},"site":{"siteMetadata":{"author":"Kyle Matthews","social":{"twitter":"kylemathews"}}}}}')},259:function(e,t,a){"use strict";a(4),a(3),a(2),a(68),a(175),a(256);var r=a(23);t.__esModule=!0,t.default=void 0;var i,n=r(a(94)),o=r(a(93)),s=r(a(173)),l=r(a(174)),d=r(a(0)),c=r(a(51)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=y([].concat(t.fluid))),t.fixed&&(t.fixed=y([].concat(t.fixed))),t},A=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},f=Object.create({}),p=function(e){var t=u(e),a=A(t);return f[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,m=h&&window.IntersectionObserver,b=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function y(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function S(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function v(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var x=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),b.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},B=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?v(e,!0):"")+v(e)})).join("")+"<img "+d+o+s+a+r+t+n+i+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},C=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=d.default.createElement(j,(0,l.default)({src:t},i));return a.length>1?d.default.createElement("picture",null,r(a),n):n},j=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,o=e.onLoad,c=e.onError,u=e.onClick,A=e.loading,f=e.draggable,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","onClick","loading","draggable"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},p,{onLoad:o,onError:c,onClick:u,ref:t,loading:A,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));j.propTypes={style:c.default.object,onError:c.default.func,onClick:c.default.func,onLoad:c.default.func};var k=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!g&&m&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||h&&(g||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=x(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=A(t),f[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,A=void 0===c?{}:c,f=e.placeholderClassName,p=e.fluid,g=e.fixed,h=e.backgroundColor,m=e.durationFadeIn,b=e.Tag,y=e.itemProp,v=e.loading,x=e.draggable,k=!1===this.state.fadeIn||this.state.imgLoaded,I=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,l.default)({opacity:k?1:0,transition:I?"opacity "+m+"ms":"none"},s),L="boolean"==typeof h?"lightgray":h,O={transitionDelay:m+"ms"},N=(0,l.default)({opacity:this.state.imgLoaded?0:1},I&&O,{},s,{},A),Q={title:t,alt:this.state.isVisible?"":a,style:N,className:f,itemProp:y};if(p){var V=p,Y=V[0];return d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(Y.srcSet)},d.default.createElement(b,{style:{width:"100%",paddingBottom:100/Y.aspectRatio+"%"}}),L&&d.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:L,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},I&&O)}),Y.base64&&d.default.createElement(C,{src:Y.base64,spreadProps:Q,imageVariants:V,generateSources:w}),Y.tracedSVG&&d.default.createElement(C,{src:Y.tracedSVG,spreadProps:Q,imageVariants:V,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,E(V),d.default.createElement(j,{alt:a,title:t,sizes:Y.sizes,src:Y.src,crossOrigin:this.props.crossOrigin,srcSet:Y.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:y,loading:v,draggable:x})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:B((0,l.default)({alt:a,title:t,loading:v},Y,{imageVariants:V}))}}))}if(g){var z=g,T=z[0],M=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:T.width,height:T.height},n);return"inherit"===n.display&&delete M.display,d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(T.srcSet)},L&&d.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:L,width:T.width,opacity:this.state.imgLoaded?0:1,height:T.height},I&&O)}),T.base64&&d.default.createElement(C,{src:T.base64,spreadProps:Q,imageVariants:z,generateSources:w}),T.tracedSVG&&d.default.createElement(C,{src:T.tracedSVG,spreadProps:Q,imageVariants:z,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,E(z),d.default.createElement(j,{alt:a,title:t,width:T.width,height:T.height,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:y,loading:v,draggable:x})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:B((0,l.default)({alt:a,title:t,loading:v},T,{imageVariants:z}))}}))}return null},t}(d.default.Component);k.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var I=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),R=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});k.propTypes={resolutions:I,sizes:R,fixed:c.default.oneOfType([I,c.default.arrayOf(I)]),fluid:c.default.oneOfType([R,c.default.arrayOf(R)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onClick:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var L=k;t.default=L},260:function(e,t,a){"use strict";var r=a(0),i=a.n(r),n=a(95).a.button.withConfig({displayName:"button__ButtonWrapper",componentId:"sc-1pxp7nt-0"})(["display:block;border:none;text-align:center;box-sizing:border-box;text-decoration:none;padding:10px 25px;cursor:pointer;text-transform:uppercase;letter-spacing:2px;background:",";color:",";font-size:",";font-weight:",";border-radius:",";margin-top:",";margin-bottom:",";&:hover{box-shadow:inset 0 0 100px 100px rgba(255,255,255,0.25);}"],(function(e){return e.props.background||"black"}),(function(e){return e.props.color||"rgb(255, 255, 255)"}),(function(e){return e.props.fontSize||"15px"}),(function(e){return e.props.fontWeight||"600"}),(function(e){return e.props.radius||"6px"}),(function(e){return e.props.marginTop}),(function(e){return e.props.marginBottom}));t.a=function(e){return i.a.createElement(n,{props:e},e.children)}}}]);
//# sourceMappingURL=component---src-pages-blog-js-f560e5293ca0167c8444.js.map