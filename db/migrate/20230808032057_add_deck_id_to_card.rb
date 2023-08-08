class AddDeckIdToCard < ActiveRecord::Migration[7.0]
  def change
    add_reference :cards, :deck, foreign_key: true
  end
end
