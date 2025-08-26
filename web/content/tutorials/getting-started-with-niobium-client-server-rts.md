---
title: Getting Started with the Niobium Client/Server RTS
---

# Getting Started with the Niobium Client/Server RTS

This tutorial will introduce you to the Niobium command-line interface (CLI)
client and the Niobium server runtime system (RTS). These tools make it
extremely simple and easy to experiment with FHE (fully-homomorphic
encryption) programs.

## Introduction

In this tutorial, you will:

* Set up your environment for Homebrew and Docker.
* Clone a GitHub repository of FHE tutorial programs.
* Learn about the basic structure and commands of the Niobium client/server
  tools.
* Run an example FHE program and review the results.

After following this tutorial, you will be ready to start experimenting with
your own FHE programs, or you can learn more about the advanced options
available from the Niobium client/server tools.

## Prerequisites

To follow this tutorial, you need to be familiar with the following:

* The GitHub code collaboration service.
* The Homebrew package manager for macOS and Linux.
* The Docker container runtime system.

### GitHub

[GitHub](https://github.com) is a cloud-based platform for software
develop-ment, built on top of the Git version control system, that allows
developers to store, share, and manage code in repositories.

You will use GitHub to obtain the source code repository for the FHE
tutorials, so you will need an account on GitHub to perform this tutorial.

Visit the GitHub [Getting Started
documentation](https://docs.github.com/en/get-started) to learn more.

In addition to a GitHub account, you will also need the `git` program
installed locally. GitHub provides a [great resource that will help you
install git](https://github.com/git-guides/install-git) if you don't already
have it.

### Homebrew

[Homebrew](https://brew.sh) is a popular and easy-to-use package manager for
macOS and Linux.

You will use Homebrew to install the Niobium client.

To get started with Homebrew on your system, read the [Install
Homebrew](https://brew.sh#install) section at the Homebrew website.

### Docker

[Docker](https://www.docker.com) Docker helps developers build, share, run,
and verify applications anywhere — without tedious environment configuration
or management.

You will use Docker on your system to run the Niobium Server RTS. This is the
component that the Niobium client communicates with to compile and run the FHE
program. You will not need to directly interact with the Docker system except
to start it so that the Niobium client can interact with it.

### Wrapping Up

These three components&mdash;GitHub, Homebrew, and Docker&mdash; will provide
all the capabilities needed to run the Niobium client locally and experiment
with FHE programs.

## Step 1: Installing the Niobium Client

With Homebrew installed, you're now ready to install the Niobium client on
your system. To run the install, use the following commands (without the `$`
character):

```
$ brew tap NiobiumInc/tools
$ brew install --cask niobium-client
```

Once the installation has completed, you should be able to run the Niobium
client. To check this, run the following command:

```
$ niobium --version
```

Note that on some systems, you may need to open a new terminal window after
you run the installation command, as attempting to run the Niobium client in
the same terminal window may fail to find the just-installed program.

To see the various sub-commands available, run the following command:

```
$ niobium --help
```

To see the help for a specific sub-command, for example, the `run` sub-command,
run the following:

```
$ niobium run --help
```

With the Niobium client installed and running on your local system, you're
ready to get some FHE programs to experiment with.

## Step 2: Cloning the FHE Tutorials Repository

To clone the FHE tutorial repository, run the following command:

```
$ git clone https://github.com/NiobiumInc/fhe-tutorials.git
```

Once you have cloned the repository, change your working directory to the root
of the repository so that the commands below will work as written:

```
$ cd fhe-tutorials
```

With the repository now available on your local machine, you're ready to run
an FHE program using the Niobium client!

## Step 3: Running an FHE Program with Niobium Client

The FHE tutorials repository has a subdirectory named `basic`. Inside are
several FHE programs that use simple arithmetic operations. Each one is as
simple as possible, and are real FHE applications.

However, they are not realistic FHE applications because they combine both the
FHE client code and the FHE server code. In FHE, the client is trusted, and
can see both the plaintext data and encrypt and decrypt it. The FHE server is
not trusted, and should never see the plaintext data.

For now, this is a small detail, but keep it in mind.

Let's run the FHE program. Use the following command:

```
$ niobium run basic/square
```

The result that you see from this command will include information about
compiling the code, running the resulting program which will produce an
instruction sequence for an FHE accelerator, and the result of evaluating the
instruction sequence.

The output shown from running these examples should be considered
experimental, but the general workflow is intended to make it as simple as
possible to investigate FHE application designs.

## Step 4: Learning More

This brief tutorial has given you a taste of FHE and the tools you can use to
continue to explore this fascinating field.

Here are some suggestions for what you could do now with what you've learned:

* Learn more about the Niobium client tool by review
  [articles](https://developer.niobiummicrosystems.com/articles/) and the
  [reference](https://developer.niobiummicrosystems.com/reference/).
* Experiment with writing your own FHE program.
* Watch the recorded talks from the annual [IACR](https://iacr.org) [Crypto
  conference](https://www.youtube.com/@TheIACR).
* Reach out with questions or comments by opening an issue on the [Niobium
  SDK GitHub](https://github.com/NiobiumInc/niobium-sdk).

## Getting Help

While we've made every effort to provide accurate information in this tutorial
and to fix any known issues in the Niobium client/server RTS, if you do
encounter problems, please [open an
issue](https://github.com/NiobiumInc/niobium-sdk/issues).

## Conclusion

In this brief tutorial, you've set up your environment, installed the Niobium
client CLI, run an example FHE program.

The whole FHE field is rapidly advancing with academic research, various
commercial efforts, and a growing community of developers and practitioners.
Please join in to make this amazing capability a common part of protecting
privacy in our everyday lives.
