---
home: true
heroImage: ./img/logo.svg
actionText: Get Started →
actionLink: /docs/
features:
- title: Simplicity First
  details: Minimal setup required, just host your template on Github, Gitlab or any static file hosting provider. No CLI, UI required.
- title: Open Source & Self-Hosted
  details: Template manifests are always hosted by authors, Sunstone just retrieves template and doesn't store any information. This allows you to quickly update templates without any middle-man.
- title: Intelligent Defaults
  details: Sunstone can either generate templates based on supplied tags or retrieve latest semver versioned tags from Docker registries. This means that your docs are always showing latest version installation instructions.
footer: Apache 2 Licensed | Copyright © 2019-present Karolis Rusenas
---


## Easy as 1, 2, 3

Modify your deployment manifest with variables that you want to modify:

```yaml
apiVersion: apps/v1
...
    spec:     
      containers:                    
        - image: keelhq/push-workflow-example:{{ .version | latestRegistrySemver "keelhq/push-workflow-example" }}
          imagePullPolicy: Always
          name: pushwf
          ports:
            - containerPort: {{ .port | default 8500 }}
          livenessProbe:
            httpGet:
              path: /
              port: {{ .port | default 8500 }}
            initialDelaySeconds: 10
            timeoutSeconds: 5    
```

> This file is available here: [https://github.com/sunstone-dev/example/blob/master/deployment.yaml](https://github.com/sunstone-dev/example/blob/master/deployment.yaml)

<!-- raw.githubusercontent.com/sunstone-dev/example/master/deployment.yaml -->

Now, check [https://sunstone.dev/raw.githubusercontent.com/sunstone-dev/example/master/deployment.yaml](https://sunstone.dev/raw.githubusercontent.com/sunstone-dev/example/master/deployment.yaml)

Generated file will look like:

```yaml
apiVersion: apps/v1
...
    spec:     
      containers:                    
        - image: keelhq/push-workflow-example:0.11.0-alpha
          imagePullPolicy: Always
          name: pushwf
          ports:
            - containerPort: 8500
          livenessProbe:
            httpGet:
              path: /
              port: 8500
            initialDelaySeconds: 10
            timeoutSeconds: 5    
```

Image tags were retrieved from DockerHub: [https://hub.docker.com/r/keelhq/push-workflow-example/tags](https://hub.docker.com/r/keelhq/push-workflow-example/tags). You can also override any variables when you retrieve the file:

To override version:

- [https://sunstone.dev/raw.githubusercontent.com/sunstone-dev/example/master/deployment.yaml?version=2.5.0](https://sunstone.dev/raw.githubusercontent.com/sunstone-dev/example/master/deployment.yaml?version=2.5.0)

To override port:

- [https://sunstone.dev/raw.githubusercontent.com/sunstone-dev/example/master/deployment.yaml?port=5555](https://sunstone.dev/raw.githubusercontent.com/sunstone-dev/example/master/deployment.yaml?port=5555)

Deploy to Kubernetes latest semver tag:

```
kubectl apply -f https://sunstone.dev/raw.githubusercontent.com/sunstone-dev/example/master/deployment.yaml
```
