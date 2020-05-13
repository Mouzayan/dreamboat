class EncountersController < ApplicationController
  before_action :set_encounter, only: [:show, :update, :destroy, :add_comment]
  before_action :authorize_request, only: [:create, :update, :destroy]

  # GET /encounters
  def index
    @encounters = Encounter.all

    render json: @encounters
  end

  # GET /encounters/1
  def show
    render json: @encounter, include: :comments
  end

  # POST /encounters
  def create
    @encounter = Encounter.new(encounter_params)

    if @encounter.save
      render json: @encounter, status: :created
    else
      render json: @encounter.errors, status: :unprocessable_entity
    end
  end




  # PATCH/PUT /encounters/1
  def update
    if @encounter.update(encounter_params)
      render json: @encounter
    else
      render json: @encounter.errors, status: :unprocessable_entity
    end
  end

  # DELETE /encounters/1
  def destroy
    @encounter.destroy
  end

  def add_comment
    @comment = Comment.find(params[:comment_id])
    @encounter.comments << @encounter
    render json: @encounter, include: :comments
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_encounter
      @encounter = Encounter.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def encounter_params
      params.require(:encounter).permit(:encounter_description, :user_id)
    end
end
