import 'reflect-metadata';
require('dotenv').config();
import Container, { Service } from 'typedi';
import express from 'express';
import { Request, Response } from 'express';

@Service()
class Application {
  constructor() {
    this.process();
  }

  async process() {
    console.log("Anything is long as I can see your face")
  }
}

export const application = Container.get(Application);
