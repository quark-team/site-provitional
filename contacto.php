<section id="contacto" class="container-fluid">
    <div class="container text-center">
        <div class="row">
            <div class="col-xs-12 titles-modules">
                <h1>Comunícate con nosotros</h1>
            </div>
        </div>
        <form action="ajax/enviaCorreo.php" method="POST" class="form-contact">
            <div class="row">
                <div class="col-xs-12 col-sm-6">
                    <div class="form-group">
                        <div class="input-group">
                            <span class="input-group-addon" style="background:#F07D1B">
                                <i class="icon-user" style="color:#FFF"></i>
                            </span>
                            <input type="text" class="form-control" placeholder="Nombre y Apellido" id="txtNombre" name="txtNombre" />
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group">
                            <span class="input-group-addon" style="background:#F07D1B">
                                <i class="icon-old-phone" style="color:#FFF"></i>
                            </span>
                            <input type="tel" class="form-control" placeholder="Teléfono de contacto" id="txtTel" name="txtTel" />
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group">
                            <span class="input-group-addon" style="background:#F07D1B">
                                <i class="icon-mail" style="color:#FFF"></i>
                            </span>
                            <input type="email" class="form-control" placeholder="Correo electrónico" id="txtMail" name="txtMail" />
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group">
                            <span class="input-group-addon" style="background:#F07D1B">
                                <i class="icon-location" style="color:#FFF"></i>
                            </span>
                            <select class="form-control" id="cboCanal" name="cboCanal">
                                <option value="">¿Cómo nos conseguiste?</option>
                                <optgroup label="Redes Sociales">
                                    <option value="Facebook">Facebook</option>
                                    <option value="Twitter">Twitter</option>
                                    <option value="Google +">Google +</option>
                                    <option value="Instagram">Instagram</option>
                                </optgroup>
                                <optgroup label="Publicidad">
                                    <option value="Prensa">Prensa</option>
                                    <option value="Radio">Radio</option>
                                    <option value="Internet">Internet</option>
                                </optgroup> 
                                <option value="Recomendo por un amigo">Recomendo por un amigo</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group">
                            <span class="input-group-addon" style="background:#F07D1B">
                                <i class="icon-chat" style="color:#FFF"></i>
                            </span>
                            <select class="form-control" id="cboMotivo" name="cboMotivo">
                                <option value="">Motivo de contacto</option>
                                <option value="Registro/ Ingreso de usuario">Registro / Ingreso de usuario</option>
                                <option value="Compras y pagos">Compras y pagos</option>
                                <option value="Reporte de falla">Reporte de falla</option>
                                <option value="Sugerencias y comentarios">Sugerencias y comentarios</option>
                                <option value="Consultas y otros">Consultas y otros</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6">
                    <div class="form-group">
                        <textarea class="form-control" name="textMsj" id="textMsj" cols="20" rows="5" placeholder="Escribe tu mensaje aquí"></textarea>
                    </div>
                    <div class="form-group">
                        <div id="recaptcha2" class="g-recaptcha" data-sitekey="6Lc4HwcTAAAAAOTLSd6l57ubwzSM_Szskun-BoDA"  style="transform:scale(0.77);-webkit-transform:scale(0.77);transform-origin:0 0;-webkit-transform-origin:0 0;">
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6">
                    <div class="alert alert-info " id="loading-mail" style="display: none">
                        <img src="img/load.gif"> Envíando Mensaje
                    </div>
                    <div class="alert " id="reponse-mail" style="display: none"></div>
                </div>
                <div class="col-xs-12">
                    <div class="btn-all-center">
                        <button type="button" class="btn btn-green" id="btn-mail">Enviar Mensaje</button>
                    </div>
                </div>
            </div> 
        </form>
    </div>
</section>