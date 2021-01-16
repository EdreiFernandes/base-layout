$(document).ready(function () {
    inicializar();

    listeningTipoCarga();
    listeningOperacao();
});

async function inicializar() {
    $("#tipoCargaSelect").val(1);
    await atualizarOperacao();
    $("#operacaoSelect").val(2);
    await atualizarJanela();
    $("#janelaSelect").val(3);
}

function listeningTipoCarga() {
    $("#tipoCargaSelect").change(function () {
        atualizarOperacao();
    });
}
function listeningOperacao() {
    $("#operacaoSelect").change(function () {
        atualizarJanela();
    });
}

function atualizarOperacao() {
    var operacaoSelect = $("#operacaoSelect");
    var idTipoCarga = $("#tipoCargaSelect").val();
    
    if (idTipoCarga == 0) {
        operacaoSelect.attr("disabled", true).val(0);
        return null;
    }
        
    var tipoCarga = "TipoCarga" + idTipoCarga;
    var listaOperacoes = [
        {
            Id: 1,
            Descricao: tipoCarga + " Operação1"
        },
        {
            Id: 2,
            Descricao: tipoCarga + " Operação2"
        },
        {
            Id: 3,
            Descricao: tipoCarga + " Operação3"
        },
    ];

    return new Promise(resolve => {
    setTimeout(() => {
        operacaoSelect.empty();
        var option = $("<option />").val(0).text("Selecionar");
        operacaoSelect.append(option);

        listaOperacoes.forEach(function (operacao) {
            option = $("<option />").val(operacao.Id).text(operacao.Descricao);
            operacaoSelect.append(option);
        });
        operacaoSelect.attr("disabled", false);
        resolve();
    }, 2000);
  });
}
function atualizarJanela() {
    var janelaSelect = $("#janelaSelect");
    var idTipoCarga = $("#tipoCargaSelect").val();
    var idOperacao = $("#operacaoSelect").val();
    
    if (idTipoCarga == 0 || idOperacao == 0) {
        janelaSelect.attr("disabled", true).val(0);
        return null;
    }
        
    var tipoCarga = "TipoCarga" + idTipoCarga;
    var operacao = " Operação" + idOperacao;
    var listaJanelas = [
        {
            Id: 1,
            Descricao: tipoCarga + operacao + " Janela1"
        },
        {
            Id: 2,
            Descricao: tipoCarga + operacao + " Janela2"
        },
        {
            Id: 3,
            Descricao: tipoCarga + operacao + " Janela3"
        },
    ];


    return new Promise(resolve => {
        setTimeout(() => {
            janelaSelect.empty();
            var option = $("<option />").val(0).text("Selecionar");
            janelaSelect.append(option);

            listaJanelas.forEach(function (janela) {
                option = $("<option />").val(janela.Id).text(janela.Descricao);
                janelaSelect.append(option);
            });
            janelaSelect.attr("disabled", false);
            resolve();
        }, 2000);
    });
}