'use strict';

/**
 * Document Ready, simple functionality.
 *
 * @param {Function} callbackFunc Callback
 */
function ready(callbackFunc) {
	if (document.readyState !== 'loading') {
		// Document is already ready, call the callback directly
		callbackFunc();
	} else if (document.addEventListener) {
		// All modern browsers to register DOMContentLoaded
		document.addEventListener('DOMContentLoaded', callbackFunc);
	} else {
		// Old IE browsers
		document.attachEvent('onreadystatechange', function () {
			if (document.readyState === 'complete') {
				callbackFunc();
			}
		});
	}
}

ready(function () {
	const button = document.getElementById('submit-button');
	const commentContainer = document.getElementById('comment-container');
	const formContainer = document.getElementById('form-container');
	const commentNameInput = document.getElementById('comment-name-input');
	const commentBodyInput = document.getElementById('comment-body-input');

	button.addEventListener('click', function () {
		const commentNode = document.createElement('div');
		commentNode.classList.add('comment');

		const commentNameNode = document.createElement('div');
		commentNameNode.classList.add('comment-name');
		commentNameNode.innerHTML = commentNameInput.value;
		commentNode.appendChild(commentNameNode);

		const commentContentNode = document.createElement('div');
		commentContentNode.classList.add('comment-body');
		commentContentNode.innerHTML = commentBodyInput.value;
		commentNode.appendChild(commentContentNode);
		formContainer.innerHTML = 'Submitted';
		commentContainer.appendChild(commentNode);
	});
});
