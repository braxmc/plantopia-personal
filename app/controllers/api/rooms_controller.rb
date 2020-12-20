class Api::RoomsController < ApplicationController

  def index
    room = Room.where(user_id: current_user.id)
    render json: room, status: 200
  end

  def show
    render json: Room.find(params[:id])
  end

  def create
    room = Room.new(room_params)
    if room.save
      render json: room
    else
      render json: { errors: room.errors }, status: :unprocessable_entity
    end
  end

  def update
    room = Room.find(params[:id])
    if room.update(room_params)
      render json: room
    else
      render json: { errors: room.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    Room.find(params[:id]).destroy
    render json: { message: 'Room deleted' }
  end

  private
    def room_params
      params.require(:room).permit(:name, :sun, :user_id)
    end
end
