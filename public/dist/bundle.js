/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes/Invoice.ts":
/*!********************************!*\
  !*** ./src/classes/Invoice.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Invoice": () => (/* binding */ Invoice)
/* harmony export */ });
//this class is going to follow the structure of the interface HasFormatter
class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} ows ${this.amount} for ${this.details}`;
    }
}


/***/ }),

/***/ "./src/classes/ListTemplate.ts":
/*!*************************************!*\
  !*** ./src/classes/ListTemplate.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListTemplate": () => (/* binding */ ListTemplate)
/* harmony export */ });
class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    ;
    render(item, heading, pos) {
        const li = document.createElement('li');
        const div = document.createElement('div');
        const h4 = document.createElement('h4');
        const p = document.createElement('p');
        const deleteSpan = document.createElement('span');
        let id = Math.floor(Math.random() * 100);
        h4.innerText = heading;
        li.append(div);
        li.append(deleteSpan);
        li.setAttribute('id', `item-${id}`);
        deleteSpan.classList.add('delete');
        deleteSpan.setAttribute('id', `item-${id}`);
        div.append(h4);
        p.innerText = item.format();
        div.append(p);
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}


/***/ }),

/***/ "./src/classes/Payment.ts":
/*!********************************!*\
  !*** ./src/classes/Payment.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Payment": () => (/* binding */ Payment)
/* harmony export */ });
//this class is going to follow the structure of the interface HasFormatter
class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is owed ${this.amount} for ${this.details}`;
    }
}


/***/ }),

/***/ "./src/classes/RemoveItem.ts":
/*!***********************************!*\
  !*** ./src/classes/RemoveItem.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemoveItem": () => (/* binding */ RemoveItem)
/* harmony export */ });
class RemoveItem {
    constructor() { }
    remove() {
        const removeBtn = document.querySelectorAll(".delete");
        removeBtn.forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                const id = e.target.getAttribute("id");
                const item = document.getElementById(id);
                if (item)
                    item.remove();
            });
        });
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_Invoice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Invoice */ "./src/classes/Invoice.ts");
/* harmony import */ var _classes_ListTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/ListTemplate */ "./src/classes/ListTemplate.ts");
/* harmony import */ var _classes_Payment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/Payment */ "./src/classes/Payment.ts");
/* harmony import */ var _classes_RemoveItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/RemoveItem */ "./src/classes/RemoveItem.ts");




