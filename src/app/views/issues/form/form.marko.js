// Compiled using marko@4.14.11 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/totvs-chamados$1.0.0/src/app/views/issues/form/form.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_attr = marko_helpers.a,
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><meta http-equiv=\"content-type\" content=\"text/html; charset=utf-8\"> <link href=\"/estatico/css/bootstrap.min.css\" rel=\"stylesheet\" type=\"text/css\" media=\"all\"></head><body class=\"bg-light\">");

  component_globals_tag({}, out);

  out.w("<nav class=\"navbar navbar-inverse\"><div class=\"navbar-header\"><a class=\"navbar-brand\" href=\"#\">Totvs Chamados</a></div></nav><div class=\"container\"><form action=\"/issues\" method=\"post\" class=\"form-horizontal\"><h1 class=\"bd-title\">Cadastro de Chamados</h1>");

  if (data.issue._id) {
    out.w("<div><input type=\"hidden\" name=\"_method\" value=\"PUT\"><input type=\"hidden\" id=\"id\" name=\"id\"" +
      marko_attr("value", "" + data.issue._id) +
      "></div>");
  }

  out.w("<div class=\"form-group row\"><label for=\"nome\">Titulo:</label><input type=\"text\" id=\"title\" name=\"title\"" +
    marko_attr("value", "" + data.issue.title) +
    " placeholder=\"Informe o título\" class=\"form-control\" maxlength=\"30\"></div><div class=\"form-group row\"><label for=\"description\">Descrição:</label><input type=\"text\" id=\"description\" name=\"description\"" +
    marko_attr("value", "" + data.issue.description) +
    " placeholder=\"Informe a descrição\" class=\"form-control\" maxlength=\"30\"></div><div class=\"form-group row\"><label for=\"role\">Solicitante:</label><select class=\"form-control\" name=\"userReporter\" id=\"userReporter\">");

  var for__23 = 0;

  marko_forEach(data.users, function(user) {
    var keyscope__24 = "[" + ((for__23++) + "]");

    out.w("<option" +
      marko_attr("selected", data.issue.userReporter === user.username) +
      "> " +
      marko_escapeXml(user.username) +
      " </option>");
  });

  out.w("</select></div><div class=\"form-group row\"><label for=\"userAssign\">Atribuir para:</label><select class=\"form-control\" name=\"userAssign\" id=\"userAssign\">");

  var for__29 = 0;

  marko_forEach(data.users, function(user) {
    var keyscope__30 = "[" + ((for__29++) + "]");

    out.w("<option" +
      marko_attr("selected", data.issue.userAssign === user.username) +
      "> " +
      marko_escapeXml(user.username) +
      " </option>");
  });

  out.w("</select></div><div class=\"form-group row\"><label for=\"status\">Status</label><select class=\"form-control\" id=\"status\" name=\"status\"> <option" +
    marko_attr("selected", data.issue.status === "Aberto") +
    ">Aberto</option><option" +
    marko_attr("selected", data.issue.status === "Atribuido") +
    ">Atribuido</option><option" +
    marko_attr("selected", data.issue.status === "Encerrado") +
    ">Encerrado</option> </select></div><div class=\"form-group row\"><input type=\"submit\" value=\"Salvar\" class=\"btn btn-primary btn-lg\"><a href=\"/issues\" class=\"btn btn-secondary btn-lg\">Voltar</a></div></form></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "41");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/totvs-chamados$1.0.0/src/app/views/issues/form/form.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
