import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class RevealOnScroll {
    constructor() {
        this.itemsToReveal = $(".feature-item");
        this.hideInitially();
        this.createWaypoints();
    }

    hideInitially() {
        this.itemsToReveal.addClass("reveal-item");
    }

    createWaypoints() {
        for(let item of this.itemsToReveal) {
            new Waypoint({
                element: item,
                handler: function() {$(item).addClass("reveal-item--is-visible");},
                offset: "75%"
            });
        }
    }
}

export default RevealOnScroll;
