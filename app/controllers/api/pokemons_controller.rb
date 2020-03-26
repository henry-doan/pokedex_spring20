class Api::PokemonsController < ApplicationController
  def index
    render json: Pokemon.all
  end

  def create
    @pokemon = Pokemon.new(poke_params)
    if @pokemon.save
      render json: @pokemon
    else
      render json: { errors: @pokemon.errors }, status: :unprocessable_entity
    end
  end

  def update
    @pokemon = Pokemon.find(params[:id])
    if @pokemon.update(poke_params)
      render json: @pokemon
    else
      render json: { errors: @pokemon.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    Pokemon.find(params[:id]).destroy
    render json: { message: 'Pokemon Released' }
  end

  private 
    def poke_params
      # { pokemon: {name: 'dsaf', location: '', move: ''...} }
      params.require(:pokemon).permit(
        :name, :location, :move, :type, :level
      )
    end
end
