/*
 * Copyright (C) 2014 United States Government as represented by the Administrator of the
 * National Aeronautics and Space Administration. All Rights Reserved.
 */
define([
    '../KmlElements',
    '../KmlObject',
    './NodeTransformers'
], function (KmlElements,
             KmlObject,
             NodeTransformers) {
    "use strict";
    /**
     * Constructs a ViewVolume. Application usually don't call this constructor. It is called by {@link KmlFile} as
     * Objects from KmlFile are read. It is concrete implementation.
     * @alias ViewVolume
     * @constructor
     * @classdesc Contains the data associated with Kml View Volume
     * @param options {Object}
     * @param options.objectNode {Node} Node representing the Kml View Volume.
     * @throws {ArgumentError} If either the node is null or undefined.
     * @see https://developers.google.com/kml/documentation/kmlreference#viewvolume
     * @augments KmlObject
     */
    var ViewVolume = function (options) {
        KmlObject.call(this, options);
    };

    ViewVolume.prototype = Object.create(KmlObject.prototype);

    Object.defineProperties(ViewVolume.prototype, {
        /**
         * Angle, in degrees, between the camera's viewing direction and the left side of the view volume.
         * @memberof ViewVolume.prototype
         * @readonly
         * @type {Number}
         */
        kmlLeftFov: {
            get: function () {
                return this._factory.specific(this, {name: 'leftFov', transformer: NodeTransformers.number});
            }
        },

        /**
         * Angle, in degrees, between the camera's viewing direction and the right side of the view volume.
         * @memberof ViewVolume.prototype
         * @readonly
         * @type {Number}
         */
        kmlRightFov: {
            get: function () {
                return this._factory.specific(this, {name: 'rightFov', transformer: NodeTransformers.number});
            }
        },

        /**
         * Angle, in degrees, between the camera's viewing direction and the bottom side of the view volume.
         * @memberof ViewVolume.prototype
         * @readonly
         * @type {Number}
         */
        kmlBottomFov: {
            get: function () {
                return this._factory.specific(this, {name: 'bottomFov', transformer: NodeTransformers.number});
            }
        },

        /**
         * Angle, in degrees, between the camera's viewing direction and the top side of the view volume.
         * @memberof ViewVolume.prototype
         * @readonly
         * @type {Number}
         */
        kmlTopFov: {
            get: function () {
                return this._factory.specific(this, {name: 'topFov', transformer: NodeTransformers.number});
            }
        },

        /**
         * Measurement in meters along the viewing direction from the camera viewpoint to the PhotoOverlay shape.
         * The field of view for a PhotoOverlay is defined by four planes, each of which is specified by an angle
         * relative to the view vector. These four planes define the top, bottom, left, and right sides of the field
         *  of view, which has the shape of a truncated pyramid, as shown here:
         * @memberof ViewVolume.prototype
         * @readonly
         * @type {String}
         */
        kmlNear: {
            get: function () {
                return this._factory.specific(this, {name: 'near', transformer: NodeTransformers.string});
            }
        }
    });

    /**
     * @inheritDoc
     */
    ViewVolume.prototype.getTagNames = function () {
        return ['ViewVolume'];
    };

    KmlElements.addKey(ViewVolume.prototype.getTagNames()[0], ViewVolume);

    return ViewVolume;
});