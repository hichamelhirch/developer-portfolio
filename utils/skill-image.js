import * as adobeXd from '/public/svg/skills/adobe-xd.svg';
import adobeaudition from '/public/svg/skills/adobeaudition.svg';
import afterEffects from '/public/svg/skills/after-effects.svg';
import angular from '/public/svg/skills/angular.svg';
import aws from '/public/svg/skills/aws.svg';
import azure from '/public/svg/skills/azure.svg';
import blender from '/public/svg/skills/blender.svg';
import bootstrap from '/public/svg/skills/bootstrap.svg';
import bulma from '/public/svg/skills/bulma.svg';
import c from '/public/svg/skills/c.svg';
import canva from '/public/svg/skills/canva.svg';
import capacitorjs from '/public/svg/skills/capacitorjs.svg';
import coffeescript from '/public/svg/skills/coffeescript.svg';
import cplusplus from '/public/svg/skills/cplusplus.svg';
import csharp from '/public/svg/skills/csharp.svg';
import css from '/public/svg/skills/css.svg';
import dart from '/public/svg/skills/dart.svg';
import deno from '/public/svg/skills/deno.svg';
import django from '/public/svg/skills/django.svg';
import docker from '/public/svg/skills/docker.svg';
import fastify from '/public/svg/skills/fastify.svg';
import figma from '/public/svg/skills/figma.svg';
import firebase from '/public/svg/skills/firebase.svg';
import flutter from '/public/svg/skills/flutter.svg';
import gcp from '/public/svg/skills/gcp.svg';
import gimp from '/public/svg/skills/gimp.svg';
import git from '/public/svg/skills/git.svg';
import go from '/public/svg/skills/go.svg';
import graphql from '/public/svg/skills/graphql.svg';
import haxe from '/public/svg/skills/haxe.svg';
import html from '/public/svg/skills/html.svg';
import illustrator from '/public/svg/skills/illustrator.svg';
import ionic from '/public/svg/skills/ionic.svg';
import java from '/public/svg/skills/java.svg';
import javascript from '/public/svg/skills/javascript.svg';
import julia from '/public/svg/skills/julia.svg';
import kotlin from '/public/svg/skills/kotlin.svg';
import lightroom from '/public/svg/skills/lightroom.svg';
import markdown from '/public/svg/skills/markdown.svg';
import materialui from '/public/svg/skills/materialui.svg';
import matlab from '/public/svg/skills/matlab.svg';
import memsql from '/public/svg/skills/memsql.svg';
import microsoftoffice from '/public/svg/skills/microsoftoffice.svg';
import mongoDB from '/public/svg/skills/mongoDB.svg';
import mysql from '/public/svg/skills/mysql.svg';
import nextJS from '/public/svg/skills/nextJS.svg';
import nginx from '/public/svg/skills/nginx.svg';
import numpy from '/public/svg/skills/numpy.svg';
import nuxtJS from '/public/svg/skills/nuxtJS.svg';
import opencv from '/public/svg/skills/opencv.svg';
import photoshop from '/public/svg/skills/photoshop.svg';
import php from '/public/svg/skills/php.svg';
import picsart from '/public/svg/skills/picsart.svg';
import postgresql from '/public/svg/skills/postgresql.svg';
import premierepro from '/public/svg/skills/premierepro.svg';
import python from '/public/svg/skills/python.svg';
import pytorch from '/public/svg/skills/pytorch.svg';
import react from '/public/svg/skills/react.svg';
import ruby from '/public/svg/skills/ruby.svg';
import selenium from '/public/svg/skills/selenium.svg';
import sketch from '/public/svg/skills/sketch.svg';
import strapi from '/public/svg/skills/strapi.svg';
import svelte from '/public/svg/skills/svelte.svg';
import swift from '/public/svg/skills/swift.svg';
import tailwind from '/public/svg/skills/tailwind.svg';
import tensorflow from '/public/svg/skills/tensorflow.svg';
import typescript from '/public/svg/skills/typescript.svg';
import unity from '/public/svg/skills/unity.svg';
import vitejs from '/public/svg/skills/vitejs.svg';
import vue from '/public/svg/skills/vue.svg';
import vuetifyjs from '/public/svg/skills/vuetifyjs.svg';
import webix from '/public/svg/skills/webix.svg';
import wolframalpha from '/public/svg/skills/wolframalpha.svg';

import spring from '/public/svg/skills/spring.svg';
import openid from '/public/svg/skills/openid.svg';
import oauth2 from '/public/svg/skills/oauth2.svg';
import github from '/public/svg/skills/github.svg';
import keycloak from '/public/svg/skills/keycloak.svg';
import kafka from '/public/svg/skills/kafka.svg';
import postman from '/public/svg/skills/postman.svg';
import camunda from '/public/svg/skills/camunda.svg'
export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    // Langages de Programmation
    case 'java':
      return java;
    case 'javascript':
      return javascript;
    case 'typescript':
      return typescript;
    case 'keycloak':
      return keycloak;
    case 'kafka':
      return kafka; 
    case 'camunda':
      return camunda;  
    case 'postman':
      return postman;  
    case 'c':
      return c;
    case 'c++':
      return cplusplus;
    case 'c#':
      return csharp;
    case 'ruby':
      return ruby;
    case 'swift':
      return swift;
    case 'kotlin':
      return kotlin;
    case 'php':
      return php;
    case 'dart':
      return dart;
    case 'julia':
      return julia;

    // Frameworks
    case 'spring':
      return spring;
    case 'oidc':
      return openid;
    case 'oauth2':
      return oauth2;  
    case 'angular':
      return angular;
    case 'django':
      return django;
    case 'react':
      return react;
    case 'vue':
      return vue;
    case 'next js':
      return nextJS;
    case 'nuxt js':
      return nuxtJS;
    case 'svelte':
      return svelte;
    case 'bootstrap':
      return bootstrap;
    case 'tailwind':
      return tailwind;
    case 'materialui':
      return materialui;
    case 'vuetifyjs':
      return vuetifyjs;
    case 'fastify':
      return fastify;
    case 'strapi':
      return strapi;
    case 'firebase':
      return firebase;
    case 'deno':
      return deno;

    // Outils
    case 'html':
      return html;
    case 'css':
      return css;
    case 'docker':
      return docker;
    case 'git':
      return git;
    case 'github':
      return github;
    case 'photoshop':
      return photoshop;
    case 'illustrator':
      return illustrator;
    case 'adobe xd':
      return adobeXd;
    case 'after effects':
      return afterEffects;
    case 'gimp':
      return gimp;
    case 'lightroom':
      return lightroom;
    case 'markdown':
      return markdown;
    case 'microsoft office':
      return microsoftoffice;
    case 'picsart':
      return picsart;
    case 'sketch':
      return sketch;
    case 'unity':
      return unity;
    case 'blender':
      return blender;
    case 'webix':
      return webix;
    case 'wolframalpha':
      return wolframalpha;
    case 'canva':
      return canva;
    case 'nginx':
      return nginx;
    case 'numpy':
      return numpy;
    case 'opencv':
      return opencv;
    case 'pytorch':
      return pytorch;
    case 'selenium':
      return selenium;
    case 'tensorflow':
      return tensorflow;
    case 'graphq':
      return graphql;
    case 'coffeescript':
      return coffeescript;
    case 'capacitorjs':
      return capacitorjs;
    case 'memsql':
      return memsql;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'postgresql':
      return postgresql;
    default:
      return null;  // Or a default image if needed
  }
}
