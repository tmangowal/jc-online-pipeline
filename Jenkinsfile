pipeline {
  agent any

  triggers {
    githubPush()
  }

  stages {
    stage('Build') {
      steps {
        sh 'docker build -t tmangowal/jc-online-pipeline .'
      }
    }
    stage('Deliver') {
      steps {
        sh 'docker run --name jc-online-container -p 2021:2021 tmangowal/jc-online-pipeline &'
      }
    }
  }
}