const loader = (className, classClick) => {
	$(classClick).on('click', (event) => {
		event.preventDefault();
		event.stopPropagation();
		const el = event.target;
		if ($(el).closest('.btn.btn-success').length > 0) {
			const loaderElem = $('<span></span>').addClass(className);
			// Создаем обертку для лоадера
			const wrapper = $('<div></div>').addClass('wrapperLoader').append(loaderElem);

			// Добавляем обертку в body
			$('body').append(wrapper);

			// Удаляем все обработчики событий на кнопке
			$(classClick).off('click');
		}
	});
};

loader('loader', '.auction-list');