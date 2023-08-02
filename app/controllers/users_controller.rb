class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create 
    @user = User.create(signup_params)
    if @user.save 
      session[:user_id] = @user.id
      redirect_to dashboard_path(@user.id)
    else
      render :new, status: :unprocessable_entity
    end
  end

  private
  def signup_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end
end
