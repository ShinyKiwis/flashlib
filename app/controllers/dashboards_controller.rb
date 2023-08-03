class DashboardsController < ApplicationController
  def show
    @user = helpers.current_user
  end
end
