#!/usr/bin/env node
import readLineSync from 'readline-sync'
import brainEven from '../src/even-game.js'

console.log('Welcome to the Brain Game!')
const name = readLineSync.question('May I have your name? ')
brainEven(name)
