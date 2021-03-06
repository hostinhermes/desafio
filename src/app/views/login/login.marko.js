// Compiled using marko@4.14.11 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/totvs-chamados$1.0.0/src/app/views/login/login.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"en\"><head><meta http-equiv=\"content-type\" content=\"text/html; charset=utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><title>Totvs Chamados - Login</title><link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css\"> <link href=\"/estatico/css/login.css\" rel=\"stylesheet\"></head><body>");

  component_globals_tag({}, out);

  out.w("<div class=\"container\"><form class=\"form-signin\" action=\"/login\" method=\"post\"><h2 class=\"form-signin-heading\">Totvs Chamados - Login</h2><label for=\"inputUser\" class=\"sr-only\">Usuário</label><input type=\"text\" id=\"username\" name=\"username\" class=\"form-control\" placeholder=\"Usuário\" required autofocus><label for=\"inputPassword\" class=\"sr-only\">Senha</label><input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Senha\" required><button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Login</button></form></div> ");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "16");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/totvs-chamados$1.0.0/src/app/views/login/login.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