const form = document.querySelector("form");
const type = document.querySelector("#type");
const toFrom = document.querySelector("#toFrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const alert = document.querySelector(".alert");
//list template instance:(! say to the compiler that the ul is going to be found in the document and it's not null)
const ul = document.querySelector("ul");
const list = new _classes_ListTemplate__WEBPACK_IMPORTED_MODULE_1__.ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    //using tuples:
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (toFrom.value && details.value && amount.valueAsNumber) {
        switch (type.value) {
            case "invoice":
                doc = new _classes_Invoice__WEBPACK_IMPORTED_MODULE_0__.Invoice(...values);
                break;
            case "payment":
                doc = new _classes_Payment__WEBPACK_IMPORTED_MODULE_2__.Payment(...values);
                break;
            default:
                return;
        }
        list.render(doc, type.value, "end");
    }
    else {
        alert.classList.remove("d-none");
        setTimeout(() => {
            alert.classList.add("d-none");
        }, 3000);
    }
    const removeItem = new _classes_RemoveItem__WEBPACK_IMPORTED_MODULE_3__.RemoveItem();
    removeItem.remove();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFDaEMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQ1Y7SUFDRCxNQUFNLFVBQVUsR0FBRyxJQUFJLDJEQUFVLEVBQUUsQ0FBQztJQUNwQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDdEIsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maW5hbmNlLWxvZ2dlci8uL3NyYy9jbGFzc2VzL0ludm9pY2UudHMiLCJ3ZWJwYWNrOi8vZmluYW5jZS1sb2dnZXIvLi9zcmMvY2xhc3Nlcy9MaXN0VGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vZmluYW5jZS1sb2dnZXIvLi9zcmMvY2xhc3Nlcy9QYXltZW50LnRzIiwid2VicGFjazovL2ZpbmFuY2UtbG9nZ2VyLy4vc3JjL2NsYXNzZXMvUmVtb3ZlSXRlbS50cyIsIndlYnBhY2s6Ly9maW5hbmNlLWxvZ2dlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9maW5hbmNlLWxvZ2dlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZmluYW5jZS1sb2dnZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9maW5hbmNlLWxvZ2dlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ZpbmFuY2UtbG9nZ2VyLy4vc3JjL2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0hhc0Zvcm1hdHRlcn0gZnJvbSAnLi4vSW50ZXJmYWNlcy9IYXNGb3JtYXR0ZXIuanMnO1xyXG5cclxuLy90aGlzIGNsYXNzIGlzIGdvaW5nIHRvIGZvbGxvdyB0aGUgc3RydWN0dXJlIG9mIHRoZSBpbnRlcmZhY2UgSGFzRm9ybWF0dGVyXHJcbmV4cG9ydCBjbGFzcyBJbnZvaWNlIGltcGxlbWVudHMgSGFzRm9ybWF0dGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgcmVhZG9ubHkgY2xpZW50IDogc3RyaW5nXHJcbiAgICAgLCBwcml2YXRlIGRldGFpbHMgOiBzdHJpbmcgXHJcbiAgICAgLCBwdWJsaWMgYW1vdW50IDogbnVtYmVyXHJcbiAgICAgKXt9XHJcbiAgICBmb3JtYXQoKXtcclxuICAgICAgICByZXR1cm4gYCR7dGhpcy5jbGllbnR9IG93cyAke3RoaXMuYW1vdW50fSBmb3IgJHt0aGlzLmRldGFpbHN9YFxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtIYXNGb3JtYXR0ZXJ9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0hhc0Zvcm1hdHRlci5qc1wiO1xyXG5leHBvcnQgY2xhc3MgTGlzdFRlbXBsYXRle1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGNvbnRhaW5lciA6IEhUTUxVTGlzdEVsZW1lbnQpe307XHJcbiAgICByZW5kZXIoaXRlbSA6IEhhc0Zvcm1hdHRlciwgaGVhZGluZyA6IHN0cmluZyAsIHBvczogJ3N0YXJ0JyB8ICdlbmQnKXtcclxuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgaDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xyXG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgY29uc3QgZGVsZXRlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICBsZXQgaWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApO1xyXG4gICAgICAgIGg0LmlubmVyVGV4dCA9IGhlYWRpbmc7XHJcbiAgICAgICAgbGkuYXBwZW5kKGRpdik7XHJcbiAgICAgICAgbGkuYXBwZW5kKGRlbGV0ZVNwYW4pO1xyXG4gICAgICAgIGxpLnNldEF0dHJpYnV0ZSgnaWQnLCBgaXRlbS0ke2lkfWApO1xyXG4gICAgICAgIGRlbGV0ZVNwYW4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlJyk7XHJcbiAgICAgICAgZGVsZXRlU3Bhbi5zZXRBdHRyaWJ1dGUoJ2lkJywgYGl0ZW0tJHtpZH1gKTtcclxuICAgICAgICBkaXYuYXBwZW5kKGg0KTtcclxuICAgICAgICBwLmlubmVyVGV4dCA9IGl0ZW0uZm9ybWF0KCk7XHJcbiAgICAgICAgZGl2LmFwcGVuZChwKTtcclxuICAgICAgICBpZihwb3MgPT09ICdzdGFydCcpe1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5wcmVwZW5kKGxpKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kKGxpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7SGFzRm9ybWF0dGVyfSBmcm9tICcuLi9JbnRlcmZhY2VzL0hhc0Zvcm1hdHRlci5qcyc7XHJcblxyXG4vL3RoaXMgY2xhc3MgaXMgZ29pbmcgdG8gZm9sbG93IHRoZSBzdHJ1Y3R1cmUgb2YgdGhlIGludGVyZmFjZSBIYXNGb3JtYXR0ZXJcclxuZXhwb3J0IGNsYXNzIFBheW1lbnQgaW1wbGVtZW50cyBIYXNGb3JtYXR0ZXIge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICByZWFkb25seSByZWNpcGllbnQgOiBzdHJpbmdcclxuICAgICAsIHByaXZhdGUgZGV0YWlscyA6IHN0cmluZyBcclxuICAgICAsIHB1YmxpYyBhbW91bnQgOiBudW1iZXJcclxuICAgICApe31cclxuICAgIGZvcm1hdCgpe1xyXG4gICAgICAgIHJldHVybiBgJHt0aGlzLnJlY2lwaWVudH0gaXMgb3dlZCAke3RoaXMuYW1vdW50fSBmb3IgJHt0aGlzLmRldGFpbHN9YFxyXG4gICAgfVxyXG59IiwiXHJcbmV4cG9ydCBjbGFzcyBSZW1vdmVJdGVtIHtcclxuICAgIGNvbnN0cnVjdG9yKCl7fVxyXG4gICAgcmVtb3ZlKCl7XHJcbiAgICAgIGNvbnN0IHJlbW92ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVsZXRlXCIpXHJcbiAgICAgIHJlbW92ZUJ0bi5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZTogRXZlbnQpID0+IHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIGNvbnN0IGlkID0gKGUudGFyZ2V0IGFzIEVsZW1lbnQpLmdldEF0dHJpYnV0ZShcImlkXCIpO1xyXG4gICAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkISk7XHJcbiAgICAgICAgICBpZihpdGVtKWl0ZW0hLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBJbnZvaWNlIH0gZnJvbSBcIi4vY2xhc3Nlcy9JbnZvaWNlXCI7XHJcbmltcG9ydCB7IExpc3RUZW1wbGF0ZSB9IGZyb20gXCIuL2NsYXNzZXMvTGlzdFRlbXBsYXRlXCI7XHJcbmltcG9ydCB7IFBheW1lbnQgfSBmcm9tIFwiLi9jbGFzc2VzL1BheW1lbnRcIjtcclxuaW1wb3J0IHsgUmVtb3ZlSXRlbSB9IGZyb20gXCIuL2NsYXNzZXMvUmVtb3ZlSXRlbVwiO1xyXG5pbXBvcnQgeyBIYXNGb3JtYXR0ZXIgfSBmcm9tIFwiLi9JbnRlcmZhY2VzL0hhc0Zvcm1hdHRlclwiO1xyXG5cclxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpIGFzIEhUTUxGb3JtRWxlbWVudDtcclxuY29uc3QgdHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdHlwZVwiKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcclxuY29uc3QgdG9Gcm9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b0Zyb21cIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGV0YWlsc1wiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5jb25zdCBhbW91bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Ftb3VudFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5jb25zdCBhbGVydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWxlcnRcIikgYXMgSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4vL2xpc3QgdGVtcGxhdGUgaW5zdGFuY2U6KCEgc2F5IHRvIHRoZSBjb21waWxlciB0aGF0IHRoZSB1bCBpcyBnb2luZyB0byBiZSBmb3VuZCBpbiB0aGUgZG9jdW1lbnQgYW5kIGl0J3Mgbm90IG51bGwpXHJcbmNvbnN0IHVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInVsXCIpITtcclxuY29uc3QgbGlzdCA9IG5ldyBMaXN0VGVtcGxhdGUodWwpO1xyXG5cclxuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlOiBFdmVudCkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICAvL3VzaW5nIHR1cGxlczpcclxuICBsZXQgdmFsdWVzOltzdHJpbmcgLCBzdHJpbmcgLCBudW1iZXJdO1xyXG4gIHZhbHVlcz1bdG9Gcm9tLnZhbHVlLCBkZXRhaWxzLnZhbHVlLCBhbW91bnQudmFsdWVBc051bWJlcl1cclxuICBsZXQgZG9jIDogSGFzRm9ybWF0dGVyO1xyXG4gIGlmKHRvRnJvbS52YWx1ZSAmJiBkZXRhaWxzLnZhbHVlICYmIGFtb3VudC52YWx1ZUFzTnVtYmVyKXtcclxuICAgIHN3aXRjaCAodHlwZS52YWx1ZSkge1xyXG4gICAgICBjYXNlIFwiaW52b2ljZVwiOlxyXG4gICAgICAgIGRvYyA9IG5ldyBJbnZvaWNlKC4uLnZhbHVlcyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJwYXltZW50XCI6XHJcbiAgICAgICAgZG9jID0gbmV3IFBheW1lbnQoLi4udmFsdWVzKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgbGlzdC5yZW5kZXIoZG9jLCB0eXBlLnZhbHVlLCBcImVuZFwiKTtcclxuICB9ZWxzZXtcclxuICAgIGFsZXJ0LmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIik7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgYWxlcnQuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKTtcclxuICAgIH0sIDMwMDApO1xyXG4gIH1cclxuICBjb25zdCByZW1vdmVJdGVtID0gbmV3IFJlbW92ZUl0ZW0oKTtcclxuICByZW1vdmVJdGVtLnJlbW92ZSgpO1xyXG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=