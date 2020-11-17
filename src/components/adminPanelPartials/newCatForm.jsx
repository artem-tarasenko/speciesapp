

function NewCategoryForm() {
	return <form>
	<div class="form-group">
		<label for="categoryTitle">Заголовок категории</label>
		<input type="text" class="form-control" id="categoryTitle" placeholder="Заголовок..." />
	</div>
	<div class="form-group">
		<label for="categorySubtitle">Подзаголовок категории</label>
		<input type="text" class="form-control" id="categorySubtitle" placeholder="Латынь..." />
	</div>
	<div class="form-group">
		<label for="categoryParent">Выберете родителя</label>
		<select class="form-control" id="categoryParent">
			<option>Категория 1</option>
			<option>Категория 1.2</option>
			<option>Категория 2</option>
			<option>Категория 2.1</option>
			<option>Категория 2.2</option>
		</select>
	</div>
</form>
}

export default NewCategoryForm;
