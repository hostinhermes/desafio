// Compiled using marko@4.14.11 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/totvs-chamados$1.0.0/src/app/views/issues/list/list.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_attr = marko_helpers.a,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><meta http-equiv=\"content-type\" content=\"text/html; charset=utf-8\"> <link href=\"/estatico/css/bootstrap.min.css\" rel=\"stylesheet\" type=\"text/css\" media=\"all\"></head><body class=\"bg-light\">");

  component_globals_tag({}, out);

  out.w("<nav class=\"navbar navbar-inverse\"><div class=\"navbar-header\"><a class=\"navbar-brand\" href=\"#\">Totvs Chamados</a></div></nav><div class=\"container\"><h1> Listagem de Chamados </h1><table id=\"issues\" class=\"table\"><tr><th>ID</th><th>Titulo</th> <th>Descrição</th> <th>Solicitante</th> <th>Atribuido</th> <th>Status</th> <th>Editar</th><th>Remover</th></tr>");

  var for__20 = 0;

  marko_forEach(data.issues, function(issue) {
    var keyscope__21 = "[" + ((for__20++) + "]");

    out.w("<tr" +
      marko_attr("id", "issue_" + issue.id) +
      "><td>" +
      marko_escapeXml(issue._id) +
      "</td><td>" +
      marko_escapeXml(issue.title) +
      "</td><td>" +
      marko_escapeXml(issue.description) +
      "</td><td>" +
      marko_escapeXml(issue.userReporter) +
      "</td> <td>" +
      marko_escapeXml(issue.userAssign) +
      "</td> <td>" +
      marko_escapeXml(issue.status) +
      "</td> <td><a" +
      marko_attr("href", "/issues/form/" + issue._id) +
      ">Editar</a></td><td><a href=\"#\"" +
      marko_attr("data-ref", "" + issue._id) +
      " data-type=\"remocao\">Remover</a></td></tr>");
  });

  out.w("</table><a href=\"/issues/form\" class=\"btn btn-primary btn-lg\">Incluir</a><a href=\"/\" class=\"btn btn-secondary btn-lg\">Voltar</a></div><script src=\"/estatico/js/remove-issue.js\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "36");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/totvs-chamados$1.0.0/src/app/views/issues/list/list.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
