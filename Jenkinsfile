pipeline { 

    agent any 

    stages { 

        stage('Verify Application Files') { 

            steps { 

                echo 'Verifying project files...' 

 

                bat 'if exist index.html (echo index.html Found) else (exit 1)' 

                bat 'if exist style.css (echo style.css Found) else (exit 1)' 

                bat 'if exist script.js (echo script.js Found) else (exit 1)' 

            } 

        } 

        stage('Create Build Artifact') { 

            steps { 

                echo 'Creating ZIP file...' 

     bat 'powershell Compress-Archive -Path * -DestinationPath StudentManagementSystem.zip -Force' 

            } 

        } 

        stage('Archive Build') { 

            steps { 

                archiveArtifacts artifacts: 'StudentManagementSystem.zip', fingerprint: true 

            } 

        } 
             stage('Checkout Source Code') {
            steps {
                echo 'Downloading latest application code from GitHub...'
                git branch: 'main',
                url: 'https://github.com/sayleenarkhede/Jenkins-CI-Demo.git'
            }
        }

    } 

 

    post { 

        success { 

            echo 'Application Build Successful.' 

        } 

        failure { 

            echo 'Application Build Failed.' 

        } 

    } 

} 
