import React from "react";

function Body() {
	return (
		<div className="col-xl-9 m-auto d-flex">
			<div className="row mt-5 container-fluid">
				<div className="col">
					<h4 className="d-flex justify-content-between align-items-center mb-3">
						Параметры
					</h4>
					<ul className="list-group mb-3">
						<li className="list-group-item d-flex justify-content-between lh-condensed">
							<div className="form-check">
								<input className="form-check-input" type="checkbox" value="" id="active" />
								<label className="form-check-label" for="active">
									Активна
								</label>
							</div>
						</li>
						<li className="list-group-item d-flex justify-content-between lh-condensed">
							<div className="form-check">
								<input className="form-check-input" type="checkbox" value="" id="active" />
								<label className="form-check-label" for="active">
									Галерея
								</label>
							</div>
						</li>
						<li className="list-group-item d-flex justify-content-between lh-condensed">
							<div className="form-group align-items-left">
								<label for="category">Раздел</label>
								<select id="category" className="form-control">
									<option selected>Выбирете раздел...</option>
									<option value="1">...1</option>
									<option value="2">...2</option>
								</select>
								<button type="button" className="btn btn-secondary">Выбрать</button>
								<p>Тут надо popup с древом и имя категории потом на кнопку</p>
							</div>
						</li>
						<li className="list-group-item d-flex justify-content-between bg-light">
							<div className="form-group align-items-left">
								<label for="template">Шаблон</label>
								<select id="template" className="form-control">
									<option value="1" selected>Статья вид 1</option>
									<option value="2">Статья вид 2</option>
									<option value="3">Статья вид 3</option>
								</select>
								<span className="text-success">КАРТИНКА</span>
							</div>
						</li>
					</ul>
				</div>
				<main role="main" className="col-xl-9">
					<div className="container-fluid">
						<h2>Добавление новой статьи</h2>
						<form className="">

							<div className="mb-3">
								<label for="newTitle">Заголовок</label>
								<input type="text" className="form-control" id="newTitle" placeholder="Заголовок" required />
								<div className="invalid-feedback">Сообщение об ошибке.</div>
							</div>

							<div className="mb-3">
								<label for="subtitle">Подзаголовок <span className="text-muted">(Латынь)</span></label>
								<input type="text" className="form-control" id="subtitle" placeholder="Подзаголовок" />
								<div className="invalid-feedback">Сообщение об ошибке.</div>
							</div>

							<div className="mb-3">
								<label for="text">Текст статьи</label>
								<textarea rows="10" type="text" className="form-control" id="text" placeholder="Контент..." required />
								<div className="invalid-feedback">Сообщение об ошибке.</div>
							</div>

							<div className="mb-3">
								<div className="form-group box-shadow border rounded">
									<p>Галерея</p>
									<div className="col-md-3">
										<label for="galleryUploadForm">Выберете файл</label>
										<input type="file" className="form-control-file" id="galleryUploadForm" />
									</div>
									<div className="col-md-9 bg-light">
										<p>Drag and Drop area</p>
									</div>
								</div>
							</div>
							<hr />
							<div className="row">
								<button className="btn btn-success my-2" type="submit">Сохранить</button>
								<button className="btn btn-dark my-2" type="submit">Отмена</button>
							</div>

						</form>
					</div>
				</main>
			</div>
		</div>
	)
}

export default Body;
