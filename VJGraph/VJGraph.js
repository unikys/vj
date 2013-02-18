
/**
 *	Vanilla Javascript library: Graph
 *
 *	Copyright 2013 Sung-ihk Yang (unikys@gmail.com)
 *
 *	Permission is hereby granted, free of charge, to any person obtaining a copy
 *	of this software and associated documentation files (the "Software"), to 
 *	deal in the Software without restriction, including without limitation the
 *	rights to use, copy, modify, merge, publish, distribute, sublicense, and/or 
 *	sell copies of the Software, and to permit persons to whom the Software is
 *	furnished to do so, subject to the following conditions:
 *
 *	The above copyright notice and this permission notice shall be included in 
 *	all copies or substantial portions of the Software.
 *
 *	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
 *	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
 *	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
 *	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING 
 *	FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 *	IN THE SOFTWARE.
 */

(function (doc, win, VJ) {
	var __ = document.querySelector,
		_ = document.getElementById,
		_create = document.createElement,
		_objGraphs = {},
		_DEFAULT_COLORS = ["red", "blue", "green"];

	if (!VJ) {
		VJ = {};
	}

	/**
	 *
	 */
	VJ.graph = function (domId, data, options) {
		var graph = _objGraphs[domId];
		if (graph) {
			return graph;
		}
		graph = new _Graph(domId, data, options);
	}


	/**
	 *
	 *	@param {Object} options - shift, autoUpdate
	 */
	_Graph = function (domId, data, options) {
		var dom = _(domId) || __(domId),
			canvas,
			ctx;

		if (!dom) {
			alert("Wrong dom wrapper");
			return;
		}

		canvas = _create("canvas");
		if (!canvas.getContext) {
			/**
			 * 	TODO : import ExCanvas.js
			 */
		}
		ctx = canvas.getContext("2d");

		this.dom = dom;
		this.canvas = canvas;
		this.ctx = ctx;
		if (data instanceof Array)
		this.data = data || [];
		this.options = options || {};

		this.render();
	};
	_Graph.prototype.appendData = function (data) {
		var data = this.data;
		if (this.options.shift && data.length > 0) {
			data.splice(0, 1);
		}
		data.push(data);
		if (this.options.autoUpdate) {
			this.render();
		}
	};
	_Graph.prototype.render = function () {
		var data = this.data;
	};


	win.VJ = VJ;
}(document, window, VJ));