class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create 
    @user = User.create(signup_params)
    if @user.save 
      # redirect_to root_path
    else
      render :new, status: :unprocessable_entity
    end
  end

  private
  def signup_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end
end
