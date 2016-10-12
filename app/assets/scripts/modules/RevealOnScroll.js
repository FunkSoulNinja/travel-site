import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class RevealOnScroll {
    constructor(elements, offset) {
        this.itemsToReveal = elements;
        this.hideInitially();
        this.offsetPercentage = offset;
        this.createWaypoints();

    }

    hideInitially() {
        this.itemsToReveal.addClass("reveal-item");
    }

    createWaypoints() {
        let element = this;
        for(let item of this.itemsToReveal) {
            new Waypoint({
                element: item,
                handler: function() {$(item).addClass("reveal-item--is-visible");},
                offset: element.offsetPercentage
            });
        }
    }
}

export default RevealOnScroll;
