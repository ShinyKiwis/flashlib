require 'pry'
class CardsController < ApplicationController
  def modal
    f = helpers.form_with(model: @card)
    render partial: 'cards/modal', locals: {f: f}
  end

  def create 
    deck = Deck.find(params[:deck_id])
    questions = []
    answers = []
    params.each do |param, value|
      if param.starts_with?("question")
        questions << value 
      elsif param.starts_with?("answer")
        answers << value
      end
    end
    0.upto(questions.size-1) do |i|
      card = deck.cards.build(question: questions[i], answer: answers[i])
      card.save
    end
    redirect_to dashboard_deck_path(Fclass.friendly.find(deck.fclass_id))
  end
end
