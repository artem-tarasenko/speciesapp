import React from "react";
import AdminHeader from "./adminHeader";
import Footer from "./footer";

function Body() {
	return (
		<main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
			<AdminHeader />

			<h2>Добавление новой статьи</h2>
			<div class="container-fluid">
				<div class="row">
					<div class="col-md-10 order-md-1">
			          <form class="">

			            <div class="mb-3">
		            		<label for="newTitle">Заголовок</label>
			                <input type="text" class="form-control" id="newTitle" placeholder="Заголовок" required />
			                <div class="invalid-feedback">Сообщение об ошибке.</div>
			            </div>

			            <div class="mb-3">
			              <label for="subtitle">Подзаголовок <span class="text-muted">(Латынь)</span></label>
			              <input type="text" class="form-control" id="subtitle" placeholder="Подзаголовок" />
			              <div class="invalid-feedback">Сообщение об ошибке.</div>
			            </div>

			            <div class="mb-3">
			              <label for="text">Текст статьи</label>
			              <textarea rows="10" type="text" class="form-control" id="text" placeholder="Контент..." required />
			              <div class="invalid-feedback">Сообщение об ошибке.</div>
			            </div>

			            <div class="mb-3">
							<div class="form-group box-shadow border rounded">
								<p>Галерея</p>
								<div class="col-md-3">
									<label for="galleryUploadForm">Выберете файл</label>
									<input type="file" class="form-control-file" id="galleryUploadForm" />
								</div>
								<div class="col-md-9 bg-light">
									<p>Drag and Drop area</p>
								</div>
							</div>
			            </div>
						<hr />
			            <div class="row">
				            	<button class="btn btn-success my-2" type="submit">Сохранить</button>
								<button class="btn btn-dark my-2" type="submit">Отмена</button>
			            </div>

			          </form>
			        </div>
					<div class="col-md-2 order-md-1 mb-2">
						<h4 class="d-flex justify-content-between align-items-center mb-3">
							Параметры
						</h4>
						<ul class="list-group mb-3">
							<li class="list-group-item d-flex justify-content-between lh-condensed">
								<div class="form-check">
								  <input class="form-check-input" type="checkbox" value="" id="active" />
								  <label class="form-check-label" for="active">
								    Активна
								  </label>
								</div>
							</li>
							<li class="list-group-item d-flex justify-content-between lh-condensed">
								<div class="form-check">
								  <input class="form-check-input" type="checkbox" value="" id="active" />
								  <label class="form-check-label" for="active">
									Галерея
								  </label>
								</div>
							</li>
							<li class="list-group-item d-flex justify-content-between lh-condensed">
								<div class="form-group align-items-left">
							      <label for="category">Раздел</label>
							      <select id="category" class="form-control">
							        <option selected>Выбирете раздел...</option>
							        <option value="1">...1</option>
									<option value="2">...2</option>
							      </select>
								  <button type="button" class="btn btn-secondary">Выбрать</button>
								  <p>Тут надо popup с древом и имя категории потом на кнопку</p>
							    </div>
							</li>
							<li class="list-group-item d-flex justify-content-between bg-light">
							<div class="form-group align-items-left">
							  <label for="template">Шаблон</label>
							  <select id="template" class="form-control">
								<option value="1" selected>Статья вид 1</option>
								<option value="2">Статья вид 2</option>
								<option value="3">Статья вид 3</option>
							  </select>
							  <span class="text-success">КАРТИНКА</span>
							</div>

							</li>
						</ul>
					</div>
				</div>
			</div>
		</main>
	)
}

export default Body;
