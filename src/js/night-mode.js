 import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', function () {
            function autoNightMode() {
                const currentHour = new Date().getHours();
                const toggleSwitch = document.getElementById('toggle-night-mode');
                const nightMode = localStorage.getItem('nightMode');                

                if (nightMode) {
                    if (nightMode === 'enabled') {
                        document.body.classList.add('night-mode');
                        toggleSwitch.checked = true;                      
                        
                    } else {
                        document.body.classList.remove('night-mode');
                        toggleSwitch.checked = false;                        
                        
                    }
                } else {
                    if (currentHour >= 18 || currentHour < 6) {
                        document.body.classList.add('night-mode');
                        toggleSwitch.checked = true;
                        localStorage.setItem('nightMode', 'enabled');                        
                        iziToast.success({ title: 'Night Mode', message: 'Enabled by time' });
                    } else {
                        document.body.classList.remove('night-mode');
                        toggleSwitch.checked = false;
                        localStorage.setItem('nightMode', 'disabled');                        
                        iziToast.error({ title: 'Night Mode', message: 'Disabled by time' });
                    }
                }
            }

            document.getElementById('toggle-night-mode').addEventListener('change', function () {
                document.body.classList.toggle('night-mode');
                if (document.body.classList.contains('night-mode')) {
                    localStorage.setItem('nightMode', 'enabled');                    
                    iziToast.success({ title: 'Night Mode', message: 'Enabled' });
                } else {
                    localStorage.setItem('nightMode', 'disabled');                    
                    iziToast.error({ title: 'Night Mode', message: 'Disabled' });
                    
                }
            });

            autoNightMode();
        });