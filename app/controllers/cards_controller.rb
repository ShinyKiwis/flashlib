require 'pry'
class CardsController < ApplicationController
  def modal
    f = helpers.form_with(model: @card)
    render partial: 'cards/modal', locals: {f: f}
  end

  def create 
    deck = Deck.find(params[:deck_id])
    new_questions = []
    new_answers = []

    update_questions = []
    update_answers = []

    delete_questions = []
    delete_answers = []
    params.each do |param, value|
      next if value.blank?
      if param.starts_with?("question")
        if param.include?("new")
          new_questions << value 
        elsif param.include?("delete")
          delete_questions << value
        else
          card_id = param.split("-").last
          update_questions << { "#{card_id}": value}
        end
      elsif param.starts_with?("answer")
        if param.include?("new")
          new_answers << value 
        elsif param.include?("delete")
          delete_answers << value
        else
          update_answers << value
        end
      end
    end
    # Create new card
    0.upto(new_questions.size-1) do |i|
      card = deck.cards.build(question: new_questions[i], answer: new_answers[i])
      card.save
    end
    # Update old cards
    0.upto(update_questions.size-1) do |i|
      card_id = update_questions[i].keys[0]
      card = Card.find(card_id.to_s)
      card.update(question: update_questions[i][card_id], answer: update_answers[i])
    end
    # Delete cards
    0.upto(delete_questions.size-1) do |i|
      Card.destroy_by(question: delete_questions[i], answer: delete_answers[i])
    end
    redirect_to dashboard_deck_path(Fclass.friendly.find(deck.fclass_id))
  end
end
