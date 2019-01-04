// Compiled using marko@4.14.11 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/totvs-chamados$1.0.0/src/app/views/users/form/form.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_attr = marko_helpers.a,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><meta http-equiv=\"content-type\" content=\"text/html; charset=utf-8\"> <link href=\"/estatico/css/bootstrap.min.css\" rel=\"stylesheet\" type=\"text/css\" media=\"all\"></head><body class=\"bg-light\">");

  component_globals_tag({}, out);

  out.w("<nav class=\"navbar navbar-inverse\"><div class=\"navbar-header\"><a class=\"navbar-brand\" href=\"#\">Totvs Chamados</a></div></nav><div class=\"container\"><form action=\"/users\" method=\"post\" class=\"form-horizontal\"><h1 class=\"bd-title\">Cadastro de Usuários</h1>");

  if (data.user._id) {
    out.w("<div><input type=\"hidden\" name=\"_method\" value=\"PUT\"><input type=\"hidden\" id=\"id\" name=\"id\"" +
      marko_attr("value", "" + data.user._id) +
      "></div>");
  }

  out.w("<div class=\"form-group row\"><label for=\"username\">Nome Usuário:</label><input type=\"text\" id=\"username\" name=\"username\"" +
    marko_attr("value", "" + data.user.username) +
    " placeholder=\"Informe o nome de usuário\" class=\"form-control\" maxlength=\"30\"></div><div class=\"form-group row\"><label for=\"password\">Senha:</label><input type=\"password\" id=\"password\" name=\"password\"" +
    marko_attr("value", "" + data.user.password) +
    " placeholder=\"Informe a senha\" class=\"form-control\" maxlength=\"30\"></div><div class=\"form-group row\"><label for=\"email\">Email:</label><input type=\"text\" id=\"email\" name=\"email\"" +
    marko_attr("value", "" + data.user.email) +
    " placeholder=\"Informe o email\" class=\"form-control\" maxlength=\"30\"></div><div class=\"form-group row\"><label for=\"role\">Função:</label><input type=\"text\" id=\"role\" name=\"role\"" +
    marko_attr("value", "" + data.user.role) +
    " placeholder=\"Informe a função\" class=\"form-control\" maxlength=\"30\"></div><div class=\"form-group row\"><input type=\"submit\" value=\"Salvar\" class=\"btn btn-primary btn-lg\"><a href=\"/users\" class=\"btn btn-secondary btn-lg\">Voltar</a></div></form></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "29");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/totvs-chamados$1.0.0/src/app/views/users/form/form.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
