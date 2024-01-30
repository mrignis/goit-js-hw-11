import{a as f,n as i}from"./assets/vendor-0bd6e11e.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function u(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const h="https://pixabay.com/api/",y="42103820-367af78541649bbd92098b568";class p{constructor(){this.searchQuery="",this.page=1}async getImage(){try{const e=await f.get(h,{params:{key:y,q:this.searchQuery,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:40,page:this.page}});return this.page+=1,e.data}catch(e){throw console.error("Error fetching images:",e),e}}resetPage(){this.page=1}get query(){return this.searchQuery}set query(e){this.searchQuery=e}}const n=new p,m=document.querySelector("form#search-form"),d=document.querySelector("div.gallery"),a=document.querySelector("button.load-more");m.addEventListener("submit",g);a.addEventListener("click",b);function g(o){if(o.preventDefault(),a.classList.add("is-hidden"),d.innerHTML="",n.query=o.currentTarget.elements.searchQuery.value.trim(),n.resetPage(),n.query===""){i.Notify.info("Please enter your search query!");return}else n.getImage().then(e=>{let r=e.hits;r.length===0?i.Notify.failure("Sorry, there are no images matching your search query. Please try again."):r.length<40?(l(r),a.classList.add("is-hidden"),i.Notify.success(`Hooray! We found ${e.totalHits} images.`)):(l(r),i.Notify.success(`Hooray! We found ${e.totalHits} images.`),a.classList.remove("is-hidden"))}).catch(e=>{i.Notify.info("We're sorry, but you've reached the end of search results."),console.log(e)})}function b(){n.getImage().then(o=>{let e=o.hits;l(e),e.length<40&&(a.classList.add("is-hidden"),i.Notify.info("We're sorry, but you've reached the end of search results."))})}function l(o){const e=o.map(r=>`<div class="photo-card">
  <div class="thumb"><img src="${r.webformatURL}" alt="${r.tags}" loading="lazy" /></div>
  <div class="info">
    <p class="info-item">
      <b>Likes</b><span>${r.likes}</span>
    </p>
    <p class="info-item">
      <b>Views</b><span>${r.views}</span>
    </p>
    <p class="info-item">
      <b>Comments</b><span>${r.comments}</span>
    </p>
    <p class="info-item">
      <b>Downloads</b><span>${r.downloads}</span>
    </p>
  </div>
</div>`).join("");d.insertAdjacentHTML("beforeend",e)}
//# sourceMappingURL=commonHelpers.js.map
