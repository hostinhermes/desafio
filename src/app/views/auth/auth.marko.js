// Compiled using marko@4.14.11 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/totvs-chamados$1.0.0/src/app/views/auth/auth.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_escapeXml = marko_helpers.x,
    marko_attr = marko_helpers.a,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"en\"><head><meta http-equiv=\"content-type\" content=\"text/html; charset=utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><title>Totvs Chamados - Autorização de APP</title><link href=\"/estatico/css/bootstrap.min.css\" rel=\"stylesheet\" type=\"text/css\" media=\"all\"></head><body class=\"bg-light\">");

  component_globals_tag({}, out);

  out.w("<nav class=\"navbar navbar-inverse\"><div class=\"navbar-header\"><a class=\"navbar-brand\" href=\"#\">Totvs Chamados</a></div></nav><div class=\"container\"><div class=\"col-md-3 col-sm-6 hero-feature \"><div class=\"thumbnail\"><div class=\"caption\"><p>Olá " +
    marko_escapeXml(data.user.username) +
    ", </p><p><b>" +
    marko_escapeXml(data.client.name) +
    "</b> está requisitando <b>acesso total</b> a sua conta.</p><p>Você autoriza?</p><form action=\"/api/oauth2/authorize\" method=\"post\" class=\"form-horizontal\"><input name=\"transaction_id\" type=\"hidden\"" +
    marko_attr("value", "" + data.transactionID) +
    "><div><input type=\"submit\" value=\"Permitir\" id=\"allow\" class=\"btn btn-primary btn-lg\"><input type=\"submit\" value=\"Negar\" name=\"cancel\" id=\"deny\" class=\"btn btn-secondary btn-lg\"></div></form></div></div> </div></div> ");

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
    id: "/totvs-chamados$1.0.0/src/app/views/auth/auth.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
