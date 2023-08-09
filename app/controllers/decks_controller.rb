require 'pry'
class DecksController < ApplicationController
  def index
    @user = User.find(params[:slug].split('-').last)
    @fclass = Fclass.friendly.find(params[:slug])
    @decks = @fclass.decks
  end

  def show
    @user = User.find(params[:slug].split('-').last)
    @fclass = Fclass.friendly.find(params[:slug])
    @deck = Deck.find(params[:id]) 
    @cards = @deck.cards
  end

  def edit
    @deck = Deck.find(params[:id])
    @fclass = Fclass.friendly.find(@deck.fclass_id)
    @user = User.find(@fclass.user_id)
  end

  def create
    fclass = Fclass.friendly.find(params[:slug])
    deck = fclass.decks.build(title: params[:deck_title])
    if deck.save 
      redirect_to request.referrer
    else
    end
  end

  def destroy
    deck = Deck.find(params[:id])
    deck.destroy 
    redirect_to request.referrer
  end
end

