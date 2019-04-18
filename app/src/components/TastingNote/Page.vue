<template>
  <div>
    <div class="field">
      <label class="label">WINE:</label>
      <div class="control">
        <input class="input" type="text" placeholder="Text input" />
      </div>
    </div>

    <div class="columns">
      <div class="column is-half">
        <div class="field">
          <label class="label">VINTAGE:</label>
          <div class="control">
            <input class="input" type="text" placeholder="Text input" />
          </div>
        </div>
      </div>
      <div class="column is-half">
        <div class="field">
          <label class="label">PRICE:</label>
          <div class="control has-icons-left">
            <input class="input" type="text" placeholder="Text input" />
            <span class="icon is-left">
              <i class="fas fa-dollar-sign"></i>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="field">
      <label class="label">PRODUCER:</label>
      <div class="control">
        <input class="input" type="text" placeholder="Text input" />
      </div>
    </div>

    <div class="field">
      <label class="label">REGION & COUNTRY:</label>
      <div class="control">
        <input class="input" type="text" placeholder="Text input" />
      </div>
    </div>

    <div class="field">
      <label class="label">GRAPE VARIETY:</label>
      <div class="control">
        <input class="input" type="text" placeholder="Text input" />
      </div>
    </div>

    <div class="field">
      <label class="label">RECOMMENDED BY:</label>
      <div class="control">
        <input class="input" type="text" placeholder="Text input" />
      </div>
    </div>

    <div class="field">
      <label class="label">PLACE & DATE BOUGHT:</label>
      <div class="control">
        <input class="input" type="text" placeholder="Text input" />
      </div>
    </div>

    <div class="field">
      <label class="label">PLACE & DATE TASTED:</label>
      <div class="control">
        <textarea
          class="textarea"
          rows="2"
          type="text"
          placeholder="Text input"
        ></textarea>
      </div>
    </div>

    <div class="field">
      <label class="label">APPEARANCE:</label>
      <div class="control">
        <input class="input" type="text" placeholder="Text input" />
      </div>
    </div>

    <div class="field">
      <label class="label">NOSE:</label>
      <div class="control">
        <input class="input" type="text" placeholder="Text input" />
      </div>
    </div>

    <div class="field">
      <label class="label">TASTE:</label>
      <div class="control">
        <textarea
          class="textarea"
          type="text"
          rows="3"
          placeholder="Text input"
        ></textarea>
      </div>
    </div>

    <div class="field">
      <label class="label">FINISH:</label>
      <div class="control">
        <input class="input" type="text" placeholder="Text input" />
      </div>
    </div>

    <div class="field">
      <label class="label">OVERALL IMPRESSION:</label>
      <div class="control">
        <input class="input" type="text" placeholder="Text input" />
      </div>
    </div>

    <OverallRatings></OverallRatings>
  </div>
</template>

<script>
import OverallRatings from "./OverallRatings";
export default {
  name: "Page",
  data: () => ({}),
  components: {
    OverallRatings
  }
};
</script>
