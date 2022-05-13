window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#n" );
	const list_el = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;
		const Tasks = document.createElement('div');
		Tasks.classList.add('task');  

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		Tasks.appendChild(task_content_el);

		const Tasks_input = document.createElement('input');
		Tasks_input.classList.add('text');
		Tasks_input.type = 'text';
		Tasks_input.value = task;
		Tasks_input.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(Tasks_input);

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

		task_actions_el.appendChild(task_delete_el);
		Tasks.appendChild(task_actions_el);
		list_el.appendChild(Tasks);
		input.value = '';
		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(Tasks);
		});
	});


});








