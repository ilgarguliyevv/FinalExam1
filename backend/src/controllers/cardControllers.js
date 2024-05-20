const express = require("express")
const Card = require("../models/cardModels.js")

const getAllCard = async (req, res) => {
    try {
        const allCard = await Card.find({})
        res.send(allCard)
    } catch (error) {
        res.send(error)
    }
}

const deleteCard = async (req, res) => {
    try {
        const { id } = req.params
        const deletedCard = await Card.findOneAndDelete({ _id: id })
        res.send(deletedCard)
    } catch (error) {
        res.send(error)
    }
}

const getCardById = async (req, res) => {
    try {
        const { id } = req.params
        const card = await Card.findById({ _id: id })
        res.send(card)
    } catch (error) {
        res.send(error)
    }
}

const postCard = async (req, res) => {
    try {
        const obj = req.body
        console.log(obj);
        const newCard = new Card(obj)
        newCard.save()
        res.status(200).send(newCard)
    } catch (error) {
        res.send(error)
    }
}

const patchCardById = async (req, res) => {
    try {
        const { id } = req.params
        console.log(id);
        const editedCard = await Card.findOneAndUptade({ _id: id })
        res.send(editedCard)
    } catch (error) {
        res.send(error)
    }
}
module.exports = { getAllCard, deleteCard, getCardById, postCard, patchCardById }