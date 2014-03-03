using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices.WindowsRuntime;
using Windows.Foundation;
using Windows.Foundation.Collections;
using Windows.UI.Popups;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;
using Windows.UI.Xaml.Controls.Primitives;
using Windows.UI.Xaml.Data;
using Windows.UI.Xaml.Input;
using Windows.UI.Xaml.Media;
using Windows.UI.Xaml.Navigation;

// The Blank Page item template is documented at http://go.microsoft.com/fwlink/?LinkId=234238

namespace HybridNetLab
{
    /// <summary>
    /// An empty page that can be used on its own or navigated to within a Frame.
    /// </summary>
    public sealed partial class MainPage : Page
    {
        public MainPage()
        {
            this.InitializeComponent();
        }

        private void Hoverboard_Click(object sender, RoutedEventArgs e)
        {
            MyWebView.InvokeScriptAsync("startdefaultcountdown", null);
        }


        private void Custom_Click(object sender, RoutedEventArgs e)
        {
            int minutes;
            if (!int.TryParse(Minutes.Text, out minutes)) return;
            
            var touchdown = DateTime.Now.AddMinutes(minutes);
            string[] parameters =
            {
                touchdown.Year.ToString(),
                touchdown.Month.ToString(),
                touchdown.Day.ToString(),
                touchdown.Hour.ToString(),
                touchdown.Minute.ToString(),
                Note.Text
            };

            MyWebView.InvokeScript("startcountdown", parameters);
        }

        private void MyWebView_ScriptNotify(object sender, NotifyEventArgs e)
        {
            new MessageDialog(e.Value).ShowAsync();
        }
    }
}
