
	$(window).resize(function(){
        var viewportwidth;

        if(typeof window.innerWidth!='undefined'){
              viewportwidth=window.innerWidth;
        }

        if(viewportwidth >= 768){
		$(function () {

			'use strict'

			var newElement =document.createElement('div');
			newElement.textContent = "Im a new element";

			var cover = document.getElementById('i')

			var list = document.getElementById('homepage');

			var replaceElement = document.createElement('div');
			replaceElement.textContent = 'I am replacing you';

			list.replaceChild(replaceElement,cover);


			console.log(newElement);

		});

