class Api::AccountsController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: User.random_account(current_user.friends)

  end

  def update
    current_user.friends << params[:id].to_i
    current_user.save
  end

  def friends
    render json: User.liked(current_user.friends)
  end
end
