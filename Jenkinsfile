pipeline {
   agent any
   stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/branchname']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: 'ashokgadeking', url: 'https://github.com/ashokgadeking/consumer-api.git']]])
                sh "ls -lart ./*"
            }
        }     
    }
}