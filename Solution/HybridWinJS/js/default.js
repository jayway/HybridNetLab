// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: This application has been newly launched. Initialize
                // your application here.
            } else {
                // TODO: This application has been reactivated from suspension.
                // Restore application state here.
            }
            args.setPromise(WinJS.UI.processAll().done(function () {
                var hoverboardbutton = document.getElementById("hoverboardbutton");
                hoverboardbutton.addEventListener("click", hoverboardbuttonClick, false);

                var startbutton = document.getElementById("startbutton");
                startbutton.addEventListener("click", startbuttonClick, false);

                var startbutton = document.getElementById("webview");
                webview.addEventListener("MSWebViewScriptNotify", webviewScriptNotify);
            })
            );
        }
    };

    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. You might use the
        // WinJS.Application.sessionState object, which is automatically
        // saved and restored across suspension. If you need to complete an
        // asynchronous operation before your application is suspended, call
        // args.setPromise().
    };

    function hoverboardbuttonClick(mouseEvent) {
        var webview = document.getElementById("webview");
        webview.invokeScriptAsync("startdefaultcountdown", null).start();
    }

    function startbuttonClick(mouseEvent) {
        var minutes = parseInt(document.getElementById("minutes").value);
        var today = new Date();
        var millis = today.getTime();
        millis += minutes * 60 * 1000;
        var alarmtime = new Date(millis);
        var note = document.getElementById("note").value;

        var params = new Array(
            alarmtime.getFullYear().toString(),
            alarmtime.getMonth().toString() + 1,
            alarmtime.getDate().toString(),
            alarmtime.getHours().toString(),
            alarmtime.getMinutes().toString(),
            note
            );

        var webview = document.getElementById("webview");
        webview.invokeScriptAsync("startcountdown",
            alarmtime.getFullYear(),
            alarmtime.getMonth() + 1,
            alarmtime.getDate(),
            alarmtime.getHours(),
            alarmtime.getMinutes(),
            note
            ).start();
    }

    function webviewScriptNotify(e) {
        var messageDialog = new Windows.UI.Popups.MessageDialog(e.value);
        messageDialog.showAsync().done();
    }


    app.start();
})();
