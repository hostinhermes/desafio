// Compiled using marko@4.14.11 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/totvs-chamados$1.0.0/src/app/views/index.marko",
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

  out.w("<!DOCTYPE html><html lang=\"en\"><head><meta http-equiv=\"content-type\" content=\"text/html; charset=utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><title>Totvs Chamados</title> <link href=\"/estatico/css/bootstrap.min.css\" rel=\"stylesheet\" type=\"text/css\" media=\"all\"><link href=\"/estatico/css/estilos.css\" rel=\"stylesheet\" type=\"text/css\" media=\"all\"></head><body>");

  component_globals_tag({}, out);

  out.w("<nav class=\"navbar navbar-inverse\"><div class=\"navbar-header\"><a class=\"navbar-brand\" href=\"#\">Totvs Chamados</a></div></nav><div class=\"container page-wrap\"><div class=\"col-md-3 col-sm-6 hero-feature text-center\"><div class=\"thumbnail\"><div class=\"caption\"><h3>Cadastro de Usuários</h3><p><a href=\"/users\" class=\"btn btn-primary\">Acessar</a></p></div></div></div><div class=\"col-md-3 col-sm-6 hero-feature text-center\"><div class=\"thumbnail\"><div class=\"caption\"><h3>Cadastro de Chamados</h3><p><a href=\"/issues\" class=\"btn btn-primary\">Acessar</a></p></div></div> </div> </div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "24");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/totvs-chamados$1.0.0/src/app/views/index.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
