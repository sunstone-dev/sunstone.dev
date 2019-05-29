---
title: Introduction
lang: en-US
meta:
  - name: description
    content: a short guide how to start templating your resources
  - name: keywords
    content: kubernetes template manifest
---

# Introduction

Sunstone is a simple, open source templating engine built with Go for Kubernetes and beyond.

## Templating

Sunstone, just like [helm](https://helm.sh/), mostly uses [https://masterminds.github.io/sprig/](https://masterminds.github.io/sprig/) templates with several notable additions.

In addition to standard helm/sprig templating options, Sunstone enables retrieving data from remote registries (such as DockerHub, Quay.io, etcd.). To use this functionality, see example template [here](https://github.com/sunstone-dev/example/blob/master/deployment.yaml). 

In this case we are setting default tag to be latest semver tag from `keelhq/push-workflow-example` registry:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata: 
  name: pushwf  
  labels: 
    name: "pushwf"
spec:
  replicas: 1
  revisionHistoryLimit: 5
  selector:
    matchLabels:
      app: pushwf
  template:
    metadata:
      name: pushwf
      labels:
        app: pushwf
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


## Using templates

To use a template, it has to be publicly accessible when using with a public Sunstone instance (sunstone.dev). Remove the `https://` part from your template and supply it as a link to the service:

```bash
curl https://sunstone.dev/raw.githubusercontent.com/sunstone-dev/example/master/deployment.yaml
```

Fortunately, Kubernetes can consume HTTP URLs as well, this allows you to use templates directly:

```bash
kubectl apply -f https://sunstone.dev/raw.githubusercontent.com/sunstone-dev/example/master/deployment.yaml
```

---

## Aliases

Aliases work like a URL shorteners, creating an easy to remember links for any resource. All these aliases are defined in the [https://github.com/sunstone-dev/hub/blob/master/repositories.yaml](https://github.com/sunstone-dev/hub/blob/master/repositories.yaml) file (repository address: [https://github.com/sunstone-dev/hub](https://github.com/sunstone-dev/hub))

### Understanding aliases file

Looking at the alias file, we can see that it contains both the `alias` and `url`: 

```yaml
repositories:
  - alias: keel
    url: https://gist.githubusercontent.com/rusenask/9ed5c505e31a9b9c89b8591b5ca660e3/raw/3ce05d722ee02c5fbdd3d52c3ac5b04a5bba1de2/sunstone_test.yaml
    maintainers:
      - name: Karolis Rusenas
        email: karolis@webhookrelay.com
```

This means, that instead of calling `https://sunstone.dev/gist.githubusercontent.com/rusenask/9ed5c505e31a9b9c89b8591b5ca660e3/raw/3ce05d722ee02c5fbdd3d52c3ac5b04a5bba1de2/sunstone_test.yaml`, user can just call `https://sunstone.dev/keel` to get the same resource.

### Adding your own alias

To add your own alias to this list:

1. Fork [https://github.com/sunstone-dev/hub](https://github.com/sunstone-dev/hub) repository 
2. Add your own alias entry that includes unique `alias` name, `url` and one or more maintainers.
3. Submit a pull request

## Hosting Sunstone on your own infrastructure

**Coming soon...**