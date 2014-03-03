HybridNetLab
============

Lab exploring the Windows 8.1 WebView in XAML and WinJS

Requirements
------------
* Windows 8.1
* Visual Studio 2013

Part I of the lab can be run on a WebView on Windows 8.0 or a WebBrowser Control in Windows Phone 7/8 but then you have much more peculiarities to explore.


Part I: WebView in XAML
=======================

Instructions
------------
1. Create an empty C# Windows Store App (8.1) solution
2. Add all files from Shared\CountDown to the project with the structure intact
3. Add a WebView control to the Main Page and set its source to MainPage.html
4. Trigger the startdefaultcountdown() javascript function from C# code
5. Add some controls that triggers startcountdown()
6. Add a "call" back from javascript to C# code when the countdown time is up
7. Play around with some other parts of the WebView control, find out what's possible and where you must be careful
   - add controls in front of/behind the WebView and test different opacities on the controls
   - add RenderTransforms and Projections to the WebView control
   - add animations to the WebView control
   - test NavigateToString() and/or NavigateToStream() 
   - test the 8.0 WebView or the Windows Phone WebBrowser Control
   - try out some of the old and new events in 8.1
   - try something other from the "What’s new in WebView" link below
   - call the js eval from C# to e.g. read or change the DOM tree
   - add several WebViews to a Hub control
   
links
-----
- [Ten Things You Need to Know About WebView](http://blogs.msdn.com/b/wsdevsol/archive/2012/10/18/nine-things-you-need-to-know-about-webview.aspx)
- [What’s new in WebView in Windows 8.1](http://blogs.windows.com/windows/b/appbuilder/archive/2013/07/17/what-s-new-in-webview-in-windows-8-1.aspx)
- [Accessing the DOM in a Windows 8 WebView](http://sertacozercan.com/2013/06/accessing-the-dom-in-a-windows-8-webview/)
- [Samples of Countdown Timers](http://www.rmkwebdesign.com/Countdown_Timers/)

   
Part II: WebView in WinJS
=========================
1. Create an empty Javascript Windows Store App (8.1) solution
2. Add all files from Shared\CountDown to the project with the structure intact
3. Add an x-ms-webview control to default.html and set its source to MainPage.html
4. Add a control to trigger startdefaultcountdown()
5. Add some controls that triggers startcountdown()
6. Add a "call" back from touchdown()
7. Play around and try WinJS out
   - test to use an iframe and not an x-ms-webview
   - use some OS-specific stuff like MessageDialog or share contract
   - try some styling in blend or other tools
   
 
links
-----
- [What’s new in WebView in Windows 8.1](http://blogs.windows.com/windows/b/appbuilder/archive/2013/07/17/what-s-new-in-webview-in-windows-8-1.aspx)
- [w3schools](http://www.w3schools.com/html/html_lists.asp)
- [Quickstart: adding HTML controls and handling events](http://msdn.microsoft.com/en-us/library/windows/apps/hh465402.aspx)
- [MSWebViewScriptNotify etc](http://blogs.windows.com/windows/b/appbuilder/archive/2013/10/01/blending-apps-and-sites-with-the-html-x-ms-webview.aspx)
- [Free ebook: Programming Windows Store Apps with HTML, CSS, and JavaScript, Second Edition ](http://blogs.msdn.com/b/microsoft_press/archive/2013/10/29/free-ebook-programming-windows-store-apps-with-html-css-and-javascript-second-edition-second-preview.aspx)

