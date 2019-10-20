class IrregEpisodesController < ApplicationController
    skip_before_action :authorized, only: [:create]

    def create
        irreg_episodes = IrregEpisode.new(irreg_episodes_params)
        irreg_episodes.date_time = DateTime.now
        irreg_episodes.save
        if irreg_episodes.valid?
            render json: {irreg_episodes: IrregEpisodeSerializer.new(irreg_episodes)}, status: :created
        else
            render json: { error: 'failed to create data' }, status: :not_acceptable
        end
    end

    private

    def irreg_episodes_params
        params.require(:health_data).permit(:patient_id, :value)
    end

end
