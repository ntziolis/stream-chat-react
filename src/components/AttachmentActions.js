import React from 'react';
import PropTypes from 'prop-types';

/**
 * AttachmentActions - The actions you can take on an attachment
 *
 * @example ./docs/AttachmentActions.md
 * @extends PureComponent
 */
export class AttachmentActions extends React.PureComponent {
  static propTypes = {
    // /** The id of the form input */
    // id: PropTypes.string.isRequired,
    /** The text for the form input */
    text: PropTypes.string,
    /** A list of actions */
    actions: PropTypes.array.isRequired,
    /**
     *
     * Handler for actions. Actions in combination with attachments can be used to build [commands](https://getstream.io/chat/docs/#channel_commands).
     *
     * @param name {string} Name of action
     * @param value {string} Value of action
     * @param event Dom event that triggered this handler
     */
    actionHandler: PropTypes.func.isRequired,
  };

  render() {
    const { text, id, actions, actionHandler } = this.props;

    return (
      <div className="str-chat__message-attachment-actions">
        <form className="str-chat__message-attachment-actions-form">
          <span key={0}>{text}</span>
          {actions.map((action) => (
            <button
              className={`str-chat__message-attachment-actions-button str-chat__message-attachment-actions-button--${action.style}`}
              key={`${id}-${action.value}`}
              data-value={action.value}
              onClick={actionHandler.bind(this, action.name, action.value)}
            >
              {action.text}
            </button>
          ))}
        </form>
      </div>
    );
  }
}
