export const itemHtml = `        <div id="productItem" class="col">
          <div class="cont mb-4">
            <img id="itemImage" class="img-fluid rounded z-0" src="" alt="Err">
            <button id="addToCartItem" class="btn btn-warning item-btn" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><g fill="#C73B0F" clip-path="url(#a)"><path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/><path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z"/></clipPath></defs></svg>
              <span class="d-md-none d-lg-inline d-sm-block">Add to Cart</span>
            </button>
          </div>
          <p id="productType" class="text-muted mb-0"></p>
          <p id="itemName" class="m-0" style="font-weight: 600;">
                
          </p>
          <p id="itemPrice" class="orange" style="font-weight: 600;"></p>
        </div>`;
export const cartItem = `      <div id=cartItem class="cart-item position-relative">
        <p id="cartItemName" class="my-1" style="font-size: 0.85rem; font-weight: 600;">Classic Tiramisu</p>
        <svg class="remove-button" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none"
          viewBox="0 0 10 10">
          <path fill="#CAAFA7"
            d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z" />
        </svg>
        <div class="cart-item-stats d-flex mb-0" style="font-size: 0.85rem; font-weight: 600;">
          <p id="cartItemCount" class="orange mb-0">1x</p>
          <p id="cartItenPrice" class="mx-2 mb-0 text-muted">@$5.50</p>
          <p id="cartItemTotal" class="mb-2" style="color: var(--rosa5);">$5.50</p>
        </div>
        <div class="cart-item-separator mt-0 mb-2"></div>
      </div>`