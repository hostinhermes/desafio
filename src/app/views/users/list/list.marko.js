// Compiled using marko@4.14.11 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/totvs-chamados$1.0.0/src/app/views/users/list/list.marko",
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

  out.w("<html><head><meta http-equiv=\"content-type\" content=\"text/html; charset=utf-8\"> <link href=\"/estatico/css/bootstrap.min.css\" rel=\"stylesheet\" type=\"text/css\" media=\"all\"></head><nav class=\"navbar navbar-inverse\"><div class=\"navbar-header\"><a class=\"navbar-brand\" href=\"#\">Totvs Chamados</a></div></nav><body class=\"bg-light\">");

  component_globals_tag({}, out);

  out.w("<div class=\"container\"><h1> Listagem de Usuários </h1><table id=\"users\" class=\"table\"><tr><th>ID</th><th>Nome</th> <th>Email</th> <th>Função</th> <th>Data de Cadastro</th> <th>Data de Atualização</th> <th>Editar</th><th>Remover</th></tr>");

  var for__20 = 0;

  marko_forEach(data.users, function(user) {
    var keyscope__21 = "[" + ((for__20++) + "]");

    out.w("<tr" +
      marko_attr("id", "user_" + user.id) +
      "><td>" +
      marko_escapeXml(user._id) +
      "</td><td>" +
      marko_escapeXml(user.username) +
      "</td><td>" +
      marko_escapeXml(user.email) +
      "</td><td>" +
      marko_escapeXml(user.role) +
      "</td> <td>" +
      marko_escapeXml(user.createDate.toLocaleDateString()) +
      " </td>");

    if (user.updateDate) {
      out.w("<td>" +
        marko_escapeXml(user.updateDate.toLocaleDateString()) +
        " </td>");
    } else {
      out.w("<td> </td>");
    }

    out.w("<td><a" +
      marko_attr("href", "/users/form/" + user._id) +
      ">Editar</a></td><td><a href=\"#\"" +
      marko_attr("data-ref", "" + user._id) +
      " data-type=\"remocao\">Remover</a></td></tr>");
  });

  out.w("</table><a href=\"/users/form\" class=\"btn btn-primary btn-lg\">Incluir</a><a href=\"/\" class=\"btn btn-secondary btn-lg\">Voltar</a></div><script src=\"/estatico/js/remove-user.js\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "37");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/totvs-chamados$1.0.0/src/app/views/users/list/list.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
